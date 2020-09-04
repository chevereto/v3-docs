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

## Runtime `php.ini` configuration

As `app/settings.php` is loaded everywhere and not override by the update procedure, is the safer place to add runtime `php.ini` directives using [`ini_set`](https://www.php.net/manual/en/function.ini-set.php).

## Options

```php
$settings['session.save_path'] = 'absolute_path_to_sessions';
$settings['default_timezone'] = 'timezone identifier';
$settings['https'] = TRUE;
```

- Use `session.save_path` to set the target session directory
- Use `default_timezone` to set the right [timezone](https://www.php.net/manual/en/timezones.php)
- Use `https` `true` to always force HTTPS (required if HTTPS isn't auto detected)
