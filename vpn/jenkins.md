## Jenkins On Azure
http://vpn.junwang.us/jenkins-on-azure/?from=%2F 
This Jenkins instance does not support https, so logging in through a public IP address has been disabled (it would expose your password and other information to eavesdropping). To securely login, you need to connect to the Jenkins instance using SSH port forwarding.

ssh -L 127.0.0.1:8080:localhost:8080 username@nlx.eastus.cloudapp.azure.com

If you don't want to publicly expose this Jenkins instance, you need to remove the nginx reverse-proxy.

sudo apt-get purge nginx nginx-common
