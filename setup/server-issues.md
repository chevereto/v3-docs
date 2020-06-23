# Server issues

Not all web servers follow some basic standards and in some cases even having a server that meets the [system requirements](./requirements.md) you could find issues that won't allow Chevereto to work properly.

## Webserver

These issues are related to bad configurations in the server software. Most common issues are:

- Apache `mod_rewrite` disabled or `Allow Override All` missing in virtual hosts
- Missing writing permissions in Chevereto paths
- Bad or invalid setup (timezone, multi-views, timeout, etc.)
- Wrong NGINX server block / PHP-FPM issues

## PHP

PHP runs over your Webserver in different flavours (module or `fcgi`) and with different libraries and settings that can cause issues:

- Outdated PHP version (Chevereto needs PHP 5.6+)
- Misconfiguration in PHP libraries (GD, cURL, BCMath, etc.)
- Bad php.ini directives
- Low execution time (system is halted before complete)
- Bad sessions setup (permissions)
- eAccelerator enabled (Deprecated for PHP 5.3+)

Note that `php.ini` directives are also responsible for the file upload limits. You should check this article for more info: [PHP common pitfalls](http://www.php.net/manual/en/features.file-upload.common-pitfalls.php).

## MySQL

Most common MySQL errors are related to wrong credentials and missing privileges. The most common things to worry are:

- Wrong credentials (user/password)
- Invalid or missing privileges (can't read or write in the database)
- Outdated MySQL version (Chevereto needs MySQL 5.0)

## Settings hacks

Due to a large number of poorly configured servers, we started to add settings hacks in order to allow you to force PHP settings. At this time, you can hack the session save path, timezone and the HTTPS flag. Pay attention to these extra lines that you should add to your `app/settings.php` file.

```php
$settings['session.save_path'] = 'absolute path';
$settings['default_timezone'] = 'timezone identifier';
$settings['https'] = TRUE; // TRUE to force PHP HTTPS
```

You can even use this file to force a `php.ini` directive using `ini_set()` . We encourage you to don't do this but feel free to use it as your last resort, it shouldn't break anything.
