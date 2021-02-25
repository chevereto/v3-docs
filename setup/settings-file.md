# Settings file

The file at `app/settings.php` contains the application settings like database credentials, table prefix, driver, debug level and moore. The file may look like this:

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
$settings['session.save_path'] = 'absolute_path_to_sessions';
$settings['default_timezone'] = 'timezone_identifier';
$settings['https'] = TRUE;
$settings['image_formats_available'] = ['JPG', 'PNG', 'GIF'];
```

| Option                    | Effect                                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------------------- |
| `session.save_path`       | Set the target session directory                                                                      |
| `default_timezone`        | Set the [timezone](https://www.php.net/manual/en/timezones.php)                                       |
| `https`                   | Use `true` to always force HTTPS                                                                      |
| `image_formats_available` | Comma-separated list of system-enabled image formats. Defaults `['PNG', 'GIF', 'JPG', 'BMP', 'WEBP']` |

## Runtime `php.ini` configuration

As `app/settings.php` is loaded everywhere and not override by the update procedure, is the safer place to add runtime `php.ini` directives using [`ini_set`](https://www.php.net/manual/en/function.ini-set.php).
