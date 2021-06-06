# 💯 Post-Install

## Initial setup

Initial setup refers to the process that actually creates the chevereto database and create its admin user. You need to run this just one, the first time you install Chevereto.

You can install Chevereto using HTTP (web) or using CLI.

### HTTP setup

* Go to `/install` and submit the installation form.

### CLI setup (V3.20+)

* Run the following command:

<code-group>
<code-block title="Shell">
```sh
sudo -u www-data php /var/www/html/cli.php -C install \
    -u dev \
    -e dev@chevereto.loc \
    -x password
```
</code-block>

<code-block title="Docker">
```sh
docker exec -it \
    --user www-data \
    my-container /usr/local/bin/php /var/www/html/cli.php -C install \
    -u dev \
    -e dev@chevereto.loc \
    -x password
```
</code-block>
</code-group>

| Option | Description    |
| ------ | -------------- |
| u      | Admin username |
| e      | Admin email    |
| x      | Admin password |

## Background jobs (V3.18+)

Background tasks needs to be executed by running a [cron](../setup/system/requirements.md#cron).

::: danger
Don't forget to provide the cron executing to fullfil the application background jobs. If this is not configured Chevereto won't remove expired images, check for updates, process external storage deletes and run maintenance tasks.
:::

## Setup email

Go to [Email settings](../settings/email.md) to configure the transactional email service. Don't skip this as user registration rely on this.
