# Server issues

::: v4
Check the updated documentation at [⛑️ Troubleshoot](https://v4-docs.chevereto.com/developer/how-to/troubleshoot.html).
:::

Not all web servers follow basic standards and in some cases even having a server that meets the [system requirements](../server/requirements.md) you could find issues that won't allow Chevereto to work.

## Webserver

- Apache `mod_rewrite` disabled or `Allow Override All` missing in virtual hosts
- Missing writing permissions in Chevereto paths
- Bad or invalid setup (timezone, multi-views, timeout, etc.)
- Wrong NGINX server block / PHP-FPM issues
- `mod_security` or any other artifact blocking requests from/to

## PHP

PHP runs over your web-server in different favours and with different libraries and settings that can cause issues:

- Outdated PHP version
- Misconfiguration in PHP libraries
- Bad php.ini directives
- Low execution time
- Bad sessions setup
- Open basedir restrictions

## MySQL Database

- Wrong credentials (user/password)
- Invalid or missing privileges (read/write in the database)
- Outdated MySQL version
- Bad configured MySQL socket
- Usage of MyISAM storage engine (`ALTER` table to InnoDB storage)
