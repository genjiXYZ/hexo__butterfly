---
title: 在 树莓派/openwrt 中搭建gitea
date: 2020-03-01 00:00:00
updated: 
top_img:
cover:  https://picgo.genji.xyz/blog/posts/gitea.png

description: 朋友的 树莓派 , 落灰了.拿来试试.
keywords: "树莓派,docker,端口映射"
tags:  	[gitea,docker,端口映射]
categories: diy
---

# <i class="fas fa-dog"></i> gitea



{% note primay %}
gitea 就是 gogs 的小弟兄,一个自助的git服务

[中文文档](https://docs.gitea.io/zh-cn/)   [英文文档](https://gitea.io/en-us/)

{% endnote %}

## docker 运行

有很多方式,`docker`最省事,其他的看 [中文文档](https://docs.gitea.io/zh-cn/) .

```docker
## 拉取镜像
docker pull gitea/gitea:latest

## 在宿主机创建挂在到镜像的文件夹. 文件夹目录随意, 但是要和下一条命令对应  
sudo mkdir -p /var/lib/gitea

## docker run 
docker run -d --name=gitea -p 10022:22 -p 10080:3000 -v /var/lib/gitea:/data gitea/gitea:latest

## -d 后台运行
## --name= 给容器命名
## -p 外部端口:内部端口
## -v 外部要挂载的文件目录:容器内目录
```


## 可能出现的问题

在挂载文件目录时候,会报错.

可能是没有权限的问题

在`docker`>`preferences`>`resources`>`file sharing`中添加你创建的文件目录

## 访问 gitea

 我是软路由的docker,运行的所以要访问软路由的ip.

`192.168.3.123:10080`

## 安装gitea

![image-20201005025016837](https://picgo.genji.xyz/blog/posts/image-20201005025016837.png)



先按照默认的来,熟练的话或者想用别的数据库,就直接改 

设置好`管理员账号`后 ,立刻安装.

重新打开网站 

`192.168.3.123:10080`



## 配置 app.ini文件



```bash
你的路径/gitea/conf/app.ini
```

[官方配置 example](https://github.com/go-gitea/gitea/blob/master/custom/conf/app.example.ini)

[中文配置文档](https://docs.gitea.io/zh-cn/config-cheat-sheet/#server)



我的配置

```app.ini
## app.ini

主要配置这些 其他的默认即可


[server]
APP_DATA_PATH    = /data/gitea
DOMAIN           = git.genji.xyz
SSH_DOMAIN       = genji.xyz(这里要注意,不要写二级域名)

#内部监听端口
HTTP_PORT        = 3000

# 这里是你的访问网站的url(可以是你反向代理后的域名,可以使ip,看你具体的配置)
ROOT_URL         = https://git.genji.xyz

## 是否允许ssh 
DISABLE_SSH      = true

# 这里千万别填 22 否则和你`软路由` 或者`树莓派`的ssh 冲突
SSH_PORT         = 2222
SSH_LISTEN_PORT  = 2222


# 这里是设置主题的 后面会说
# gitea,arc-green 是自带的
[ui]           
DEFAULT_THEME = genji                                                                               
THEMES =  gitea,arc-green,space,genji                                                               
```



这里几个 ssh  和 url  要仔细点,

## 提交公钥

`用户设置`>ssh/gpg key 添加  







## 美化



[click here网站里的最下面有主题](https://gitea.com/gitea/awesome-gitea)

将主题 `theme-name.css` css(有的也有js) 文件放入  `\path\to\custom\public\css `.

然后修改`\path\to\custom\conf\app.ini`

在` DEFAULT_THEME =  name`.

重新docker run ,登录你的个人设置中 更改.



你也可以看看文档 ,改改tmpl,css



## 端口映射

我的是192.168.123:10080

我得把这个端口映射到公网ip上,路由器的功能.别用光猫的端口映射(有点小bug )

然后你可以ddns ,就能一直域名访问了 .

你也可以直接放到 服务器 docker 里 , 反向代理到80.



 写得很粗!有问题请留言.

![image-20201005032748440](https://picgo.genji.xyz/blog/posts/image-20201005032748440.png)

![image-20201005032836078](https://picgo.genji.xyz/blog/posts/image-20201005032836078.png)