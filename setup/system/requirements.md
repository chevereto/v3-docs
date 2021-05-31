# 📌 Requirements

::: tip Docker
Refer to the official [Docker images for Chevereto](https://github.com/chevereto/docker) for the recommended system setup to run Chevereto, including all libraries required.
:::

## PHP

| Version | PHP |
| ------- | --- |
| 3.20    | 7.4 |

Chevereto is [PHP](https://php.net/) software.

* [PHP packages](https://deb.sury.org/) from Ondřej Surý.
* [PHP extensions](https://www.php.net/manual/en/extensions.membership.php) provided by [PECL](https://pecl.php.net/).

Packages and PECL provides the same convenience, but as packages are made for debian-based systems you should prefer PECL if you don't have a compatible system.

::: warning Packages vs PECL
Note that packages not only contain the software, it could also trigger other effects in the system.
:::

### Extensions

The following PHP extensions are required for Chevereto.

* imagick
* curl
* hash
* json
* mbstring
* pdo
* pdo-mysql
* zip
* session
* xml
* fileinfo

## ImageMagick

Chevereto needs ImageMagick to process images and it must be built with support for `PNG GIF JPG BMP WEBP`.

Additional recommended ImageMagick configuration at `/etc/ImageMagick-6/policy.xml` file:

```xml
<policymap>
    <!-- policies -->
    <policy domain="resource" name="width" value="16KP"/>
    <policy domain="resource" name="height" value="16KP"/>
</policymap>
```

### Filesystem

User running `php` must be in the owner group of your installation directory. This is required to allow Chevereto to modify the filesystem for uploading, one-click update and many other features.

> PHP usually runs under `www-data`

Chevereto user will require **read/write** access in the following paths:

* `/tmp`
* `app/content/`
* `app/content/languages/`
* `app/content/languages/cache/`
* `app/content/system/`
* `content/`
* `images/`

## Database

| Version | MySQL | MariaDB |
| ------- | ----- | ------- |
| 3.20    | 8     | 10      |

Chevereto requires a MySQL/MariaDB database. Database user must have `ALL PRIVILEGES` over the target database.

## Cron

A cron (scheduled run command) is required to process the application background jobs. The cron may look like this where [* * * * *](https://crontab.guru/#*_*_*_*_*) is the cron schedule to run every minute.

```sh
* * * * * IS_CRON=1 /usr/bin/php /var/www/html/cli.php -C cron
```

### Command

<code-group>
<code-block title="V3.20+">
```sh
sudo -u www-data php /var/www/html/cli.php -C cron
```
</code-block>

<code-block title="Older">
```sh
sudo -u www-data IS_CRON=1 php /var/www/html/cron.php
```
</code-block>
</code-group>

#### Docker command

<code-group>
<code-block title="V3.20+">
```sh
docker exec -it \
    --user www-data \
    chevereto-container /usr/local/bin/php /var/www/html/cli.php -C cron
```
</code-block>

<code-block title="Older">
```sh
docker exec -it \
    --user www-data \
    -e IS_CRON=1 \
    chevereto-container /usr/local/bin/php /var/www/html/cron.php
```
</code-block>
</code-group>

## Web server

### URL rewriting

The web server must rewrite HTTP requests like `GET /image/some-name.<id>` to `/index.php`. Instructions for [Nginx](https://nginx.org/) and [Apache HTTP Server](https://httpd.apache.org/) below.

#### Nginx URL rewriting

`example.com.conf`

```nginx
# Context limits
client_max_body_size 25M;

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

```apacheconf
    <Directory /var/www/html>
        Options -Indexes +FollowSymLinks +MultiViews
        AllowOverride All
        Require all granted
    </Directory>
```

Apache configuration `.htaccess` files are already included in the software.

`/.htaccess`

```apacheconf
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

::: danger
If real connecting IP is not properly configured Chevereto won't be able to detect the visitors IPs, failing to deliver IP based restrictions and flood control.
:::

* Nginx: `ngx_http_realip_module`
* Apache: `mod_remoteip`
