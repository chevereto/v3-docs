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

Now, we can start running OpenLiteSpeed, and manage the webserver in a very fast and comfortable way, 
the graphical interface works through port 7080 and requires a username and password, 
therefore we need to set up the user and password authentication for the OpenLiteSpeed dashboard.
Go to the `/usr/local/lsws/admin/misc/` directory and now run the bash script `admpass.sh` as below.

```
cd /usr/local/lsws/admin/misc/
sh admpass.sh
```

Type your username and password, and you've completed the configuration of OpenLiteSpeed authentication.
After that, you can visit the OpenLiteSpeed web interface. Open your favorite web browser and go to `http://server-ip:7080`
On the OpenLiteSpeed dashboard, click the `Server Configuration` menu on the left and click the `External App` tab.
To add the new PHP 7.4 configuration, click the add `+` button on the right.
For the type, choose the `LiteSpeed SAPI App` and click the `Next` button.
Now type details configuration as below:

```
Name: lsphp74
Address: uds://tmp/lshttpd/lsphp.sock
Notes: lsphp74 for OpenLiteSpeed
Max Connections: 35
Initial Request Timeout (secs): 60
Retry Timeout (secs): 0
Command: $SERVER_ROOT/lsphp74/bin/lsphp
```

And click the 'Save' button, and the PHP 7.4 configuration has been added.
Next, we will change the default PHP for OpenLiteSpeed to the PHP 7.4 version, in the `Server Configuration` menu, click the `Script Handler` tab.
Now click the 'Edit' button on the action section, on the `Handler Name`, choose the `lsphp74` that we just added and click the 'Save' button.

And as a result, you've added and enabled the PHP 7.4 configuration for OpenLiteSpeed, now we have to setup OpenLiteSpeed on Port 80, by default, the OpenLiteSpeed is running on default port '8088'. To run the OpenLiteSpeed on default http port '80', we can use the administration dashboard to change the configuration, navigate to the OpenliteSpeed dashboard, click the `Listener` menu on the left.

On the `Default` listeners, click the `view` button, then on the `Address Settings` section, click the `edit` button on the right side, now type details configuration as below:

```
Listener Name: Default
IP Address: ANY
Port: 80
```
After that save it and click on the restart button in the dashboard, now we got OpenLiteSpeed runing on Port 80, open your web browser and type the server IP address on the address bar, and you should get the default index page of OpenLiteSpeed.

It's time to setup Virtual Host, as first we have to create directorys for our Website:

```
sudo mkdir /usr/local/lsws/example.com/{html,logs} -p
```

The html directory contains the public files and the logs directory contains the server logs.

Next, navigate to the OpenLiteSpeed dashboard and access the `Virtual Hosts` section from the left and click the Add button, now enter the values as shown:

```
Virtual Host Name: example.com
Virtual Host Root: $SERVER_ROOT/example.com/
Config File: $SERVER_ROOT/conf/vhosts/$VH_NAME/vhconf.conf
Follow Symbolic Link: Yes
Enable Scripts/ExtApps: Yes
Restrained: Yes
External App Set UID Mode: Server UID
```
Click the Save button and when you're done, you will get following error:

```
⚠ file /usr/local/lsws/conf/vhosts/example.com/vhconf.conf does not exist. CLICK TO CREATE
```

Because the configuration file does not exist for now, click on the link to create the configuration file under the `CLICK TO CREATE`.
Click the Save button again to complete the virtual host creation, once the virtual host is created, go to `Virtual Hosts` -> `Select Virtual Host (example.com)` -> `General` and change the configuration as indicated.

```
Document Root: $VH_ROOT/html/
Domain Name: example.com
Enable Compression: Yes
```

Click the Save button when you're done, next we need to set up index files, click the Edit button under `Index files` under the `General` section, set the following options:

```
Use Server Index Files: No
Index files: index.php, index.html, index.htm
Auto Index: No
```
Click Save when you're done, next we have to choose Log files, go to the `Log` section and click Edit against `Virtual Host Log` and enter the following values:

```
Use Server’s Log: Yes
File Name: $VH_ROOT/logs/error.log
Log Level: ERROR
Rolling Size (bytes): 10M
```
**Note:** You can select the DEBUG log level if you were on a production/development server.

