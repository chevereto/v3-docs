# Server Requirements

## PHP

::: v4
Check the updated documentation at [🐘 PHP](https://v4-docs.chevereto.com/application/stack/php.html).
:::

::: danger PHP support
Chevereto V3.20 works only with PHP 7.4. Upgrade to [Chevereto V4](https://v4-docs.chevereto.com/application/installing/upgrading.html) **for PHP 8 support**.
:::

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

* BCMath
* curl
* exif
* fileinfo
* gd
* hash
* imagick
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

::: v4
Check the updated documentation at [🐬 MySQL Server](https://v4-docs.chevereto.com/application/stack/mysql-server.html).
:::

| Version | MySQL  | MariaDB |
| ------- | ------ | ------- |
| 3.20    | 5.7, 8 | 10      |

* Database user must have `ALL PRIVILEGES` over the target database
* InnoDB table storage engine

::: danger Upgrading from old installation
Old versions using MyISAM table storage engine will require to convert the old tables to InnoDB. Read [Convert MyISAM tables to InnoDB](https://dev.mysql.com/doc/refman/8.0/en/converting-tables-to-innodb.html)
:::

## Web server configuration

::: v4
Check the updated documentation at [🪶 Web Server](https://v4-docs.chevereto.com/application/stack/web-server.html).
:::

### Apache HTTP server

Make sure that [`mod_rewrite`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) is enabled and that your virtual host settings allows to perform URL rewriting:

```apacheconf
    <Directory /var/www/html>
        Options -Indexes +FollowSymLinks +MultiViews
        AllowOverride All
        Require all granted
    </Directory>
```

Apache configuration `.htaccess` files are already included in the software.

#### Restrict direct access to PHP files

Edit the [Virtual Host](https://httpd.apache.org/docs/2.4/vhosts/) entry by adding the following directive for your upload directory. This will disable PHP interpreter on folders containing public upload content:

> Must edit `/var/www/html/images` to reflect your actual upload directory.

```apacheconf
<Directory /var/www/html/images>
    AllowOverride None
    <FilesMatch "\.(?:[Pp][Hh][Pp][345]?|[Pp][Hh][Tt][Mm][Ll])|(po|sql|html?)$">
        <IfModule !mod_authz_core.c>
            Order Allow,Deny
            Deny from all
        </IfModule>
        <IfModule mod_authz_core.c>
            Require all denied
        </IfModule>
    </FilesMatch>
    <IfModule mod_php7.c>
        php_flag engine off
    </IfModule>
    <FilesMatch ".+\.*$">
        SetHandler !
    </FilesMatch>
    <IfModule mod_rewrite.c>
        RewriteRule ^.*\.php$ - [F,L]
    </IfModule>
</Directory>
```

If you don't have access to editing Apache Virtual Host you can use a `.htaccess` file in the alleged paths:

```apacheconf
<FilesMatch "\.(?:[Pp][Hh][Pp][345]?|[Pp][Hh][Tt][Mm][Ll])|(po|sql|html?)$">
    <IfModule !mod_authz_core.c>
        Order Allow,Deny
        Deny from all
    </IfModule>
    <IfModule mod_authz_core.c>
        Require all denied
    </IfModule>
</FilesMatch>
<IfModule mod_php7.c>
    php_flag engine off
</IfModule>
<FilesMatch ".+\.*$">
    SetHandler !
</FilesMatch>
<IfModule mod_rewrite.c>
    RewriteRule ^.*\.php$ - [F,L]
</IfModule>
```

### NGINX

`nginx.conf` for `server {}` block:

```nginx
    # Disable access to sensitive application files
    location ~* (app|content|lib)/.*\.(po|php|lock|sql)$ {
        return 404;
    }
    location ~* composer\.json|composer\.lock|.gitignore$ {
        return 404;
    }
    location ~* /\.ht {
        return 404;
    }

    # Image not found replacement
    location ~* \.(jpe?g|png|gif|webp)$ {
        log_not_found off;
        error_page 404 /content/images/system/default/404.gif;
    }

    # CORS header (avoids font rendering issues)
    location ~* \.(ttf|ttc|otf|eot|woff|woff2|font.css|css|js)$ {
        add_header Access-Control-Allow-Origin "*";
    }

    # PHP front controller
    location / {
        index index.php;
        try_files $uri $uri/ /index.php$is_args$query_string;
    }

    # Single PHP-entrypoint (disables direct access to .php files)
    location ~* \.php$  {
        internal;
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
    }
```

### Real connecting IP

For setups under any kind of proxy (including [CloudFlare](https://support.cloudflare.com/hc/en-us/articles/200170786-Restoring-original-visitor-IPs)) is required that the web server sets the appropriate value for the client connecting IP.

::: danger
If real connecting IP is not configured Chevereto won't be able to detect the real visitors IPs, failing to deliver IP based restrictions and flood control.
:::

* NGINX: `ngx_http_realip_module`
* Apache HTTP Server: `mod_remoteip`
