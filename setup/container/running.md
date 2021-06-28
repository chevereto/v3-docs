# Container Running

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
