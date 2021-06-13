# Container (bootstrapped)

This guide is for bootstrapped container based provisioning for Chevereto using system images published at [Docker Hub](https://hub.docker.com/r/chevereto/chevereto).

This provisioning uses containers to provide only the servicing layer, the **application is provided on first container run** and re-used from there. As Chevereto ahead releases are distributed under a proprietary license, we can't mass distribute the application code to public so we provide the system servicing required for it.

::: tip Private builds
Follow the [Container registry](container-registry.md) guide to learn how to level-up your container provisioning by easily creating your own private Chevereto application containers.
:::

## Requirements

* [Docker](https://docker.com)

## Step-by-step guide

1. Provide a Docker network and a MySQL container following [this guide](../../get-started/installation.md#docker)
2. Select the [image tag](https://hub.docker.com/r/chevereto/chevereto/tags) you want to use, for example `chevereto/chevereto:latest-httpd-php`
3. Run the Chevereto container as:

::: tip
Check [Environment](../system/environment.md) for all the `-e` options you can pass in command below.
:::

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
