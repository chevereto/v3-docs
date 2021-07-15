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

A [cron](https://en.wikipedia.org/wiki/Cron) is required to process the application background jobs.

### Cron.d

Create a cron file at `/etc/cron.d/chevereto` with the following contents:

```sh
* * * * * www-data php /var/www/html/cli.php -C cron

```

> Note: In debian-based systems the cron file must have a newline eof

In the instruction above [* * * * *](https://crontab.guru/#*_*_*_*_*) is the cron schedule to run every minute, `www-data` is the webserver, `php` is the PHP binary, `/var/www/html/cli.php` is the location of the Chevereto CLI and `-C cron` is the option passed to Chevereto.

::: danger Suit your context
The above cron works when running debian-based OS provided with our default deploy provisioning. If you don't use our server provisioning you will be likely required to alter the default instructions for user, PHP binary and Chevereto CLI location.
:::

### Command

The command should be run by `www-data` user. Note use `which php` to locate the binary as its location may vary in different systems.

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
