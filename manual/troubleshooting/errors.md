# Errors

Application errors can be caused by several different causes and understanding in which layer the error is affecting the system will drive towards an easy outcome. Kindly understand that in multi-layered systems like Chevereto is crucial to understand when an error is caused by Chevereto or when the problem is elsewhere.

## Error Id

Chevereto logs all those unique events (errors) under an unique **errorId** associated with a unique stack trace and debug information. When detecting a system error Chevereto will always indicate the error id:

```plain
<some code>: ** errorId #dacb7f96fb9fd28d **
```

Application errors in Chevereto **are hidden by default** on production mode, the only public part is the errorId identifier. Errors won't be displayed **for security reasons** and the errorId is a randomly generated unique identifer per error event.

::: tip Note: A error id is not an error message
The error id exists so you can lookup for that error in your configured system debug device.
:::

## Stack Trace

Code below shows an example error stack trace. It describes the error, provide its unique errorId and it shows the call stack.

```txt
Aw, snap! Internal Server Error [debug @ error_log] - https://chv.to/v3/debug

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

* Unable to connect (network issues)
* MySQL server gone
* CORS (missing icons, fonts)
* Cookies/Sessions not working (permissions)
* Restricted functions (`set_time_limit`)
* Server restrictions (`mod_security`)

## Common errors

### HTTP 500 Internal Server Error

This is a generic error response emitted by the web server layer and this it only indicates the existence of an error, it doesn't specify any concrete reason for it.

As these errors may spawn in any layer, it is recommended to check the system error log device (read [accessing logs](debug.md#accessing-logs) to learn how-to).

::: warning Debugging HTTP 500 error
This kind of errors need to be debugged in the web server layer, which will vary depending on the web server software being used. Refer to your web server provisioning documentation.
:::

Once you get the actual error you can either solve the situation in your own context or use that information to request [support](https://chevereto.com/support) from us.

### Aw, snap! Internal Server Error

```txt
Aw, snap! Internal Server Error - Check your error_log or enable debug_mode = 3
```

This message indicates an error caught by Chevereto, but hidden due to **production error reporting** settings. To actually know what is going on you have to [debug](./debug.md).

### Database messages

::: danger Dumped update query
If at `/install` you see a plain text message starting with `#Dumped update query` it means that you **MUST** manually run the printed queries in your MySQL console.
:::

If [dump update query](../../settings/system.md#dump-update-query) setting is **enabled** or if the images table has **more than 1,000,000** records, Chevereto will dump the SQL statements required to carry the database update which must run directly in the SQL console.

Chevereto has this functionality to minimize breaking your large database as the process could take several minutes to complete. When manually updating the database always keep the following considerations:

* Disconnect all peers
* Turn off the SQL server, work directly in its console (phpMyAdmin, Adminer, CLI)
* Run the SQL statements one-by-one (a semi-colon `;` denotes when a SQL statement ends)
* If everything goes well, turn everything back online
