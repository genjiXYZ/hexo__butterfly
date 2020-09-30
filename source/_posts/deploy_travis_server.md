---
title: Travis CI/CD(二) 部署到服务器
date: 2020-02-04 00:00:00
updated:
tags: [Travis,ssh]
categories: CI/CD
keywords: [Travis,ssh]
description:"利用travis部署hexo到阿里云,"
top_img: http://pic.genji.xyz/travis/logo/topimg.png
cover: http://pic.genji.xyz/travis/logo/TravisC.png
comments: true
---

# Travis 部署到服务器 


## ssh 

### 确保你电脑有 ssh私钥

没有的话

```bash
 ssh-keygen -t rsa -C "something you like" 
```


### 将公钥copy到服务器

```bash
ssh-copy-id root@服务器IP
## sh-copy-id root@110.110.112.11

## 会在复制你电脑 public key 到 服务器 ~/.ssh/authorized_keys 

## 正常是.ssh 文件夹 700权限
## authorized_keys文件600权限
## chmod 600 authorized_keys 
## chmod 700 -R .ssh
```

##  travis 环境变量

用到了 travis CLI 工具加密下你本机的 私钥

```bash
gem install travis

## 我推荐使用homebrew 
## brew install travis


travis login --org
travis login --pro
travis login --com

具体登录哪个,看你使用的哪个
```



```bash
❯ travis login --org

输入github  账号 密码
```



在travis 面板中`监听`你的项目   (github 已经存在的 repo)

在本地`项目目录`中

```bash
## travis encrypt-file ssh_key --add

travis encrypt-file ~/.ssh/id_rsa  --add




1.自动在travis.yml 生成一段 配置脚本 

---
before_install:
- openssl aes-256-cbc -K $encrypted_024e66b057a6_key -iv $encrypted_024e66b057a6_iv
  -in id_rsa.enc -out ~\/.ssh/id_rsa -d

##别忘了 把 \ 删除       ~/.ssh/id_rsa -d

2.自动在travis 环境变量中添加

3.自动 生成 id_rsa.enc 文加密文件

```



![image-20200929025050217](/Users/liulingyue/Desktop/hexo__butterfly/source/_posts/image-20200929025050217.png)



```bash
通用版本

# 在当前目录生成密钥
ssh-keygen -t rsa -b 4096 -C 'build@travis-ci.org' -f ./deploy_rsa
# 使用Travis加密
travis encrypt-file deploy_rsa --add
# 添加信任关系
ssh-copy-id -i deploy_rsa.pub <ssh-user>@<deploy-host>
# 删除敏感文件
rm -f deploy_rsa deploy_rsa.pub
# 将修改添加到git中
git add deploy_rsa.enc .travis.yml





## 
-t type -b bit -C comment -f file

-i   identity_file

```







## travis 配置文件



```yaml
sudo: false 
language: node_js
node_js:
  - 12
cache: npm

## 这里注意 文件不同 配置不同(yarn-lock文件有影响 需要添加 -yarn )
install:
  - yarn
  
## 触发分支
branches:
  only:
    - master

## 添加known_hosts    ~/.ssh/known_hosts
## ip 是你服务器的IP地址   在环境变量中手动添加
addons:
  ssh_known_hosts: ${IP}
  
before_install:
  - openssl aes-256-cbc -K $encrypted_024e66b057a6_key -iv $encrypted_024e66b057a6_iv
    -in id_rsa.enc -out ~/.ssh/id_rsa -d
  - chmod 600 ~/.ssh/id_rsa

script:
  - hexo generate
  - ls
  - tar -zcvf hexo.tar.bz2 ./public # 压缩
  - scp -o stricthostkeychecking=no -r ./hexo.tar.bz2 root@${IP}:/www/wwwroot/blog.genji.xyz # scp复制
  - ssh root@${IP} 'cd /www/wwwroot/blog.genji.xyz && tar -zxvf hexo.tar.bz2 ' # 解压
  # - cd public
  # - echo 'blog.genji.xyz' > CNAME

after_success:
	- do something  

## 部署到服务器不需要了 部署到github page可以这么设置  token 就是
deploy:
  provider: pages
  skip-cleanup: true
  github-token: "$GH_TOKEN"
  keep-history: true
  on:
    branch: master
  local-dir: public
##

```





## 报错



1. 

   ```bash
   $ ssh root@${IP} 'cd /www/wwwroot/blog.genji.xyz'
   219The authenticity of host '**.**.**.147 ' can't be established.
   220ECDSA key fingerprint is SHA256:0nYNmoIDAHBbvDCtGI//PiDCRbD3twO9wQftM8abBEg.
   221Are you sure you want to continue connecting (yes/no)? 
   ```

   ```bash
   -o StrictHostKeyChecking=no
   
   scp 或者 ssh 要添加 否则第一次连接时依然会要求你确认
   ```

   

2. ```bash
   
    ssh -o StrictHostKeyChecking=no root@${IP} 'cd /www/wwwroot/blog.genji.xyz'
   Warning: Permanently added 'ip' (ECDSA) to the list of known hosts.
   root@ip's password: 
   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   @         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   
   Permissions 0664 for '/home/travis/.ssh/id_rsa' are too open.
   It is required that your private key files are NOT accessible by others.
   This private key will be ignored.
   Load key "/home/travis/.ssh/id_rsa": bad permissions
   
   
   权限问题 Permissions 0664
   
   
   
   before_install:
     - openssl aes-256-cbc -K $encrypted_024e66b057a6_key -iv $encrypted_024e66b057a6_iv
     -in id_rsa.enc -out ~/.ssh/id_rsa -d
     - chmod 600 ~/.ssh/id_rsa
     
     改成600
   
   ```



