# 😰 Errors

## Stack Trace

Code below shows an example error stack trace. It describes the error, provide its code and it shows the files stack.

```txt
Fatal error [123]: Test
Triggered in /app/routes/route.index.php at line 22

Stack trace:
#0 /lib/G/classes/class.handler.php(205): G\Handler->{closure}(G\Handler)
#1 /lib/G/classes/class.handler.php(100): G\Handler->processRequest()
#2 /app/loader.php(201): G\Handler->__construct(Array)
#3 /index.php(21): include_once('/app/loader.php')
```

## It is Chevereto related?

Chevereto exists on top of many different technologies working at the same time and any component of this stack could fail.

It is likely that Chevereto **won't cause** the following issues:

* Unable to connect (network)
* SQL "server gone"
* CORS (missing icons, fonts)
* http 400 @ `/install`
* Cookies/Sessions not working

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

* Disconnect all peers
* Turn off the SQL server, work directly in its console (phpMyAdmin, Adminer, CLI)
* Run the SQL statements one-by-one (a semi-colon `;` denotes when a SQL statement ends)
* If everything goes well, turn everything back online
