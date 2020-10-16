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

### Recommended `php.ini`

The following values are recommended for Chevereto installations.

```sh
upload_max_filesize = 20M;
post_max_size = 20M;
max_execution_time = 30;
memory_limit = 512M;
```

| Property            | Description                                      | Example             |
| ------------------- | ------------------------------------------------ | ------------------- |
| upload_max_filesize | Maximum upload size                              | `20M` for 20 MB     |
| post_max_size       | Maximum post size                                | Same as above       |
| max_execution_time  | Maximum time to execute the software, in seconds | `30` for 30 seconds |
| memory_limit        | Maximum memory to allocate                       | `512M` for 512 MB   |

You can toggle this limits to reflect your hardware and server load. Check this article for more info: [PHP common pitfalls](http://www.php.net/manual/en/features.file-upload.common-pitfalls.php).

## MySQL issues

The most common things to worry are:

- Wrong credentials (user/password)
- Invalid or missing privileges (can't read or write in the database)
- Outdated MySQL version
- Bad configured socket
