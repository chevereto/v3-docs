Configuration
=============

All the Chevereto configurable values can be found at Dashboard > Settings. In a system like Chevereto there are Chevereto configurable values and server configurable values.

Chevereto Configurable Values
-----------------------------

With Chevereto you can configure almost everything like website mode, enable or disable account registration, upload parameters, etc. There is a rich collection of configurable values that you will discover in your Dashboard settings.

Something that you should be aware of is that Chevereto can't override server limits and in those rare cases you will need to refer to your server limits and configuration.

Server Configurable Values
--------------------------

Just like any other web script Chevereto runs over a layered system and limits in these layers determinate some Chevereto boundaries. Some configurable values to check are:

*   Upload max size (`php.ini` `upload_max_size` and `post_max_size`)
*   Max clients (Apache or Nginx MaxClients)
*   Max connections (MySQL max_connections

These limits are in the server layer and Chevereto can't override them. For instance if you want to increase the upload size limit (Default 2 MB) you must first change that limit in the php.ini file.