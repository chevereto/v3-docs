# Debug

Debugging refers to ways to detect issues in your installation. By default the system is provisioned for production, debug is the only way to understand where is exactly the issue in your system and is extremely useful when it comes to narrow down the source of an error.

## Debug level

Chevereto exception handler can be configured to meet your needs. The debug levels are detailed in the following table:

| Level | Description                    |
| ----- | ------------------------------ |
| 0     | None                           |
| 1     | Error log (default)            |
| 2     | Print errors without error log |
| 3     | Print and log errors           |

Default debug level is Error log (1) and to change this you must edit the `app/settings.php` file. If your settings file doesn't have the `debug_level` property here is a sample:

```php
$settings['debug_level'] = 1;
```

### Stack Trace

Code below shows an example on how a stack trace looks like. It describes the error, provide its code and it shows the files stack.

```
Fatal error [123]: Test
Triggered in /app/routes/route.index.php at line 22

Stack trace:
#0 /lib/G/classes/class.handler.php(205): G\Handler->{closure}(G\Handler)
#1 /lib/G/classes/class.handler.php(100): G\Handler->processRequest()
#2 /app/loader.php(201): G\Handler->__construct(Array)
#3 /index.php(21): include_once('/app/loader.php')
```

::: warning DON'T PANIC
When you see something like this don't panic. The whole system works using PHP Exceptions so is normal to get a trace like this, and as you may notice the full path is not being disclosed so there are no security flaws here.
:::

**Note:** In production is not recommended to display or show any kind of PHP error or Chevereto exception. We encourage you to use `debug_level 1` for production websites.

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