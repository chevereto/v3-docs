# System Requirements

Minimum machine requirements:

**Note:** When running with minimum requirements it is recommended to [add swap space](https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-20-04).

* 1GB RAM
* 1 CPU

## Cron

::: v4
Check the updated documentation at [⏲️ Cron](https://v4-docs.chevereto.com/application/stack/cron.html).
:::

A [cron](https://en.wikipedia.org/wiki/Cron) is required to process the application background jobs. A cron is system in which a command is executed in a regular basis, this way Chevereto can perform operations in the background.

This cron setup reference applies only for Debian-based servers with root access. We **strongly recommend** checking your server documentation on how to setup and run cron.

### Command

The command should be run by the web-server user which is `www-data` (may vary). To run the command in Chevereto it requires to call PHP binary at the Chevereto CLI.

::: tip PHP binary
Use `which php` to locate the PHP binary as its location may vary in different systems and configurations.
:::

Command below uses `sudo -u www-data` to run the command as `www-data` user permissions. PHP binary is at `php` and the Chevereto CLI is at `/var/www/html/cli.php`. The command argument passed to Chevereto is `-C cron`.

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

With a [cron.d file](https://manpages.debian.org/stretch/cron/cron.8) the cron can be easily setup. For example:

```sh
cat >/etc/cron.d/chevereto <<EOM
* * * * * www-data php /var/www/html/cli.php -C cron
EOM
```

### Cron schedule

In the instruction above [* * * * *](https://crontab.guru/#*_*_*_*_*) is the cron schedule to run every minute.

::: danger Suit your context
The above default cron works when running our official provisioning. If you don't use our server provisioning you will be required to alter the default instructions for user, PHP binary and Chevereto CLI location. Refer to your system documentation.
:::
