# Container Registry

This guide covers how to build your own private Chevereto container images and how to publish those to the container registries of your choice.

::: tip One-click available
Use [chevereto/container-builder](https://github.com/chevereto/container-builder) to easily create your own private Chevereto container images, with application updates.
:::

## Requirements

* Chevereto license

The license is required upfront to build the image using licensed access.

* GitHub account

At this time our automated workflows only works with [GitHub](https://github.com) so you will require a GitHub account for the easiest and hassle-free way to build the container image.

* Container registry ([OCI](https://opencontainers.org/))

The container registry is where the container image will be available for your disposal. From there you can spawn all the systems (containers) you may need.

## Step-by-step guide

1. Follow the instructions at [chevereto/container-builder](https://github.com/chevereto/container-builder) to create the image
2. Provide a Docker network and a MySQL container following [this guide](../../get-started/installation.md#docker)
3. Once your image gets created you can invoke it as `owner/image:tag`

::: tip
Check [Environment](../system/environment.md) for all the `-e` options you can pass in command below.
:::

```sh
docker run -d \
    -p 8012:80 \
    -e "CHEVERETO_SOFTWARE=chevereto" \
    -e "CHEVERETO_DB_HOST=chv-mariadb" \
    -e "CHEVERETO_DB_USER=chevereto" \
    -e "CHEVERETO_DB_PASS=user_database_password" \
    -e "CHEVERETO_DB_NAME=chevereto" \
    -e "CHEVERETO_ASSET_STORAGE_NAME=chv-assets" \
    -e "CHEVERETO_ASSET_STORAGE_TYPE=local" \
    -e "CHEVERETO_ASSET_STORAGE_URL=http://localhost:8012/public_assets" \
    -e "CHEVERETO_ASSET_STORAGE_BUCKET=/var/www/html/public_assets/" \
    --name chv-container \
    --network chv-network \
    --network-alias chv-container \
    --mount src="/local/assets",target=/var/www/html/public_assets,type=bind \
    --mount src="/local/images",target=/var/www/html/images,type=bind \
    owner/image:tag
```

## Updating

::: tip
Do not update using the built-in update system available at `/dashboard` as those changes won't persist. You need to re-create the container pulling the latest image.
:::

To update your custom build all the system files and its provisioning will be replaced. This only affects the application container, don't touch the database container.

* Follow the [updating](https://github.com/chevereto/container-builder#updating) instructions for the base template repository
* Create the new image following previous procedure
* Pull the updated image to your host system
* Re-run the Chevereto container tagging the new image
