---
title: github webhook
date: 2020-09-02 00:00:00
updated: 
cover:  https://picgo.genji.xyz/blog/posts/image-20200930154903141.png
description: 像素电子时钟 制作

tags:  	[webhook]
categories: workflow
keywords: "github webhook,webhook"
---







# Web hooks

##  什么是web hooks

![image-20200930151443628](/Users/liulingyue/Desktop/hexo__butterfly/source/_posts/image-20200930151443628.png)

-----

## 插件

原理就是 接收到post / get  请求去执行脚本, 



当然 可以自己写 

1. 开放安全组

2. nginx / apache 先开个 端口

3. 再写个服务端

```node
const http = require('http');
const url = require('url');
const webhook = require('./webhook');

此处省略 1千字

当然中间最好添加 `秘钥验证`之类的验证方式

比如post  http://12.12.12.12/access_key=dkfjdfjeijfeifjeijfiejfeifjiejfeifieurgjrig

 @param access_key   hook 秘钥

判断秘钥正确否 再做执行.


也可添加些推送 执行成功 给你发送邮件之类的
```

4. 再用 `PM2` 运行



但是 , 宝塔自带的 webhook 不香么? 我是菜逼,我用宝塔 我省事.

-----

## 配置

![image-20200930154309950](/Users/liulingyue/Desktop/hexo__butterfly/source/_posts/image-20200930154309950.png)

填写 `任意名称`  和你要`执行的脚本`  ,提交后会给你 带有秘钥的 链接

```bash
比如 

cd /www/wwwroot/hello/
git clone link
cd /文件夹

npm run build  #这里要设置好 你网站路径 

或者 你的服务端 

pm2 start app.js  #  可以继续 反向代理啥的 
```

-----

## 测试



使用 postman  post 一下 ,

![image-20200930154106968](/Users/liulingyue/Desktop/hexo__butterfly/source/_posts/image-20200930154106968.png)



![image-20200930154359603](/Users/liulingyue/Desktop/hexo__butterfly/source/_posts/image-20200930154359603.png)

可以看到调用次数增加,执行的日志也有记录 .

## github setting

![image-20200930154552727](/Users/liulingyue/Desktop/hexo__butterfly/source/_posts/image-20200930154552727.png)

你可以直接填写带有秘钥的链接,也可以分开写.



over





