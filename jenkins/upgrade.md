## Install and upgrade Jenkins on Ubuntu 18.04 LTS
 

In this short tutorial we will apply minor update to existing Jenkins installation on Ubuntu machine.
Common location of jenkins war file on ubuntu server is:

```
/usr/share/jenkins
Update the installation
Stop the jenkins server
$ sudo service jenkins stop
Move existing jenkins war file
$ sudo mv jenkins.war jenkins.war.old
Download latest jenkins war file
$ cd /usr/share/jenkins
$ sudo wget https://updates.jenkins-ci.org/latest/jenkins.war
Start the Jenkins server
$ sudo service jenkins start
```
Troubleshooting steps
If we are running jenkins using root permissions, (which we should not be doing) we need to change the jenkins.war permissions.
```
$ sudo chown root:root jenkins.war
We can optionally restart the jenkins server using below command:
```
```
$ sudo /etc/init.d/jenkins restart
If you are not able to find jenkins war file in standard path, you can goto Manage Jenkins → System Information, it will display the path to the .war file.
```
On ubuntu, you can also try the below two commands to update everything:
```
$ sudo apt-get update
$ sudo apt-get upgrade
As per jenkins official wiki: https://wiki.jenkins.io/display/JENKINS/Installing+Jenkins+on+Ubuntu

$ sudo apt-get update
$ sudo apt-get install jenkins
```
References
https://jenkins.io/doc/book/installing/#debian-ubuntu
