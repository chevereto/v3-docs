# Initial setup

This will create the chevereto database tables and the Chevereto admin user. This is needed for the first time the system gets installed and it can be made using HTTP (web) or CLI.

## HTTP setup (recommended)

* Go to `/install` and submit the installation form.

## CLI setup

* Run the following command:

```sh
sudo -u www-data php /var/www/html/cli.php -C install \
    -u dev \
    -e dev@chevereto.loc \
    -x password
```

| Option | Description    |
| ------ | -------------- |
| u      | Admin username |
| e      | Admin email    |
| x      | Admin password |
