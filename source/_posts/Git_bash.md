---
title: Git 命令
top_img: https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=924384885,4203827437&fm=26&gp=0.jpg
description: "Git 命令"
keywords: "git"
date: 2018-01-05 00:00:00
cover: https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=924384885,4203827437&fm=26&gp=0.jpg
tags: [git]
categories: git
---
### 公钥

```bash
ssh-keygen -t rsa -C "xxxxx@xxxxx.com"  
```
-t   type   -C  commit

可以设置passphrase ( 安全保障 但自动部署有点麻烦 )

<br>

### 手残二连

```bash
git config --global user.name ""
git config --global user.email ""
```

```bash
git config --list
```
<br>

### 脑残五连

```bash
git init
git add .
git commit -m "first commit"
git remote add origin      https || ssh 
git push -u origin master
```

<br>



### 代理

```bash
git config --global http.https://github.com.proxy https://127.0.0.1:1087
git config --global https.https://github.com.proxy https://127.0.0.1:1087


git config --global http.https://github.com.proxy socks5://127.0.0.1:1086
git config --global https.https://github.com.proxy socks5://127.0.0.1:1086



```


<br>


### 取消代理

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

<br>

### 删除git文件

```bash
git rm --cached filename
```
<br>

### branch

```bash
git branch             //list 分支
git branch  name       //创建
git checkout name      //切换
git checkout -b        //创建并切换


git checkout -b name origin/name  //取远程分支合并到本地
```




