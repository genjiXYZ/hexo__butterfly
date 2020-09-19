---

title: Docker 命令

description: "docker 命令记录贴"
keywords: "docker"
date: 2020年08月27日09:40:54
cover: https://picgo.genji.xyz/blog/posts/docker.png
tags: [docker]
categories: docker
---
# docker 命令

{% note info %}
 用到什么之后再添加
{% endnote %}

## 拉取

```bash
docker pull  name [:tag|@digest]
docker pull debian
docker pull debian:latest
docker pull gitea/gitea:latest
docker pull ubuntu@sha256:45b23dee08af5e43a7fea6c4cf9c25ccf269ee113168c19722f87876677c5cb2
```


## docker run
```bash
docker run -d   --name="something" -p 90:80  -v /var/lib/gitea:/data gitea/gitea:latest --restart=always

-d 后台
--name 命名
-p 端口映射 前内部 后外部
-v 共享卷, 也可以理解挂载到相应目录 前外部 后内部
--restart 重启时候 自动运行
```


## docker 查看
```bash
docker images
docker ps
```

## docker 命名
```bash
docker rename oldName newName      (container) 
dokcer rename 容器ID name:tag (images)
```


##  docker stop/start/restart
```bash
docker stop/start/restart id/ name
```


## 进入docker 容器
```bash
docker exec -it id/name /bin/bash
```

## 删除镜像
```bash
docker rmi imageID/REPOSITORY:TAG
```


## 删除容器
```bash
docker rm CONTAINERID/name

-f :通过 SIGKILL 信号强制删除一个运行中的容器。

-l :移除容器间的网络连接，而非容器本身。

-v :删除与容器关联的卷。
```



## docker 导出
```bash
docker save name >/root/name.tar
docker load <name.tar


docker export 98ca36> ubuntu.tar
docker import
```

1. docker save保存的是镜像（image），docker export保存的是容器（container）；
2. docker load用来载入镜像包，docker import用来载入容器包，但两者都会恢复为镜像；
3. docker load不能对载入的镜像重命名，而docker import可以为镜像指定新名称。

## docker cp

```bash
cp 主机目录到/www/ddd 容器/www
docker cp /www/ddd 96f7f14e99ab:/www

cp 容器目录www  到主机tmp
docker cp  96f7f14e99ab:/www /tmp/

```

 