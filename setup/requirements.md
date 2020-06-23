Requirements
============

* Server: Nginx / Apache
* Database: MySQL 8 / MariaDB 10
* PHP 7.3+ (5.6 min) with extensions: `curl hash json mbstring pdo pdo-mysql zip session`

PHP settings
------------

The following `ini` directives are recommended for Chevereto installations:

```
upload_max_filesize = 20M;
post_max_size = 20M;
max_execution_time = 30;
memory_limit = 512M;
```

File permissions
----------------

Chevereto requires write access in the following paths (recursive):

* `app/content`
* `app/content/languages`
* `app/content/languages/cache`
* `app/content/locks`
* `app/content/system`
* `content`
* `images`

Chevereto is PHP software and the web server (Nginx/Apache) inherit its permissions to Chevereto so the files must be accesible to the user running the webserver (usually `www-data`). The webserver user should be in the owner group of your website folders to allow Chevereto to work properly.

`Read` and `Write` access to the temp folder (`/tmp` in Linux; `C:/Windows/Temp` in Windows).

Database
--------

### Privileges

MySQL user must have `ALL PRIVILEGES` over the target database.

### cPanel create database

* Login to your website cPanel
* Go to "**MySQL® Database Wizard**"
    * **Step 1** will create the database that Chevereto will use to store data. Save that user name (it will be asked later on).
    * **Step 2** will create the database user who connects to the database. Save that user name and password (it will be asked later on).
    * **Step 3** will grant permissions to that database. Make sure to select `ALL PRIVILEGES` because this will add the permissions to the database user over the database where Chevereto will be installed.

Real connecting IP
------------------

For setups under any kind of proxy (including CloudFlare) it is required that the web server sets the appropiate value for the client connecting IP. For Nginx, you must use `ngx_http_realip_module`. For Apache, `mod_remoteip` according to the IP ranges of your proxy.

Pretty URLs
-----------

### Apache Server

You will need Apache [mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html). Chevereto comes with a `.htaccess` file that manages the URL rewriting so you only need to upload this file and make sure that `mod_rewrite` is enabled and working

If you have issues with pretty URLs and Apache try enabling the `RewriteBase /` directive and make sure that in your virtualhost you have `Allow Override All`

### Nginx server

Use the following directives in your site configuration:

```
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

### Other webservers

You should refer to any documentation regarding URL rewriting or "friendly URLs" for your server software.