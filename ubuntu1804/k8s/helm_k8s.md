
# 

## Install HELM
```bash
wget https://get.helm.sh/helm-v3.4.1-linux-amd64.tar.gz
tar vxzf helm-v3.4.1-linux-amd64.tar.gz
sudo mv linux-amd64/helm /usr/local/bin/helm
helm version
# clean up
rm helm-v3.4.1-linux-amd64.tar.gz
rm -rf linux-amd64
```
## Initalize chart repo
```
# update repo
helm repo add "stable" "https://charts.helm.sh/stable" --force-update
```

## Search chart
```
helm search hub kafka
```

## Install a package
```
helm install happy-panda stable/mariadb
```
happy-panda is the release name

## 什么是HELM
HELM是官方提供的类似于 YUM 的包管理器，是部署环境的流程封装。HELM有两个重要的概含: chart 和release:

* chart 是创建一个应用的信息集合， 包括各种 Kubernetes 对象的配置模板、 参数定义、 依赖关系、 文档说明等。chart 是应用部署的自包含逻辑单元。可以将chat想象成apt, yum中的软件安装包
* release是chart的运行实例，代表了一个正在运行的应用。当chart被安装到kubernetes集群，就生成一个release。chart能够多次安装到同一个集群，每次安装都是一个release