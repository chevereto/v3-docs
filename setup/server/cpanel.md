# cPanel

This guide will enable you to install Chevereto on cPanel from scratch.

## Database

Go to the **MySQL Database Wizard** under **Databases**.

![databases](../../src/screen/cpanel/databases.png)

Follow the process to create a database and its user. Take note on the MySQL **database name**, **username** and **password**.

![MySQL wizard create](../../src/screen/cpanel/mysql-wizard-create-database.png)

Grant `ALL PRIVILEGES` on the newly created database and user.

![MySQL wizard privileges](../../src/screen/cpanel/mysql-wizard-privileges.png)

## PHP

Go to **MultiPHP INI Editor** under **Software**.

![Software](../../src/screen/cpanel/software.png)

Select your website under **Configure PHP INI basic settings**.

![MultiPHP INI editor](../../src/screen/cpanel/mutliphp-ini-editor.png)

Take note on the following configurable keys:

![MultiPHP INI keys](../../src/screen/cpanel/multiphp-ini-keys.png)

* `max_execution_time` 30
* `memory_limit` 256M (min)
* Use `post_max_size` and `upload_max_filesize` to limit the file upload max. size allowed for uploads

Go to **MultiPHP Manager** and select `PHP 7.4` for your website.

![MultiPHP manager](../../src/screen/cpanel/multiphp-manager.png)

* From here you can also enable the [extensions required](requirements.md#php-extensions) by Chevereto.

::: danger PHP Extensions
Refer to the cPanel [PHP Extensions and Applications Package](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/) and WHM [How to install a PHP extension in WHM](https://support.cpanel.net/hc/en-us/articles/360050971633) documentation if your cPanel provisioning lacks the extensions required by Chevereto.
:::

## Files

Go to **File Manager** under **Files**.

![Files](../../src/screen/cpanel/files.png)

Navigate to your website `public_html` directory.

![File Manager](../../src/screen/cpanel/file-manager.png)

Click on **Upload** and **Select File** [installer.php](https://chevereto.com/download/file/installer)

![File Manager upload](../../src/screen/cpanel/file-manager-upload.png)

## Install Chevereto

Go to `http://your_website/installer.php` and follow the [Installer instructions](https://github.com/chevereto/installer/blob/master/HTTP.md).
