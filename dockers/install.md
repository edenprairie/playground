one command to install from Rancher 

```
curl https://releases.rancher.com/install-docker/19.03.sh | sh
```

install Rancher - Persistent Data 
Rancher uses etcd as a datastore. When Rancher is installed with Docker, the embedded etcd is being used. The persistent data is at the following path in the container: /var/lib/rancher. 
```
docker run -d --restart=unless-stopped \
  -p 80:80 -p 443:443 \
  -v /opt/rancher:/var/lib/rancher \
  --privileged \
  rancher/rancher:latest
```
