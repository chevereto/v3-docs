# 🐞 Debug

Debug enables to dump information about errors that may be affecting the software functionality. If Chevereto isn't working properly you should start debugging it.

## Enabling debug

Debug can be enabled using [environment](../system/environment.md) variables, it can be also enabled using [settings file](../system/settings-file.md).

::: tip
Using Docker? debug is always at `/dev/stderr`. Run `docker logs -f container` to see those.
:::

## Debug level

| Level | Description                          |
| ----- | ------------------------------------ |
| 0     | None                                 |
| 1     | Error log (default)                  |
| 2     | Print errors (no logging)            |
| 3     | Print errors and log to `error_log`) |

Default debug level is `1`  If your [settings file](../settings-file.md) doesn't have the `debug_level` property here is a sample:

```php
$settings['debug_level'] = 1;
```

## Error reporting

::: warning
Enable this is recommended only in development environments.
:::

To enable printed errors (`error_reporting`) you will need to go to your `Dashboard > Settings > System`. By enabling this all the runtime errors will be printed which means that they will be visible.
