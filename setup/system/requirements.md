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

A cron is required to process the application background jobs. The cron may look like this where [* * * * *](https://crontab.guru/#*_*_*_*_*) is the cron schedule to run every minute.

### Cron.d

Create a cron file at `/etc/cron.d/chevereto` with the following contents:

```sh
* * * * * www-data php /var/www/html/cli.php -C cron

```

> Note: In debian-based systems the cron file must have a newline eof

### Command

The command should be run by `www-data` user. Note that location of `php` binary may vary in different systems.

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
