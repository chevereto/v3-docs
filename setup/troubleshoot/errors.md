# Errors

When having an error Chevereto will always indicate an error id (**errorId**):

```plain
<some code>: ** errorId #dacb7f96fb9fd28d **
```

This is normal as system errors in Chevereto **are hidden by default** on production mode. Errors won't be displayed **for security reasons** and the errorId is a randomly generated unique identifer per error event.

::: tip Note: A error id is not an error message
When requesting help **you need to provide the actual error message**, not just the error id. The error id exists so you can [debug it](debug.md) for that error in your configured system log device.
:::

## Stack Trace

Code below shows an example error stack trace. It describes the error, provide its unique errorId and it shows the call stack.

```txt
Aw, snap! Internal Server Error [debug @ error_log] - https://v3-docs.chevereto.com/setup/troubleshoot/debug.html

** errorId #dacb7f96fb9fd28d **
>> PDOException [2002]: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo failed: Name or service not known
At /lib/G/classes/class.db.php:66

>> PDOException [0]: PDO::__construct(): php_network_getaddresses: getaddrinfo failed: Name or service not known
At /lib/G/classes/class.db.php:66

Stack trace:
#0 /lib/G/classes/class.db.php(66): PDO->__construct()
#1 /lib/G/classes/class.db.php(80): G\\DB->__construct()
#2 /app/loader.php(58): G\\DB::getInstance()
#3 /index.php(20): include_once('/app/loader.php')
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

If [dump update query](../../settings/system.md#dump-update-query) setting is **enabled** or if the images table has **more than 1,000,000** records, Chevereto will dump the SQL statements required to carry the database update which must run directly in the SQL console.

Chevereto has this functionality to minimize breaking your large database as the process could take several minutes to complete. When manually updating the database always keep the following considerations:

* Disconnect all peers
* Turn off the SQL server, work directly in its console (phpMyAdmin, Adminer, CLI)
* Run the SQL statements one-by-one (a semi-colon `;` denotes when a SQL statement ends)
* If everything goes well, turn everything back online
