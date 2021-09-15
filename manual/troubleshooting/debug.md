# Debug

Debug enables to dump information about errors that may be affecting the software functionality. If Chevereto isn't working properly you must start debugging it.

To debug Chevereto you will need to:

1. Configure debug
2. Look up for the generated log in the target log facility

## Configuring debug

Debug can be configured using [environment](../system/environment.md#debug-variables) variables and it can be also enabled using the [settings file](../system/settings-file.md).

> Table below shows the equivalent setting key to environment variables.

| Setting key | Environment equivalent |
| ----------- | ---------------------- |
| debug_level | CHEVERETO_DEBUG_LEVEL  |
| error_log   | CHEVERETO_ERROR_LOG    |

::: tip Custom log location
Configure your own error log device (file, system, etc.) to control where the logs will be happening. If you don't alter this it will fallback to the default system log facility.
:::

## Debug levels

Depending on your work context you may need to configure debug accordingly.

::: warning
Error level >= 2 is not recommended for production environments. Is not safe to print the errors to the screen, handle it with care.
:::

::: tip Containers
Containers will always log to `/dev/stderr` regardless this setting.
:::

| Level | Description                              |
| ----- | ---------------------------------------- |
| 0     | No debug                                 |
| 1     | Debug to `configured log`                |
| 2     | Print errors (no logging)                |
| 3     | Print errors and log to `configured log` |

**Note:** Debug level can be only configured using environment variables or the settings file. Debug level **can't be configured** from the dashboard panel.

## Accessing logs

To access logs you will need to determine the location for those. If you don't configure debug Chevereto will follow to the default [error_log](https://www.php.net/manual/errorfunc.configuration.php#ini.error-log) handling configured for your PHP installation.

### Where are the default logs?

This vary a lot depending the server provider:

* Apache/NGINX
  * Logs by default at `/var/log/apache2/error.log` OR `/var/log/nginx/error.log`
  * Apache: Virtual host directive defines custom error log location
  * NGINX: Server block defines custom error log location
  * Commonly configured for `/var/www/domain.com/logs`
  * Some configure it for `syslog`
* cPanel
  * Vary a lot from providers and cPanel version
  * Logs by default at `../domain.com.error.log` (parent of `public_html` folder)
* Docker
  * Always logs to `/dev/stderr`

### I can't find the logs

Don't worry, if you can't find the logs we strongly suggest you to request [extra support](https://chevereto.com/support) service so we safely do this for you.

Alternatively, you can configure `debug_level` >= 2 but note that such error reporting level will expose your installation. Restrict any public access to the system and revert back to `debug_level=1` as soon as possible.

### Reading logs

Logs can be easily accessed by direct file access or by running commands accordingly.

<code-group>
<code-block title="Shell">
```sh
tail -f /var/log/apache2/error.log | sed 's/\\n/\n/g'
```
</code-block>

<code-block title="Docker">
```sh
docker logs -f container-name | sed 's/\\n/\n/g'
```
</code-block>
</code-group>

## Error reporting

::: warning Not for production!
Enable this is recommended only in development environments.
:::

To enable printed error reporting you will need to go to [system settings](../../settings/system.md). By enabling this all the runtime errors will be printed which means that they will be visible.