Click Save, then click the plus sign in the `Access Log` section to add a new entry, enter the following values:

```
Log Control: Own Log File
File Name: $VH_ROOT/logs/access.log
Piped Logger: Not Set
Log Format: Not Set
Log Headers: Not Set
Rolling Size (bytes): 10M
Keep Days: 30
Bytes log: Not Set
Compress Archive: Yes
```
Click Save when you're done, next, we need to configure `Access Control` under the `Security` section, set the following values:

```
Allowed List: *
Denied List: Not set
```

Click Save when you're done, next we need to define the definition of the `Script Handler`, set the following values:

```
Suffixes: php
Handler Type: LiteSpeed SAPI
Handler Name: [Server Level]: lsphp74
```

Next we need to set the `Rewrite Control` in the `Rewrite section`, set the following values:
Enable Rewrite: Yes
Autoload from .htaccess
Log level: Not Set
Now we need to edit `Rewrite Rules` in the `Rewrrite section`, place there Chevereto's .htaccess and save it.

Next we have to set `Listeners`, for this go to the `Listeners section` and click the View on Default Listeners button, then click the Add button under `Virtual Host Mappings` to add a new mapping and set the following values:

```
Virtual Host: example.com
Domains: example.com
```
Click Save when you're done, now click the Graceful restart button to apply all of the above changes and to restart the server.

## Setup SSL
Setting up SSL in OpenLiteSpeed requires setting up two certificates,  a self-signed certificate for the entire server and a Let's Encrypt location-specific server certificate, let's create the self-signed certificate first:

```
openssl req -x509 -days 365 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes
```
In order to be able to use Let's Encrypt, we have to install the Certbot tool:

```
sudo apt install certbot
```
Obtain the SSL certificate for Website:

```
sudo certbot certonly --webroot -w /usr/local/lsws/example.com/html/ -d example.com
```
**Note:** Follow the interactive prompt.

Now navigate to the OpenliteSpeed dashboard and go to `Listeners` >> `Add New Listener` and add the following values:
```
Listener Name: SSL
IP Address: ANY
Port: 443
Secure: Yes
```
Click Save when you're done, then go to the `Virtual Host Mappings` section under the `SSL listener` by clicking `SSL`, click the Add button and enter the following values:
```
Virtual Host: example.com
Domains: example.com
```
Click Save when you're done, go to `Listeners` >> `SSL Listener` >> `SSL Tab` >> `SSL Private Key & Certificate` (Edit button) and enter the following values for the self-signed certificate we created earlier:

```
Private Key File: /srv/self-signed/key.pem
Certificate File: /srv/self-signed/cert.pem
Chained Certificate: Yes
```
Move the self-signed certificate to another directory from root:

```
sudo mkdir /srv/self-signed
mv key.pem cert.pem /srv/self-signed
```

Next, go to `Virtual Hosts` >> example.com >> `SSL tab` >> `Private SSL key & certificate` (Edit button) and fill in the following values with the Let's Encrypt certificate:

```
Private Key File: /etc/letsencrypt/live/example.com/privkey.pem
Certificate File: /etc/letsencrypt/live/example.com/fullchain.pem
Chained Certificate: Yes
```
Click Save when you're done, restart the server by clicking the Graceful restart button, and now you should have successfully installed LetsEncrypt Certificate on your Website.

Before we can go through the web-based setup process for Chevereto, we need to adjust some entries in our Chevereto directory, start by giving ownership of all files in the directory to the user nobody and the group nogroup, which the OpenLiteSpeed web server runs by default. The following chown command grants OpenLiteSpeed the ability to read and write files in the Chevereto directory so that it can serve the website and do updates automatically:
```
chown -R nobody:nogroup /usr/local/lsws/example.com/
```
To change php.ini file and to increase the upload limit, you have to change following values in `/usr/local/lsws/lsphp74/etc/php/7.4/litespeed/php.ini`:
```
upload_max_filesize = 20M
post_max_size = 20M
max_execution_time = 30
memory_limit = 512M
in the server path
```
