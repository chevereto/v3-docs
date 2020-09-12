# Debug

In production is usually that when something goes wrong the error is suppressed. It is an intended behavior to don't expose application system messages to the public and to manually enable debug to check the system.

## Debug level

The built-in exception handler levels are detailed in the following table:

| Level | Description                    |
| ----- | ------------------------------ |
| 0     | None                           |
| 1     | Error log (default)            |
| 2     | Print errors (no logging) |
| 3     | Print errors and log to `error_log`)           |

Default debug level is `1` and to change this you must edit the `app/settings.php` file. If your [settings file](./settings-file.md) doesn't have the `debug_level` property here is a sample:

```php
$settings['debug_level'] = 1;
```

### Stack Trace

Code below shows an example on how a stack trace looks like. It describes the error, provide its code and it shows the files stack.

```txt
Fatal error [123]: Test
Triggered in /app/routes/route.index.php at line 22

Stack trace:
#0 /lib/G/classes/class.handler.php(205): G\Handler->{closure}(G\Handler)
#1 /lib/G/classes/class.handler.php(100): G\Handler->processRequest()
#2 /app/loader.php(201): G\Handler->__construct(Array)
#3 /index.php(21): include_once('/app/loader.php')
```

::: warning Production
In production is not recommended to display or show any kind of PHP error or Chevereto exception. We encourage you to use `debug_level 1` for production websites.
:::

## PHP error reporting

To enable printed errors (`error_reporting`) you will need to go to your `Dashboard > Settings > System`. By enabling this all the runtime errors will be printed which means that they will be visible. Enable this is recommended only in development environments.

## Troubleshoot

Usually servers are configured for **production usage** so it is desired to don't print any of these messages to the end-user. This usually means no-errors being printed, white pages, 500 errors, which could really annoy your debugging experience.

Check these if you have trouble debugging:

- You have configured the [debug level](#debug-level)
- You have configured the [PHP error reporting](#php-error-reporting)
- `php.ini` `display_errors` and `error_log` are properly configured
- The user running the process has permissions on the logs path
- You have restarted PHP-FPM/Apache/Nginx to apply changes

## Debugging HTTP

To debug HTTP you can use any web browser console, which is a tool usually built-in in all modern web browsers. It allows you to debug everything HTTP related.

### Using the web browser console

- The browser console is usually bind to `F12` key or via context menu **inspect element**
- Once in the console, locate the **network tab**, where you will be able to analyze HTTP traffic
- Filter by type Document and XHR
- Tip: Check **Preserve Log** to debug between page loads

Each URL request can be debugged, pay attention to the headers section for relevant information like the HTTP status code.
