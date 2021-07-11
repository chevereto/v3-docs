# Environment

These are the system level settings that can be used to tweak Chevereto provisioning.

## Passing values

To pass settings to Chevereto is recommended to use system level environment variables so it entirely depends on how you run the PHP process.

::: tip Settings file
If you can't use environment variables in your setup you can use the [settings file](settings-file.md) to configure the Chevereto variables.
:::

### Apache HTTP Web Server (PHP module)

If PHP is provided using `mpm_prefork` you must refer to the documentation on [Apache HTTP Server environment variables](https://httpd.apache.org/docs/current/env.html). You may check our real use cases at [chevereto/vultr-marketplace](https://github.com/chevereto/vultr-marketplace/blob/main/files/var/lib/cloud/scripts/per-instance/provision.sh).

### Other setups

For these you will be running [PHP-FPM](https://www.php.net/manual/en/install.fpm.configuration.php) so you can add those settings at your `php-fpm.conf` file.

### Application servers

For these you will be running PHP CLI so you should be able to pass those at `php.ini` for your CLI. You can also `export` those in your shell. Kindly refer to the documentation of each application server for the best way to pass those to Chevereto.

### Container

Pass the environment variables directly to the container run command or at `docker-compose` layer.

## Assets variables

Environment variables for storing assets that can be uploaded to any of the supported external storage APIs.

Note that assets refers to user provided assets such as avatars and backgrounds, also website graphics like logos and homepage covers.

Check [External storage](../../settings/external-storage.md) for adding external storage servers for user content uploads.

| Variable                             | Setting Key                | Example        |
| ------------------------------------ | -------------------------- | -------------- |
| CHEVERETO_ASSET_STORAGE_ACCOUNT_ID   | asset_storage_account_id   | 123            |
| CHEVERETO_ASSET_STORAGE_ACCOUNT_NAME | asset_storage_account_name | account_name   |
| CHEVERETO_ASSET_STORAGE_BUCKET       | asset_storage_bucket       | bucket         |
| CHEVERETO_ASSET_STORAGE_KEY          | asset_storage_key          | key            |
| CHEVERETO_ASSET_STORAGE_NAME         | asset_storage_name         | assets         |
| CHEVERETO_ASSET_STORAGE_REGION       | asset_storage_region       | us-west-2      |
| CHEVERETO_ASSET_STORAGE_SECRET       | asset_storage_secret       | secret         |
| CHEVERETO_ASSET_STORAGE_SERVER       | asset_storage_server       | server         |
| CHEVERETO_ASSET_STORAGE_SERVICE      | asset_storage_service      | service        |
| CHEVERETO_ASSET_STORAGE_TYPE         | asset_storage_type         | s3             |
| CHEVERETO_ASSET_STORAGE_URL          | asset_storage_url          | `<url>/bucket` |

## Database variables

Environment variables for the database details.

| Variable                  | Setting Key     | Example                  |
| ------------------------- | --------------- | ------------------------ |
| CHEVERETO_DB_DRIVER       | db_driver       | mysql                    |
| CHEVERETO_DB_HOST         | db_host         | mariadb                  |
| CHEVERETO_DB_NAME         | db_name         | chevereto                |
| CHEVERETO_DB_PASS         | db_pass         | user_database_password   |
| CHEVERETO_DB_PDO_ATTRS    | db_pdo_attrs    | `{"key":"value"}` (json) |
| CHEVERETO_DB_PORT         | db_port         | `3306`                   |
| CHEVERETO_DB_TABLE_PREFIX | db_table_prefix | chv_                     |
| CHEVERETO_DB_USER         | db_user         | chevereto                |

## Debug variables

Environment variables for [debug](../troubleshoot/debug.md).

::: tip
When using Docker it always logs to `/dev/stderr` regardless this configuration.
:::

| Variable              | Setting Key | Example                      |
| --------------------- | ----------- | ---------------------------- |
| CHEVERETO_DEBUG_LEVEL | debug_level | `1`                          |
| CHEVERETO_ERROR_LOG   | error_log   | /var/log/chevereto-error.log |

## Session variables

Environment variables for the session driver.

| Variable                       | Setting Key          | Example              |
| ------------------------------ | -------------------- | -------------------- |
| CHEVERETO_SESSION_SAVE_HANDLER | session.save_handler | `redis` `files`      |
| CHEVERETO_SESSION_SAVE_PATH    | session.save_path    | `tcp://redis` `/tmp` |

## Image handling variables

Environment variables for controlling image handling.

| Variable                          | Setting Key             | Example                          |
| --------------------------------- | ----------------------- | -------------------------------- |
| CHEVERETO_IMAGE_FORMATS_AVAILABLE | image_formats_available | `'JPG','PNG','BMP','GIF','WEBP'` |
| CHEVERETO_IMAGE_LIBRARY           | image_library           | `imagick` `gd`                   |

## Hostname variables

Environment variables for the hostname configuration.

| Variable                | Setting Key   | Example       |
| ----------------------- | ------------- | ------------- |
| CHEVERETO_HOSTNAME      | hostname      | chevereto.loc |
| CHEVERETO_HOSTNAME_PATH | hostname_path | /             |
| CHEVERETO_HTTPS         | https         | `true`        |

## System context variables

Environment variables for the context where Chevereto system is being provided. Depending on where you run it, you may want to disable some sensitive functionality.

| Variable                      | Setting Key         | Example |
| ----------------------------- | ------------------- | ------- |
| CHEVERETO_DISABLE_PHP_PAGES   | disable_php_pages   | `false` |
| CHEVERETO_DISABLE_UPDATE_HTTP | disable_update_http | `false` |
| CHEVERETO_DISABLE_UPDATE_CLI  | disable_update_cli  | `false` |

## File upload variables

Environment variables for the file uploading limits. Note that the following environment variables will only work for container provisioning.

| Variable                      | Example |
| ----------------------------- | ------- |
| CHEVERETO_UPLOAD_MAX_FILESIZE | 50M     |
| CHEVERETO_POST_MAX_SIZE       | 50M     |
| CHEVERETO_MAX_EXECUTION_TIME  | 30      |
| CHEVERETO_MEMORY_LIMIT        | 512M    |

For **non-container** based provisioning you need to change those at [php.ini configuration](./requirements.md#php-configuration).
