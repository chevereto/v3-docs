# 🔠 Environment

This is the environment variables reference for Chevereto.

::: tip Settings file?
If you can't use environment variables in your setup you must rely on [settings file](settings-file.md) to configure these.
:::

## Assets

Environment variables for storing assets that can be uploaded to any of the supported external storage APIs.

Note that assets refers to user provided assets such as avatars and backgrounds, also website graphics like logos and homepage covers.

Check [External storage](../../settings/external-storage.md) for adding external storage servers for user content uploads.

| Variable                             | Example                                     |
| ------------------------------------ | ------------------------------------------- |
| CHEVERETO_ASSET_STORAGE_ACCOUNT_ID   | 123                                         |
| CHEVERETO_ASSET_STORAGE_ACCOUNT_NAME | account_name                                |
| CHEVERETO_ASSET_STORAGE_BUCKET       | bucket                                      |
| CHEVERETO_ASSET_STORAGE_KEY          | key                                         |
| CHEVERETO_ASSET_STORAGE_NAME         | assets                                      |
| CHEVERETO_ASSET_STORAGE_REGION       | us-west-2                                   |
| CHEVERETO_ASSET_STORAGE_SECRET       | secret                                      |
| CHEVERETO_ASSET_STORAGE_SERVER       | server                                      |
| CHEVERETO_ASSET_STORAGE_SERVICE      | service                                     |
| CHEVERETO_ASSET_STORAGE_TYPE         | s3                                          |
| CHEVERETO_ASSET_STORAGE_URL          | `https://s3-us-west-2.amazonaws.com/bucket` |

## Database

Environment variables for the database details.

| Variable                  | Example                  |
| ------------------------- | ------------------------ |
| CHEVERETO_DB_DRIVER       | mysql                    |
| CHEVERETO_DB_HOST         | mariadb                  |
| CHEVERETO_DB_NAME         | chevereto                |
| CHEVERETO_DB_PASS         | user_database_password   |
| CHEVERETO_DB_PDO_ATTRS    | `{"key":"value"}` (json) |
| CHEVERETO_DB_PORT         | 3306 (int)               |
| CHEVERETO_DB_TABLE_PREFIX | chv_                     |
| CHEVERETO_DB_USER         | chevereto                |

## Debug

Environment variables for [debug](../troubleshoot/debug.md).

::: tip
When using Docker it always logs to `/dev/stderr` regardless this configuration.
:::

| Variable              | Example                      |
| --------------------- | ---------------------------- |
| CHEVERETO_DEBUG_LEVEL | 1 (int)                      |
| CHEVERETO_ERROR_LOG   | /var/log/chevereto-error.log |

## Session

Environment variables for the session driver.

| Variable                       | Example |
| ------------------------------ | ------- |
| CHEVERETO_SESSION_SAVE_HANDLER | files   |
| CHEVERETO_SESSION_SAVE_PATH    | /tmp    |

## File upload

Environment variables for the file uploading limits.

| Variable                      | Example |
| ----------------------------- | ------- |
| CHEVERETO_UPLOAD_MAX_FILESIZE | 50M     |
| CHEVERETO_POST_MAX_SIZE       | 50M     |
| CHEVERETO_MAX_EXECUTION_TIME  | 30      |
| CHEVERETO_MEMORY_LIMIT        | 512M    |

## Servicing

Environment variables for the servicing used.

| Variable                          | Example                                    |
| --------------------------------- | ------------------------------------------ |
| CHEVERETO_HOSTNAME                | chevereto.loc                              |
| CHEVERETO_HOSTNAME_PATH           | /                                          |
| CHEVERETO_HTTPS                   | `true` (boolean)                           |
| CHEVERETO_SERVICING               | docker                                     |
| CHEVERETO_DISABLE_PHP_PAGES       | `false` (boolean)                          |
| CHEVERETO_IMAGE_FORMATS_AVAILABLE | `['JPG','PNG','BMP','GIF','WEBP']` (array) |
