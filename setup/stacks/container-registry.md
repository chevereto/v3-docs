# Container registry

This guide covers how to build your own private Chevereto container images and how to publish it to the container registry of your choice from where you can re-purpose it for all the Chevereto instances you may need to run.

Container images provided by this guide use the same servicing layer as the basic [container](container.md) guide, but here **the application is provided at Dockerfile layer**.

::: tip Template available
Use [chevereto/container-builder](https://github.com/chevereto/container-builder) to easily create your own private Chevereto container images.
:::

## Requirements

* Chevereto license

The license is required upfront to build the image using licensed access.

* GitHub account

At this time our automated workflows only works with [GitHub](https://github.com) so you will require a GitHub account for the easiest and free way to build the container image. You can actually build the image anywhere, but with GitHub we have configured a dead easy implementation.

* Container registry ([OCI](https://opencontainers.org/))

The container registry is where the container image will be available for your disposal. From there you can spawn all the systems you may need. Container registry credentials will be required to push the build image.

## Step-by-step guide

1. Follow the instructions at [chevereto/container-builder](https://github.com/chevereto/container-builder)
2. Provide a Docker network and a MySQL container following [this guide](../../get-started/installation.md#docker)
3. Once your image gets created you can invoke it as `owner/image:tag`

::: tip
Check [Environment](../system/environment.md) for all the `-e` options you can pass in command below.
:::

```sh
docker run -d \
    -p "8080:80" \
    -e "CHEVERETO_DB_HOST=build-mariadb" \
    -e "CHEVERETO_DB_USER=chevereto" \
    -e "CHEVERETO_DB_PASS=user_database_password" \
    -e "CHEVERETO_DB_NAME=chevereto" \
    -e "CHEVERETO_ASSET_STORAGE_NAME=build-assets" \
    -e "CHEVERETO_ASSET_STORAGE_TYPE=local" \
    --name chv-build \
    --network chv-network \
    --network-alias build \
    --mount src="/local/images",target=/var/www/html/images,type=bind \
    --mount src="/local/importing/no-parse",target=/var/www/html/importing/no-parse,type=bind \
    --mount src="/local/importing/parse-users",target=/var/www/html/importing/parse-users,type=bind \
    --mount src="/local/importing/parse-albums",target=/var/www/html/importing/parse-albums,type=bind \
    owner/image:tag
```

## Updating

::: tip
Do not update using the built-in update system available at `/dashboard` as those changes won't persist. You need to re-build the image and container(s).
:::

* Add the base template as remote `template`

This is required just once.
  
```sh
git remote add template https://github.com/chevereto/container-builder 
```

* Fetch `template` and merge it with `main`

This will pull the updated Dockerfile.

```sh
git fetch --all
git merge template/main
```

* Create the new image as [described earlier](#step-by-step-guide)
* Pull the updated image and re-build the Chevereto container
