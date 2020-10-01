# Root install (OpenLiteSpeed)

This guide is for **Ubuntu 20.04 (LTS) x64** and it will show you how to set up Chevereto with OpenLiteSpeed web server on Ubuntu.

> Replace `example.com` with your own domain 

> Point the A record of `host.example.com` on your server ip

## Prepare the system

Before begin, make sure that the base system is updated.

```
sudo apt update && sudo apt upgrade
```

## Set up hostname
Changing the hostname on Ubuntu 20.04 is a rather simple process involving just few steps.
It is recommended to use a fully-qualified domain name (FQDN ) such as `host.example.com` for both static and transient names.
First, check your current hostname, to do so use either `hostnamectl` or `hostname` command:
```
hostnamectl
```
Changing the system hostname is a simple process, the syntax is as follows:
```
sudo hostnamectl set-hostname host.example.com
```

**Note:** You shouldn’t use the same hostname on two different machines on the same network.

On most systems, the hostname is mapped to `127.0.0.1` in `/etc/hosts`, open the file and change the old `hostname` to the new one.

```
/etc/hosts
```

```
127.0.0.1   localhost
127.0.0.1   host.example.com

# The following lines are desirable for IPv6 capable hosts
::1     localhost ip6-localhost ip6-loopback
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
```

If you are running Ubuntu on a cloud instance and the `cloud-init` package is installed, you also need to edit the `/etc/cloud/cloud.cfg` file. 
This package is usually installed by default in the images provided by the cloud providers, and it is used to handle the initialization of the cloud instances.
If the file exists on your system open it:

```
sudo nano /etc/cloud/cloud.cfg
```

Search for `preserve_hostname`, and change the value from `false` to `true`:

```
# This will cause the set+update hostname module to not operate (if true)
preserve_hostname: true
```
Save the file and close your editor, and let us verify the change:
```
hostnamectl
```
Your new hostname will be printed on the terminal:
```
   Static hostname: host.example.com
   Pretty hostname: Chevereto's Webserver
         Icon name: computer-vm
           Chassis: vm
        Machine ID: l04e355243f3da4602326b7c41e87a07
           Boot ID: ba315474704409fb9872ef2bd32c52c1
    Virtualization: kvm
  Operating System: Ubuntu 20.04 LTS
            Kernel: Linux 5.4.0-26-generic
      Architecture: x86-64
```
**Note:** The rebooting of the system is an optional step and not required.

```
sudo reboot
```
## Install OpenLiteSpeed
Unfortunately, OpenLiteSpeed is not in the official Ubuntu 20.04 repositories, so you will need to add OpenLiteSpeed official repository to your system:

```
wget -O - http://rpms.litespeedtech.com/debian/enable_lst_debian_repo.sh | sudo bash
```
Once the repository is added, now install the application by refreshing the APT cache and running the following command:

```
sudo apt update
sudo apt install openlitespeed
```

## Install PHP 7.4
Also, install the package that installs PHP 7.4 support for OpenLiteSpeed, you can install the PHP 7.4 by running this command:
```
sudo apt install lsphp74 lsphp74-common lsphp74-mysql lsphp74-dev lsphp74-curl lsphp74-dbg lsphp74-imagick -y
```
Now, enable PHP 7.4 support for OpenLiteSpeed, you will need to create a symbolic link of the installed package:
```
sudo ln -sf /usr/local/lsws/lsphp74/bin/lsphp /usr/local/lsws/fcgi-bin/lsphp5
```

## Install MySQL Database (MariaDB 10.5)
As first we have to import MariaDB gpk key:
```
sudo apt-key adv --fetch-keys 'https://mariadb.org/mariadb_release_signing_key.asc'
```
Now you have to add MariaDB APT repository:
```
sudo add-apt-repository 'deb [arch=amd64] http://mariadb.mirror.globo.tech/repo/10.5/ubuntu focal main'
```
```
sudo apt update
```
```
sudo apt install mariadb-client mariadb-server
```
Once the installation is complete, start the MariaDB service and add it to the boot time:
```
systemctl start mariadb
systemctl enable mariadb
```
As first we have to secure our MySQL installation, and we will use the 'mysql_secure_installation' command-line tool for it:
```
mysql_secure_installation
```
Set up your root password, and type "Y" for the rest of the configuration:
```
Set a root password? [Y/n] Y
Remove anonymous users? [Y/n] Y
Remove test database and access to it? [Y/n] Y
Reload privilege tables now? [Y/n] Y
```
Enter to the MySQL console:
```
sudo mysql -u root
```
Once in the MySQL console, you will see a `mysql>` prompt. Run the following statements:

```
CREATE DATABASE chevereto;
CREATE USER 'chevereto' IDENTIFIED BY 'enter_a_password_here';
GRANT ALL ON chevereto.* TO 'chevereto' IDENTIFIED BY 'enter_a_password_here';
quit
```

**Note:** You must take note of the database name, user and password (where it reads `enter_a_password_here`) as these details will be required later on.

## Setup the website
Now, we can start running OpenLiteSpeed, and manage the webserver in a very fast and comfortable way, the graphical interface works through port 7080 and requires a username and password, therefore we need to set up the user and password authentication for the OpenLiteSpeed dashboard.
Go to the `/usr/local/lsws/admin/misc/` directory and now run the bash script `admpass.sh` as below.

```
cd /usr/local/lsws/admin/misc/
sh admpass.sh
```
