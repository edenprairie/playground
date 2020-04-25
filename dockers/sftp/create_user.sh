#!/bin/bash
useradd -m -d /home/$1 $1
echo $2 | passwd $1 --stdin
chgrp root /home/$1
chown root /home/$1
mkdir /home/$1/sftp_root
chown $1 /home/$1/sftp_root
chgrp $1 /home/$1/sftp_root 


