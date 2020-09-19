---
title: Docker 报错
top_img: http://pic.genji.xyz/travis/logo/topimg.png
description: "docker 报错记录"
keywords: "docker"
date: 2020年08月27日09:40:54
cover: https://picgo.genji.xyz/blog/posts/docker.png
tags: [docker]
categories: docker
---

## 在容器内无法 连接网络
在旁路由 docker run 一个 镜像时候 出现
java.Net.UnknownHostException 

 首先觉得是host 问题所以添加host,
 {% note [info] [no-icon] %}
 不在直接在容器中 `/etc/hosts` 直接添加 容器容器回重置 ,
 ` --add-hotst  yourdomain.com:IP`  
{% endnote %}
```bash
docker run -d -p 8080:8080 --add-host api.test.com:10.100.33.101

```
然后 docker exec -it contaierID /bin/bash 进入容器内终端 
依然ping不通  然后搜到一个 方法

```bash
# 开启 NAT 转发
 firewall-cmd --zone=public --add-masquerade --permanent
firewall-cmd --reload
systemctl restart docker

```


