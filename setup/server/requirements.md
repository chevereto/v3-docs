# Server Requirements

## PHP

| Version | PHP |
| ------- | --- |
| 3.20    | 7.4 |

Chevereto is [PHP](https://php.net/) software, it has been designed using:

* [PHP packages](https://deb.sury.org/) from Ondřej Surý.
* [PHP extensions](https://www.php.net/manual/en/extensions.membership.php) provided by [PECL](https://pecl.php.net/).

Packages and PECL provides the same convenience, but as packages are made for debian-based systems you should prefer PECL if you don't have a compatible system.

::: warning Packages vs PECL
Packages not only contain the software, it could trigger other effects in the system.
:::

### PHP configuration

The following `ini` values are recommended for Chevereto installations.

```sh
upload_max_filesize = 50M;
post_max_size = 50M;
max_execution_time = 30;
memory_limit = 512M;
```

| Property            | Description                                      | Example             |
| ------------------- | ------------------------------------------------ | ------------------- |
| upload_max_filesize | Maximum upload size                              | `50M` for 50 MB     |
| post_max_size       | Maximum post size                                | Same as above       |
| max_execution_time  | Maximum time to execute the software, in seconds | `30` for 30 seconds |
| memory_limit        | Maximum memory to allocate                       | `512M` for 512 MB   |

You can toggle this limits to reflect your hardware and server load. Check this article for more info: [PHP common pitfalls](http://www.php.net/manual/en/features.file-upload.common-pitfalls.php).

### PHP Extensions

The following PHP extensions are required for Chevereto.

* curl
* exif
* fileinfo
* hash
* imagick
* gd
* json
* mbstring
* pdo
* pdo-mysql
* session
* xml
* zip

### PHP Features

Chevereto requires unrestricted access to all PHP functions. If any PHP function is removed it could cause Chevereto to fail or to not work at all. Note that the following functions must not be restricted:

* [set_time_limit](https://www.php.net/set-time-limit)

## Image library

The image library (GD, Imagick) should be provided with support for `PNG GIF JPG BMP WEBP`. By default, Chevereto uses Imagick and fallback to GD.

If you need to explicit use GD you can add this key to [Settings file](settings-file.md):

```php
$settings['image_library'] = 'gd';
```

::: danger Workaround missing formats
If the server doesn't provide support for all the image formats handled by Chevereto you must use the following [Settings file](settings-file.md) workaround.

In the following example Chevereto is configured with explicit support only for PNG, GIF, BMP and JPG (removes WEBP):

```php
$settings['image_formats_available'] = ['PNG', 'GIF', 'BMP', 'JPG'];
```
:::

## Configuring image library

Check for [CHEVERETO_IMAGE_LIBRARY](environment.md#image-handling-variables) for changing the default image library used by Chevereto.

### ImageMagick

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

Chevereto user will require **read/write** access in the following paths:

* `/tmp`
* `app/content/`
* `app/content/languages/`
* `app/content/languages/cache/`
* `app/content/system/`
* `content/`
* `images/`

## Database

| Version | MySQL  | MariaDB |
| ------- | ------ | ------- |
| 3.20    | 5.7, 8 | 10      |

* Database user must have `ALL PRIVILEGES` over the target database
* InnoDB table storage engine

::: danger Upgrading from old installation
Old versions using MyISAM table storage engine will require to convert the old tables to InnoDB. Read [Convert MyISAM tables to InnoDB](https://dev.mysql.com/doc/refman/8.0/en/converting-tables-to-innodb.html)
:::

## Web server

## Disable PHP in sensitive files

* Apache HTTP server

Use an `.htaccess` file to disable PHP interpreter on folders containing public upload content.

```apacheconf
<FilesMatch "\.php$">
	<IfModule !mod_authz_core.c>
		Order Allow,Deny
		Deny from all
	</IfModule>
	<IfModule mod_authz_core.c>
		Require all denied
	</IfModule> 
</FilesMatch>

SetHandler default-handler
php_flag engine off
```

* nginx

```nginx
location ~* images/.*\.php$  {
    deny all;
}
```

### URL rewriting

The web server must rewrite HTTP requests like `GET /image/some-name.<id>` to `/index.php`. Instructions for [Nginx](https://nginx.org/) and [Apache HTTP Server](https://httpd.apache.org/) below.

#### Nginx URL rewriting

`example.com.conf`

```nginx
# Context limits
client_max_body_size 50M;

# Disable access to sensitive files
location ~* (app|content|lib)/.*\.(po|php|lock|sql)$ {
    deny all;
}

# Disable PHP on image path
location ~* images/.*\.php$  {
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

For setups under any kind of proxy (including [CloudFlare](https://support.cloudflare.com/hc/en-us/articles/200170786-Restoring-original-visitor-IPs)) is required that the web server sets the appropriate value for the client connecting IP.

::: danger
If real connecting IP is not configured Chevereto won't be able to detect the real visitors IPs, failing to deliver IP based restrictions and flood control.
:::

* Nginx: `ngx_http_realip_module`
* Apache: `mod_remoteip`
