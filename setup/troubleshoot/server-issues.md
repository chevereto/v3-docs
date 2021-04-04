# Server issues

Not all web servers follow some basic standards and in some cases even having a server that meets the [system requirements](./requirements.md) you could find issues that won't allow Chevereto to work properly.

## Webserver issues

- Apache `mod_rewrite` disabled or `Allow Override All` missing in virtual hosts
- Missing writing permissions in Chevereto paths
- Bad or invalid setup (timezone, multi-views, timeout, etc.)
- Wrong NGINX server block / PHP-FPM issues
- `mod_security` or any other artifact blocking requests from/to

## PHP issues

PHP runs over your Webserver in different flavours (module or `fcgi`) and with different libraries and settings that can cause issues:

- Outdated PHP version (Chevereto needs PHP 5.6+)
- Misconfiguration in PHP libraries (GD, cURL, BCMath, etc.)
- Bad php.ini directives
- Low execution time (system is halted before complete)
- Bad sessions setup (permissions)
- eAccelerator enabled (Deprecated for PHP 5.3+)

## MySQL issues

The most common things to worry are:

- Wrong credentials (user/password)
- Invalid or missing privileges (can't read or write in the database)
- Outdated MySQL version
- Bad configured socket
