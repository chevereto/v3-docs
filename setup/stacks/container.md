# Container

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

<code-group>
<code-block title="Paid">
```sh
docker run -d \
    -p 8080:80 \
    -e "CHEVERETO_SOFTWARE=chevereto" \
    -e "CHEVERETO_LICENSE=put_license_here" \
    -e "CHEVERETO_TAG=3.20.3" \
    -e "CHEVERETO_ASSET_STORAGE_NAME=chv-assets" \
    -e "CHEVERETO_ASSET_STORAGE_TYPE=local" \
    --name chv-container \
    --network chv-network \
    --network-alias chv-container \
    --mount src="/local/images",target=/var/www/html/images,type=bind \
    --mount src="/local/importing/no-parse",target=/var/www/html/importing/no-parse,type=bind \
    --mount src="/local/importing/parse-users",target=/var/www/html/importing/parse-users,type=bind \
    --mount src="/local/importing/parse-albums",target=/var/www/html/importing/parse-albums,type=bind \
    chevereto/chevereto:latest-httpd-php
```
</code-block>

<code-block title="Free">
```sh
docker run -d \
    -p 8080:80 \
    -e "CHEVERETO_SOFTWARE=chevereto-free" \
    -e "CHEVERETO_TAG=1.3.0" \
    --name chv-container \
    --network chv-network \
    --network-alias chv-container \
    --mount src="/local/images",target=/var/www/html/images,type=bind \
    --mount src="/local/importing/no-parse",target=/var/www/html/importing/no-parse,type=bind \
    --mount src="/local/importing/parse-users",target=/var/www/html/importing/parse-users,type=bind \
    --mount src="/local/importing/parse-albums",target=/var/www/html/importing/parse-albums,type=bind \
    chevereto/chevereto:latest-httpd-php
```
</code-block>
</code-group>
