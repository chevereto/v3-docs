# Deploy on Cloud

Get Chevereto easily one-click deployed in seconds.

* [Chevereto on Linode Marketplace](https://www.linode.com/marketplace/apps/chevereto/chevereto/?r=b14b22fdc1bf3f958fdf294c5a8624627d7f2315)
  * [Docs](https://www.linode.com/docs/guides/deploying-chevereto-marketplace-app/?r=b14b22fdc1bf3f958fdf294c5a8624627d7f2315)
  * [Repository](https://github.com/chevereto/linode-marketplace)
* [Chevereto on Vultr Marketplace](https://vultr.grsm.io/rodolfoberrios5076)
  * [Repository](https://github.com/chevereto/vultr-marketplace)

All these provisioning alternatives are **officially supported by us**.

::: tip All-included
Our marketplace provisioning includes the following:

* Enables the UFW firewall to allow only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.
* Sets up the Chevereto database and its user.
* Sets the MySQL root password.
* Sets up the debian-sys-maint user in MySQL so the system’s init scripts for MySQL will work without requiring the MySQL root user password.
* Sets the cron required for background tasks.
* Includes Certbot pre-installed.
:::
