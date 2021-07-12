# Container Running

## Guides

* [Portainer](https://github.com/chevereto/container-builder/blob/main/guides/portainer/README.md)

## Persistent layers

### Asset storage

::: tip Local asset storage
To use Local Storage is required to mount the appropriate volume in a path visible to the application.
:::

For asset storage you can use any supported [external storage](../../features/integrations/external-storage.md) API. This need to be configured passing [Assets environment variables](../system/environment.md#assets-variables).

### Sessions

For persistent sessions you can use Redis by configuring the [Session environment variables](../system/environment.md#session-variables) variables.

### Database

For database you can create a volume for persistence, or use a server over the network. If you manually provide the database you will need to create its user binding:

```sh
docker exec chv-mariadb mysql -uroot -ppassword -e "CREATE DATABASE chevereto; \
    CREATE USER 'chevereto' IDENTIFIED BY 'user_database_password'; \
    GRANT ALL ON chevereto.* TO 'chevereto' IDENTIFIED BY 'user_database_password';"
```

### User uploads storage
  
This persistent layer can be configured directly in the application [Dashboard panel](../../settings/external-storage.md). You can add multiple storages, all that configuration will be stored in the database.

## Compose

::: tip
Check [Environment](../system/environment.md) for all the `-e` options you can pass in the Docker command.
:::

In the following example volumes are used for all data persistence. The image used is [httpd-php](https://github.com/chevereto/container-builder/blob/main/httpd-php.Dockerfile) which includes Apache HTTP Web server.

```yaml
version: "3"

services:
  chv-database:
    image: mariadb:focal
    networks:
      - chv-network
    healthcheck:
      test: ["CMD-SHELL", "mysqladmin ping --silent"]
    volumes:
      - chv-data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: chevereto
      MYSQL_USER: chevereto
      MYSQL_PASSWORD: user_database_password

  chv-build:
    image: owner/image:httpd-php
    networks:
      - chv-network
    volumes:
      - chv-storage:/var/www/html/images/
      - chv-assets:/var/www/html/_assets/
    ports:
      - 8080:80
    restart: always
    environment:
      CHEVERETO_DB_HOST: chv-database
      CHEVERETO_DB_USER: chevereto
      CHEVERETO_DB_PASS: user_database_password
      CHEVERETO_DB_PORT: 3306
      CHEVERETO_DB_NAME: chevereto
      CHEVERETO_HTTPS: 0
      CHEVERETO_ASSET_STORAGE_TYPE: local
      CHEVERETO_ASSET_STORAGE_URL: http://localhost:8080/_assets/
      CHEVERETO_ASSET_STORAGE_BUCKET: /var/www/html/_assets/

volumes:
  chv-data:
  chv-assets:
  chv-storage:

networks:
  chv-network:
```

**Note** that `CHEVERETO_ASSET_STORAGE` is mapped to the mounted volume `chv-assets` and to the same URL. This can be mapped to any supported [external storage](../../features/integrations/external-storage.md) API:

```yaml
  chv-build:
    image: owner/image:httpd-php
    networks:
      - chv-network
    ports:
      - 8080:80
    restart: always
    environment:
      CHEVERETO_DB_HOST: chv-database
      CHEVERETO_DB_USER: chevereto
      CHEVERETO_DB_PASS: user_database_password
      CHEVERETO_DB_PORT: 3306
      CHEVERETO_DB_NAME: chevereto
      CHEVERETO_HTTPS: 0
      CHEVERETO_ASSET_STORAGE_NAME: assets
      CHEVERETO_ASSET_STORAGE_TYPE: s3
      CHEVERETO_ASSET_STORAGE_KEY:  key
      CHEVERETO_ASSET_STORAGE_SECRET: secret
      CHEVERETO_ASSET_STORAGE_BUCKET: bucket-name
      CHEVERETO_ASSET_STORAGE_URL: https://s3-us-west-1.amazonaws.com/bucket-name/
      CHEVERETO_ASSET_STORAGE_REGION: s3-us-west-1
```

## First run

Refer to [First-steps](../../manual/first-steps/README.md) instructions.
