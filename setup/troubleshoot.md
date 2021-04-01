# Troubleshoot

Having issues when running the software? Follow the indications in this guide to be able to troubleshoot any problem you may be experiencing.

::: tip Do
It is encouraged that you identify/isolate the alleged problem **before** asking others for help. Document and inform yourself about the context of the problem before contacting others, including Chevereto support.
:::

::: danger Don't
Do please do not run in panic for help.
:::

## Debugging

Web servers are usually provided for **production usage** where is desired to don't output any of these messages to the end-user. This usually means white error pages, which could really annoy your debugging experience.

Check these if you have trouble debugging:

- You have configured [debug level](./debug.md#debug-level)
- You have configured [PHP error reporting](./debug.md#php-error-reporting)
- `php.ini` `display_errors` and `error_log` are properly configured
- The user running the process has permissions on the logs path
- You have restarted PHP-FPM/Apache/Nginx to apply changes

## It is Chevereto related?

The software exists on top of many different technologies working at the same time and any component of this "stack" can fail. It is very likely that Chevereto won't cause directly the following issues:

- Unable to connect
- SQL "server gone"
- CORS (missing icons, fonts)
- Not found `/install`
- HTTPS not working
- Cookies/Sessions not working

Not being Chevereto related means that you will likely get an advice on what stuff you should check in your stack, but it won't drive to us (as a project and community) the responsibility to account for that.

## Understanding errors

### Aw, snap! Internal Server Error

```txt
Aw, snap! Internal Server Error - Check your error_log or enable debug_mode = 3
```

This message indicates an error caught by Chevereto, but hidden due to **production error reporting** settings. To actually know what is going on you have to [debug](./debug.md).

> By default the system hints `debug_mode = 3` but you can use any level (1, 2, 3).

When debug is enabled, the message will now include the full error trace which allows a better understanding of the situation. This information is what you need to provide others when asking for help.

### Database

::: danger Dumped update query
If at `/install` you see a plain text message starting with `#Dumped update query` it means that you **MUST** manually run the printed queries in your MySQL console.
:::

If [dump update query](../settings/system.md#dump-update-query) setting is **enabled** or if the images table has **more than 1,000,000** records, Chevereto will dump the SQL statements required to carry the database update which must run directly in the SQL console.

Chevereto has this functionality to minimize breaking your large database as the process could take several minutes to complete. When manually updating the database always keep the following considerations:

- Disconnect all peers
- Turn off the SQL server, work directly in its console (phpMyAdmin, Adminer, CLI)
- Run the SQL statements one-by-one (a semi-colon `;` denotes when a SQL statement ends)
- If everything goes well, turn everything back online
