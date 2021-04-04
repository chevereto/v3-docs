# Requirements

- PHP 7.4
- Database: MySQL 8 / MariaDB 10
- Cron
- Web Server: Nginx / Apache / *any*

## PHP

PHP **must** be provided with the following extensions: `curl hash json mbstring pdo pdo-mysql zip session xml fileinfo`.

PHP **must** include support for image formats `PNG GIF JPG BMP WEBP` (under Imagick or GD).

::: tip Imagick
The system uses `Imagick` (ImageMagick) image processing **by default**. Fallback to GD.
:::

### php.ini

The following `ini` directives are recommended for Chevereto installations:

```ini
upload_max_filesize = 20M;
post_max_size = 20M;
max_execution_time = 30;
memory_limit = 512M;
```

## Database

MySQL/MariaDB user must have `ALL PRIVILEGES` over the target database. Chevereto will require the following for connecting to the database:

- Database name
- Database user and its password

## Cron

A cron is required to process the application background jobs. The cron for your installation may look like this:

```sh
* * * * * IS_CRON=1 /usr/bin/php /var/www/html/chevereto.loc/public_html/cron.php
```

Where [* * * * *](https://crontab.guru/#*_*_*_*_*) is the cron schedule to run every minute.

### Using Docker

When using Docker is recommended that the cron setup executes outside the container. You can achieve that by running this from the host:

```sh
docker exec -it \
    --user www-data \
    -e IS_CRON=1 \
    my-container /usr/local/bin/php /var/www/html/cron.php
```

### Run cron

You can go to [explainshell](https://explainshell.com/explain?cmd=IS_CRON%3D1+%2Fusr%2Fbin%2Fphp+%2Fvar%2Fwww%2Fhtml%2Fchevereto.loc%2Fpublic_html%2Fcron.php+%3E%2Fdev%2Fnull+2%3E%261) to inspect the command, you can freely alter it to match your needs. Run the command as `www-data` user by adding `sudo -u www-data` to the command:

```sh
sudo -u www-data IS_CRON=1 /usr/bin/php /var/www/html/chevereto.loc/public_html/cron.php
```

## Web server

### PHP provisioning

The web server must be configured to execute [PHP](http://php.net/) and it is **recommended** to provision it using [PHP-FPM](https://www.php.net/manual/en/install.fpm.php).

### Filesystem

The webserver user should be in the owner group of your installation. This is required to allow Chevereto to modify the filesystem, which is required to one-click update and many other features.

> Web server user is usually `www-data`

Chevereto requires **recursive write** access in the following paths:

- `app/content`
- `app/content/languages`
- `app/content/languages/cache`
- `app/content/system`
- `content`
- `images`

`Read` and `Write` access to the temp folder (`/tmp` in Linux; `C:/Windows/Temp` in Windows).

### URL rewriting

The web server must rewrite HTTP requests like `GET /image/some-name.<id>` to `/index.php`. Instructions for [Nginx](https://nginx.org/) and [Apache HTTP Server](https://httpd.apache.org/) below.

#### Nginx URL rewriting

`example.com.conf`

```nginx
# Context limits
client_max_body_size 20M;

# Disable access to sensitive files
location ~* (app|content|lib)/.*\.(po|php|lock|sql)$ {
    deny all;
}

# Image not found replacement
location ~ \.(jpe?g|png|gif|webp)$ {
    log_not_found off;
    error_page 404 /content/images/system/default/404.gif;
}

# CORS header (avoids font rendering issues)
location ~ \.(ttf|ttc|otf|eot|woff|woff2|font.css|css|js)$ {
    add_header Access-Control-Allow-Origin "*";
}

# Pretty URLs
location / {
    index index.php;
    try_files $uri $uri/ /index.php$is_args$query_string;
}
```

#### Apache HTTP Server URL rewriting

Make sure that [`mod_rewrite`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) is enabled and that your virtual host settings allows to perform URL rewriting:

```apache
    <Directory /var/www/html>
        Options -Indexes +FollowSymLinks +MultiViews
        AllowOverride All
        Require all granted
    </Directory>
```

Apache configuration `.htaccess` files are already included in the software.

`/.htaccess`

```apache
# Disable server signature
ServerSignature Off

# Enable CORS across all your subdomains (replace dev\.local with your domain\.com)
# SetEnvIf Origin ^(https?://.+\.dev\.local(?::\d{1,5})?)$   CORS_ALLOW_ORIGIN=$1
# Header append Access-Control-Allow-Origin  %{CORS_ALLOW_ORIGIN}e   env=CORS_ALLOW_ORIGIN
# Header merge  Vary "Origin"

# Disable directory listing (-indexes), Multiviews (-MultiViews)
Options -Indexes
Options -MultiViews

<IfModule mod_rewrite.c>

    RewriteEngine On

    # If you have problems with the rewrite rules remove the "#" from the following RewriteBase line
    # You will also have to change the path to reflect the path to your Chevereto installation
    # If you are using alias is most likely that you will need this.
    #RewriteBase /

    # 404 images
    # If you want to have your own fancy "image not found" image remove the "#" from RewriteCond and RewriteRule lines
    # Make sure to apply the correct paths to reflect your current installation
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule images/.+\.(gif|jpe?g|png|bmp|webp) - [NC,L,R=404]
    #RewriteRule images/.+\.(gif|jpe?g|a?png|bmp|webp) content/images/system/default/404.gif [NC,L]

    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} !\.(css|js|html|htm|rtf|rtx|svg|svgz|txt|xsd|xsl|xml|asf|asx|wax|wmv|wmx|avi|bmp|class|divx|doc|docx|exe|gif|gz|gzip|ico|jpe?g|jpe|mdb|mid|midi|mov|qt|mp3|m4a|mp4|m4v|mpeg|mpg|mpe|mpp|odb|odc|odf|odg|odp|ods|odt|ogg|pdf|png|pot|pps|ppt|pptx|ra|ram|swf|tar|tif|tiff|wav|webp|wma|wri|xla|xls|xlsx|xlt|xlw|zip)$ [NC]
    RewriteRule . index.php [L]

</IfModule>
```

### Real connecting IP

For setups under any kind of proxy (including CloudFlare) is required that the web server sets the appropriate value for the client connecting IP.

> ⚠ If this is not configured the software won't be able to detect the users IPs

- Nginx: `ngx_http_realip_module`
- Apache: `mod_remoteip`
