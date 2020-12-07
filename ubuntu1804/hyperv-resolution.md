# Follow https://techcommunity.microsoft.com/t5/virtualization/sneak-peek-taking-a-spin-with-enhanced-linux-vms/ba-p/382415

# xrdp.service not starting because address already in use: https://github.com/microsoft/linux-vm-tools/issues/94



# Get the scripts from GitHub

sudo apt-get update

sudo apt install git

git clone https://github.com/Microsoft/linux-vm-tools.git ~/linux-vm-tools

cd ~/linux-vm-tools/ubuntu/18.04/



#Make the scripts executable and run them...

sudo chmod +x install.sh

sudo ./install.sh

sudo reboot

cd ~/linux-vm-tools/ubuntu/18.04/

sudo ./install.sh

sudo systemctl enable xrdp.service

sudo gedit /etc/xrdp/xrdp.ini   

# change these two lines: port=vsock://-1:3389 and use_vsock=false

sudo systemctl start xrdp.service

sudo shutdown -h 0

# On Windows Powershell with Admin Privilegies: Set-VM -VMName <your_vm_name>  -EnhancedSessionTransportType HvSocket
