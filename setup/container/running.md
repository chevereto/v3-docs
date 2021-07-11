# Container Running

You can run the container following the indications below depending on how you want to provide the persistent data layer.

## Persistent layers

Chevereto requires the following persistence:

* Asset storage

For asset storage you can use any external storage API and if you want to use Local Storage you will need yo mount the appropriate volume in a path visible to the application.

* Sessions

For sessions you can use Redis by configuring the [Environment Session](../system/environment.md#session-variables) variables.

* Database

For database you can create a volume for persistence, or use a server over the network.

* User uploads storage
  
This persistent layer can be configured directly in the application [Dashboard panel](../../settings/external-storage.md). You can add multiple storages, all that configuration will be stored in the database.

## Environment

::: tip
Check [Environment](../system/environment.md) for all the `-e` options you can pass in the Docker command.
:::

## Using External storage

## Using volumes

## Using Bind mounts

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

## First run

Refer to [First-steps](../../manual/first-steps/README.md) instructions.
