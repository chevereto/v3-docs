# 📄 Settings file

The file at `app/settings.php` contains the application core settings like database credentials, debug level, hostname, enabled formats and more.

A settings file may look like this (we recommend checking [environment](environment.md) variables for more info).

<code-group>
<code-block title="Env">
```php
<?php
$settings = [
    'asset_storage_account_id' => getenv('CHEVERETO_ASSET_STORAGE_ACCOUNT_ID'),
    'asset_storage_account_name' => getenv('CHEVERETO_ASSET_STORAGE_ACCOUNT_NAME'),
    'asset_storage_bucket' => getenv('CHEVERETO_ASSET_STORAGE_BUCKET'),
    'asset_storage_key' => getenv('CHEVERETO_ASSET_STORAGE_KEY'),
    'asset_storage_name' => getenv('CHEVERETO_ASSET_STORAGE_NAME'),
    'asset_storage_region' => getenv('CHEVERETO_ASSET_STORAGE_REGION'),
    'asset_storage_secret' => getenv('CHEVERETO_ASSET_STORAGE_SECRET'),
    'asset_storage_server' => getenv('CHEVERETO_ASSET_STORAGE_SERVER'),
    'asset_storage_service' => getenv('CHEVERETO_ASSET_STORAGE_SERVICE'),
    'asset_storage_type' => getenv('CHEVERETO_ASSET_STORAGE_TYPE'),
    'asset_storage_url' => getenv('CHEVERETO_ASSET_STORAGE_URL'),
    'db_driver' => getenv('CHEVERETO_DB_DRIVER'),
    'db_host' => getenv('CHEVERETO_DB_HOST'),
    'db_name' => getenv('CHEVERETO_DB_NAME'),
    'db_pass' => getenv('CHEVERETO_DB_PASS'),
    'db_pdo_attrs' => getenv('CHEVERETO_DB_PDO_ATTRS'),
    'db_port' => (int) getenv('CHEVERETO_DB_PORT'),
    'db_table_prefix' => getenv('CHEVERETO_DB_TABLE_PREFIX'),
    'db_user' => getenv('CHEVERETO_DB_USER'),
    'debug_level' => (int) getenv('CHEVERETO_DEBUG_LEVEL'),
    'error_log' => getenv('CHEVERETO_ERROR_LOG'),
    'disable_php_pages' => (bool) getenv('CHEVERETO_DISABLE_PHP_PAGES'),
    'hostname_path' => getenv('CHEVERETO_HOSTNAME_PATH'),
    'hostname' => getenv('CHEVERETO_HOSTNAME'),
    'https' => (bool) getenv('CHEVERETO_HTTPS'),
    'image_formats_available' => explode(',', getenv('CHEVERETO_IMAGE_FORMATS_AVAILABLE')),
    'session.save_handler' => getenv('CHEVERETO_SESSION_SAVE_HANDLER'),
    'session.save_path' => getenv('CHEVERETO_SESSION_SAVE_PATH'),
];
```
</code-block>

<code-block title="Direct">
```php
<?php
$settings = [
    'asset_storage_account_id' => '',
    'asset_storage_account_name' => '',
    'asset_storage_bucket' => '',
    'asset_storage_key' => '',
    'asset_storage_name' => 'assets',
    'asset_storage_region' => '',
    'asset_storage_secret' => '',
    'asset_storage_server' => '',
    'asset_storage_service' => '',
    'asset_storage_type' => 'local',
    'asset_storage_url' => '',
    'db_driver' => 'mysql',
    'db_host' => 'localhost',
    'db_name' => 'chevereto',
    'db_pass' => 'pass',
    'db_pdo_attrs' => [],
    'db_port' => 3306,
    'db_table_prefix' => 'chv_',
    'db_user' => 'user',
    'debug_level' => 1,
    'error_log' => 'syslog',
    'disable_php_pages' => false,
    'hostname_path' => '/',
    'hostname' => 'chevereto.loc',
    'https' => true,
    'image_formats_available' => ['PNG', 'GIF', 'JPG', 'BMP', 'WEBP'],
    'session.save_handler' => 'session_save_handler',
    'session.save_path' => 'absolute_path_to_sessions',
];
```
</code-block>
</code-group>

## Runtime `php.ini` configuration

As `app/settings.php` is loaded everywhere and not override by the update procedure, is the safer place to add runtime `php.ini` directives using [`ini_set`](https://www.php.net/manual/en/function.ini-set.php).
