# Container Bootstrapped

::: danger
This is used only for development purposes and this is still a work in progress. Use [Container Registry](../../setup/container/registry.md) for production grade container provisioning.
:::

This guide is for bootstrapped container based provisioning for Chevereto using system images published at [Docker Hub](https://hub.docker.com/r/chevereto/chevereto).

This provisioning uses containers to provide only the servicing layer, the **application is provided on first container run** and re-used from there.

## Requirements

* [Docker](https://docker.com)

## Step-by-step guide

* Create the `chv-network` that containers will use to comunicate each other.

```sh
docker network create chv-network
```

* Create the `chv-mariadb` container connected to `chv-network`.

```sh
docker run -it \
    --name chv-mariadb \
    --network chv-network \
    --network-alias mariadb \
    --health-cmd='mysqladmin ping --silent' \
    -e MYSQL_ROOT_PASSWORD=password \
    mariadb:focal
```

Create the `chevereto` database and its user. Note that MySQL could take a while to start mysqld.

```sh
docker exec chv-mariadb mysql -uroot -ppassword -e "CREATE DATABASE chevereto; \
    CREATE USER 'chevereto' IDENTIFIED BY 'user_database_password'; \
    GRANT ALL ON chevereto.* TO 'chevereto' IDENTIFIED BY 'user_database_password';"
```

* Select the [image tag](https://hub.docker.com/r/chevereto/chevereto/tags) you want to use, for example `chevereto/chevereto:latest-httpd-php`
* Run the Chevereto container as:

```sh
docker run -d \
    -p 8000:80 \
    -e "CHEVERETO_SOFTWARE=chevereto" \
    -e "CHEVERETO_LICENSE=put_license_here" \
    -e "CHEVERETO_DB_HOST=chv-mariadb" \
    -e "CHEVERETO_DB_USER=chevereto" \
    -e "CHEVERETO_DB_PASS=user_database_password" \
    -e "CHEVERETO_DB_NAME=chevereto" \
    -e "CHEVERETO_ASSET_STORAGE_NAME=chv-assets" \
    -e "CHEVERETO_ASSET_STORAGE_TYPE=local" \
    -e "CHEVERETO_ASSET_STORAGE_URL=http://localhost:8000/public_assets" \
    -e "CHEVERETO_ASSET_STORAGE_BUCKET=/var/www/html/public_assets/" \
    --name chv-container \
    --network chv-network \
    --network-alias chv-container \
    --mount src="/local/assets",target=/var/www/html/public_assets,type=bind \
    --mount src="/local/images",target=/var/www/html/images,type=bind \
    chevereto/chevereto:latest-httpd-php
```
