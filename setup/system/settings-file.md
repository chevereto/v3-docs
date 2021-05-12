# 📄 Settings file

The file at `app/settings.php` contains the application core settings like database credentials, debug level, hostname, enabled formats and more.

A settings file may look like this (we recommend using [environment](environment.md) variables).

<code-group>
<code-block title="Env">
```php
<?php
$settings = [
    'db_host' => getenv('CHEVERETO_DB_HOST'),
    'db_name' => getenv('CHEVERETO_DB_NAME'),
    'db_user' => getenv('CHEVERETO_DB_USER'),
    'db_pass' => getenv('CHEVERETO_DB_PASS'),
    'db_port' => getenv('CHEVERETO_DB_PORT'),
    'db_table_prefix' => getenv('CHEVERETO_DB_TABLE_PREFIX'),
    'db_driver' => getenv('CHEVERETO_DB_DRIVER'),
    'db_pdo_attrs' => getenv('CHEVERETO_DB_PDO_ATTRS'),
    'image_formats_available' => getenv('CHEVERETO_IMAGE_FORMATS_AVAILABLE'),
    'hostname' => getenv('CHEVERETO_HOSTNAME'),
    'hostname_path' => getenv('CHEVERETO_HOSTNAME_PATH'),
    'debug_level' => getenv('CHEVERETO_DEBUG_LEVEL'),
    'session.save_handler' => getenv('CHEVERETO_SESSION_SAVE_HANDLER'),
    'session.save_path' => getenv('CHEVERETO_SESSION_SAVE_PATH'),
    'https' => getenv('CHEVERETO_HTTPS');
];
```
</code-block>

<code-block title="Direct">
```php
<?php
$settings = [
  'db_host' => 'localhost',
  'db_name' => 'chevereto',
  'db_user' => 'user',
  'db_pass' => 'pass',
  'db_port' => '3306',
  'db_table_prefix' => 'chv_',
  'db_driver' => 'mysql',
  'db_pdo_attrs' => [],
  'image_formats_available' => ['PNG', 'GIF', 'JPG', 'BMP', 'WEBP'],
  'hostname' => 'chevereto.loc',
  'hostname_path' => '/',
  'debug_level' => 1,
  'session.save_handler' => 'session_save_handler',
  'session.save_path' => 'absolute_path_to_sessions',
  'https' => true;
];
```
</code-block>
</code-group>

## Runtime `php.ini` configuration

As `app/settings.php` is loaded everywhere and not override by the update procedure, is the safer place to add runtime `php.ini` directives using [`ini_set`](https://www.php.net/manual/en/function.ini-set.php).
