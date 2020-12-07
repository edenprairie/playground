# Install XFCE
```
sudo apt update && sudo apt upgrade -y
sudo apt install kali-desktop-xfce -y
sudo apt install dbus-x11 -y
```

# Install win-kex
```
sudo apt update && sudo apt install kali-win-kex
```

# Start kex
* `kex --sl`  seamless mode, 
* `kex --win` vnc mode, F8 to exit full screen 

# Troubleshooting seamless mode
```
A fatal error has occurred and Vchrv will now exit.
Cannot open log file '/tmp/win-kexsl_xxx.log'
Please open ltmp/win-kexslxxxlog for more
information.

Vendor: The Vchrv Project 0
Release: 1.20.1.4

Contact: marha@users.sourceforge.net
```
if you see above error message, you will need delete the log file(filename may vary) in /tmp folder
```
sudo rm /tmp/win-kexsl_xxx.log
```

# Stop kex
* `kex stop` to kill prev server, if needed

# To use RDP
```
sudo apt install xrdp -y
sudo nano /etc/xrdp/xrdp.ini # change port to 3390
sudo service xrdp start
```
