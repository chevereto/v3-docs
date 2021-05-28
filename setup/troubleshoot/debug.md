# 🐞 Debug

Debug enables to dump information about errors that may be affecting the software functionality. If Chevereto isn't working properly you should start debugging it.

## Configuring debug

Debug can be configured using [environment](../system/environment.md#debug) variables. It can be also enabled using the [settings file](../system/settings-file.md).

When using Docker, logs are forwarded to `/dev/stderr`. For all other provisioning this falls to the default [error_log](https://www.php.net/manual/errorfunc.configuration.php#ini.error-log) handling.

Default `php.ini` configuration for `error_log` is empty which leverages the configuration to the process running PHP. For example, Apache logs by default at `/var/log/apache2/error.log`. There's also common to use `syslog` which sends the error to your system log facility.

### Application level

You can easily override to configure another error log device (such as a regular file) using the environment variable `CHEVERETO_ERROR_LOG`.

## Accessing logs

<code-group>
<code-block title="Docker">
```sh
docker logs -f container-name | sed 's/\\n/\n/g'
```
</code-block>

<code-block title="Shell">
```sh
tail -f /var/log/apache2/error.log | sed 's/\\n/\n/g'
```
</code-block>
</code-group>

## Debug levels

Depending on your work context you may need to configure debug accordingly.

| Level | Description                         |
| ----- | ----------------------------------- |
| 0     | None                                |
| 1     | Error log (default)                 |
| 2     | Print errors (no logging)           |
| 3     | Print errors and log to `error_log` |

## Error reporting

::: warning
Enable this is recommended only in development environments.
:::

To enable printed errors (`error_reporting`) you will need to go to your `Dashboard > Settings > System`. By enabling this all the runtime errors will be printed which means that they will be visible.
