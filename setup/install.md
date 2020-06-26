# Install

> Installing on a VPS? Check our [Root install (LEMP)](./root-install.md) guide

Make sure that your server meets all the [system requirements](./requirements.md) then do one of the following procedures:

## A. Install using our Installer

The [installer](installer.md) is a single `.php` file which will download and extract the latest release. This is the recommended way to provision Chevereto.

## B. Install via zip

- Download the [latest release](https://chevereto.com/panel/downloads)
- Upload all the contents of the `chevereto` folder to your server (usually in the `public_html` folder)
- Go to your target website URL and follow the instructions

## C. Install using Softaculous/Fantastico

If your web hosting includes [Softaculous](https://softaculous.com/)/[Fantastico](https://netenberg.com/fantastico.php), you can install Chevereto-Free with just one click, it should be available for one-click install under the "Image Galleries" category.

> **Note:** Our paid edition isn't available in these script libraries. However, you can install Chevereto Free and then **one-click upgrade** it to the paid edition directly from the `/dashboard` panel.

## D. Install using Docker

Docker allows you to easily install and maintain all the server dependencies with ease by using automated application containers. The ready-to-use Docker images are under [nmtan/chevereto](https://hub.docker.com/r/nmtan/chevereto/) (many thanks to [Tan Nguyen](https://github.com/tanmng)).

> **Note:** Use the `installer` tag to use Docker with our paid edition.

## Install issues

Most common install issue is missing [system requirements](./requirements.md) so make sure that you are running a compatible system and that all the data is correct like working MySQL credentials and privileges.

> Check our [community support](https://chevereto.com/community/categories/support.43/) in case you need help with the server provisioning

## Settings File

The file `app/settings.php` contains the application settings like DB credentials and other settings. It may look like this:

```php
<?php

$settings['db_host'] = '127.0.0.1';
$settings['db_port'] = 'port';
$settings['db_name'] = 'name';
$settings['db_user'] = 'user';
$settings['db_pass'] = 'password';
$settings['db_table_prefix'] = 'chv_';
$settings['db_driver'] = 'mysql';
$settings['debug_level'] = 1;
```

### Settings Hacks

Code below shows an example on how to override settings that will affect the behavior of the system.

```php
$settings['session.save_path'] = 'absolute_path_to_sessions';
$settings['default_timezone'] = 'timezone identifier';
$settings['https'] = TRUE;
```

- Use `session.save_path` to set the target session directory
- Use `default_timezone` to set the right [timezone](https://www.php.net/manual/en/timezones.php)
- Use `https` `true` to always force HTTPS (required if HTTPS isn't auto detected)

### Runtime php.ini configuration

As `app/settings.php` is loaded everywhere and it is not override by the update procedure, this is the safer place to add runtime `php.ini` directives using [`ini_set`](https://www.php.net/manual/en/function.ini-set.php).