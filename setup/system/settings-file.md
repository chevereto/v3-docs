# 📄 Settings file

The file at `app/settings.php` contains the application settings like database credentials, table prefix, driver, debug level and more.

::: tip Try environment variables
We recommended to use [environment variables](environment.md) instead `app/settings.php`.
:::

A settings file may look like this:

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

## Options

```php
$settings['session.save_handler'] = 'session_save_handler';
$settings['session.save_path'] = 'absolute_path_to_sessions';
$settings['https'] = TRUE;
$settings['image_formats_available'] = ['JPG', 'PNG', 'GIF'];
```

| Option                    | Effect                                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------------------- |
| `session.save_handler`    | Set the session save handler                                                                          |
| `session.save_path`       | Set the target session directory                                                                      |
| `https`                   | Use `true` to always force HTTPS                                                                      |
| `image_formats_available` | Comma-separated list of system-enabled image formats. Defaults `['PNG', 'GIF', 'JPG', 'BMP', 'WEBP']` |

## Runtime `php.ini` configuration

As `app/settings.php` is loaded everywhere and not override by the update procedure, is the safer place to add runtime `php.ini` directives using [`ini_set`](https://www.php.net/manual/en/function.ini-set.php).
