---
title: github webhook
date: 2020-02-03 00:00:00
updated: 
top_img:
cover:  https://picgo.genji.xyz/blog/posts/image-20200930154903141.png

description: github webhook
keywords: "github webhook"
tags:  	[webhook,CI/CD]
categories: [前端,CI/CD]
---









# Web hooks

##  什么是web hooks

![image-20200930151443628](https://picgo.genji.xyz/blog/posts/image-20200930151443628.png)

只不过 install bulid 等都是在你的服务器运行.

-----

## 配置

我就用宝塔面板自带的了.

![image-20200930154309950](https://picgo.genji.xyz/blog/posts/image-20200930154309950.png)

填写 `任意名称`  和你要`执行的脚本`  ,提交后会给你 带有秘钥的 链接

```bash
比如 

cd /www/wwwroot/hello/
git clone link
cd /文件夹
npm install 
npm run build  
cd /文件夹
pm2 start app.js  

```

-----

## 测试


使用 postman  post 一下 ,

![image-20200930154106968](https://picgo.genji.xyz/blog/posts/image-20200930154106968.png)



![image-20200930154359603](https://picgo.genji.xyz/blog/posts/lly2021-03-08_11-19-40%401x.png)

可以看到调用次数增加,执行的日志也有记录 .

## github setting

![image-20200930154552727](https://picgo.genji.xyz/blog/posts/image-20200930154552727.png)

你可以直接填写带有秘钥的链接,也可以分开写.


over





