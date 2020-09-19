---
title: Travis CI/CD 构建(github pages 篇)
top_img: http://pic.genji.xyz/travis/logo/topimg.png
description: 利用travis 在github pages 生成静态网站
keywords: travis
date: 2020-01-03 00:00:00
cover: http://pic.genji.xyz/travis/logo/TravisC.png
tags: [Travis , github-pages, CNAME]
categories: CI/CD
---


# Travis CI/CD 构建(github pages 篇)



### 		在 github  action  没有正式发布前 就一直用  travis /circle   , 现在正准备向官方爸爸靠拢 , 毕竟github action  拥有  2核 7GB  , 和 比较 的 活跃生态( 别人写好的 actions)

-----



## 什么是 Travis?

说人话-- 就是帮你 build  test  deploy



## 价格 配置 限制 

travis 有两个网站 travis.com travis.org    

travis.org  --- 开源仓库 免费使用

travis.com --- 主要面向 私有仓库  



![image-20200627163900305](http://pic.genji.xyz/test/image-20200627163900305.png)

## 如何使用

1.  **travis 初步设置**

![image-20200627171223899](http://pic.genji.xyz/test/image-20200627171223899.png)

<center>1 设置 	2同步 github 仓库 	3选择你要使用travis 的仓库</center>

2.   **GitHub 这是私人令牌( 获得部署到 gh-pages 权限)**

![image-20200627172033567](http://pic.genji.xyz/test/image-20200627172033567.png)

<center>1	设置 2 	私人令牌 3 创建新的令牌</center>



![image-20200627172351276](http://pic.genji.xyz/test/image-20200627172351276.png)

<center>设置令牌的权限 有控制仓库权限即可,如要设置其他权限自行设置. <a traget="_blank" href="https://docs.travis-ci.com/user/deployment/pages/#further-configuration">官方文档</a>有进一步配置 </center>

![image-20200627175338324](http://pic.genji.xyz/test/image-20200627175338324.png)

<center>复制你的令牌,然后添加到Travis 的环境变量中</center>

![image-20200627175709667](http://pic.genji.xyz/test/image-20200627175709667.png)

<center>1在设置中	2创建变量名	3粘贴令牌</center>		

3.  **在项目根目录 创建  `.travis.yml`  文件**

<img src="http://pic.genji.xyz/test/image-20200627174914491.png" alt="image-20200627174914491" style="zoom: 50%;" />

   ```yml
   language: node_js
   node_js:
     - 12
   
   branches:
     only:
       - master
   
   script:
     - yarn install  
     - yarn build
   deploy:
     provider: pages
     skip-cleanup: true
     github-token: "$GH_TOKEN"
     keep-history: true
     on:
       branch: master
     local-dir: dist
   ```

****

   **然后重新 push  到仓库 即可 触发travis** 

![image-20200627180239377](http://pic.genji.xyz/test/image-20200627180239377.png)



![image-20200627180524840](http://pic.genji.xyz/test/image-20200627180524840.png)



**虽然成功了 ,但是应该会有个问题,就是 build 路径问题  ,设置下 `vue.config.js` 即可.**

**路径问题 太常见了, 去控制台看看 js css 文件, 改下路径 测试下即可.**

```js
// vue.config.js
module.exports={
	publicPath:"./",
}

```

![image-20200627181721917](http://pic.genji.xyz/test/image-20200627181721917.png)



![image-20200627181814545](http://pic.genji.xyz/test/image-20200627181814545.png)

**这里就是我们的 静态网站了!  以后只要 改代码 push  ,即可自动bulid并且push到gh-pages分支.**



## **CNAME**

**配置CNAME  这样你就可以用自己的域名访问了.**

![image-20200627182429486](http://pic.genji.xyz/test/image-20200627182429486.png)

**在这里填好自己的域名,然后去dns 服务商去添加解析记录**

![image-20200627182734908](http://pic.genji.xyz/test/image-20200627182734908.png)

**<user>  你github  叫什么 就填什么 (全部小写)**

**dns  刷新需要点时间  等个5分钟 基本上就好了** 

**你可以ping  你的域名   看看 ip  有没有指向 github.io 的ip**

```ssh
❯ ping github.io
PING github.io (185.199.110.153): 56 data bytes
64 bytes from 185.199.110.153: icmp_seq=0 ttl=53 time=71.172 ms
64 bytes from 185.199.110.153: icmp_seq=1 ttl=53 time=71.182 ms
64 bytes from 185.199.110.153: icmp_seq=2 ttl=53 time=70.903 ms

```

**更改cname 后 用你自己的域名打开,可能会一开始布局乱的现象,**

**说人话 : 用gihub 的域名  需要改`vue.config.js` 用自己的域名 不需要改**







#### Pages 篇完 

#### 有那里写的不对 或者有什么问题了,请在下面留言(留下你的邮箱,我会及时回复)

-----



