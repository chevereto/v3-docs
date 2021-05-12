# 🏞 Environment

This is the environment variables reference for Chevereto.

## Debug

Environment variables for [debug](../troubleshoot/debug.md).

::: tip
When using Docker it always logs to `/dev/stderr` regardless this configuration.
:::

| Variable              | Example |
| --------------------- | ------- |
| CHEVERETO_DEBUG_LEVEL | 1       |

## Database

Environment variables for the database details.

| Variable                  | Example                |
| ------------------------- | ---------------------- |
| CHEVERETO_DB_HOST         | mariadb                |
| CHEVERETO_DB_USER         | chevereto              |
| CHEVERETO_DB_PASS         | user_database_password |
| CHEVERETO_DB_NAME         | chevereto              |
| CHEVERETO_DB_TABLE_PREFIX | chv_                   |
| CHEVERETO_DB_PORT         | 3306                   |
| CHEVERETO_DB_DRIVER       | mysql                  |
| CHEVERETO_DB_PDO_ATTRS    | `{"key":"value"}`      |

## Session

Environment variables for the session driver.

| Variable                       | Example |
| ------------------------------ | ------- |
| CHEVERETO_SESSION_SAVE_HANDLER | files   |
| CHEVERETO_SESSION_SAVE_PATH    | /tmp    |

## File upload

Environment variables for the file uploading upper limits.

| Variable                      | Example |
| ----------------------------- | ------- |
| CHEVERETO_UPLOAD_MAX_FILESIZE | 25M     |
| CHEVERETO_POST_MAX_SIZE       | 25M     |
| CHEVERETO_MAX_EXECUTION_TIME  | 30      |
| CHEVERETO_MEMORY_LIMIT        | 512M    |

## Servicing

Environment variables for the servicing used.

| Variable                          | Example                            |
| --------------------------------- | ---------------------------------- |
| CHEVERETO_HOSTNAME                | chevereto.loc                      |
| CHEVERETO_HOSTNAME_PATH           | /                                  |
| CHEVERETO_HTTPS                   | `1`                                |
| CHEVERETO_SERVICING               | docker                             |
| CHEVERETO_DISABLE_PHP_PAGES       | `0`                                |
| CHEVERETO_IMAGE_FORMATS_AVAILABLE | `["JPG","PNG","BMP","GIF","WEBP"]` |
