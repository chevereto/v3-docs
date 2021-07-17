# System Requirements

Minimum requirements:

* 1GB RAM
* 1 CPU

> Kindly note that systems like Chevereto depends entirely on the use case so this is just a base reference. If your system gets bigger you need to consider upgrading your machines and tweak swap space, cache strategies, etc.

::: tip Requirements per provisioning method
* [Server requirements](../server/requirements.md)
* [Container requirements](../container/requirements.md)
:::

## Cron

A [cron](https://en.wikipedia.org/wiki/Cron) is required to process the application background jobs. A cron is system in which a command is executed in a regular basis, this way Chevereto can perform operations in the background.

### Command

The command should be run by the webserver user, this is usually the `www-data` user. To run the command in Chevereto it requires to call PHP binary at the Chevereto CLI.

::: tip PHP binary
Use `which php` to locate the PHP binary as its location may vary in different systems and configurations.
:::

Command below uses `sudo -u www-data` to run the command as `www-data` user permissions. PHP binary is at `php` and the Chevereto CLI is at `/var/www/html/cli.php`. The actual command passed to Chevereto is just `-C cron`.

<code-group>
<code-block title="V3.20+">
```sh
sudo -u www-data php /var/www/html/cli.php -C cron
```
</code-block>

<code-block title="Older">
```sh
sudo -u www-data IS_CRON=1 php /var/www/html/cron.php
```
</code-block>
</code-group>

#### Docker command

<code-group>
<code-block title="V3.20+">
```sh
docker exec -it \
    --user www-data \
    chevereto-container php /var/www/html/cli.php -C cron
```
</code-block>

<code-block title="Older">
```sh
docker exec -it \
    --user www-data \
    -e IS_CRON=1 \
    chevereto-container php /var/www/html/cron.php
```
</code-block>
</code-group>

### Cron.d file

With a [cron.d file](https://manpages.debian.org/stretch/cron/cron.8) the cron can be easily setup. To do this create a cron file at `/etc/cron.d/chevereto` with the following contents:

```sh
* * * * * www-data php /var/www/html/cli.php -C cron

```

> Note: In debian-based systems the cron file must have a newline eof

In the instruction above [* * * * *](https://crontab.guru/#*_*_*_*_*) is the cron schedule to run every minute and `www-data` is the webserver user. The rest of the instruction is just the command.

::: danger Suit your context
The above default cron works when running our official deploy provisioning. If you don't use our server provisioning you will be likely required to alter the default instructions for user, PHP binary and Chevereto CLI location. Refer to your system documentation.
:::

## Server requirements

If you don't run containers you need to review the [Server Requirements](../server/requirements.md).

### Image library

Refer to [Image library](../server/requirements.md#image-library) server requirements.
