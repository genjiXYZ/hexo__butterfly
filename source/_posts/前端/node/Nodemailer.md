---
title: nodemailer
date: 2020-02-04 00:00:00
updated: 
cover: https://picgo.genji.xyz/blog/posts/normaile.png
description: 发送邮箱验证码 

keywords: email
tags: [node]
categories: [前端,node]
---

# nodemailer
 1. npm install nodemailer
 2. 开启邮箱POP3/SMTP服务 各个邮箱开启方式不同
 3. 
```js
//mail.js
const nodemailer = require('nodemailer');

//创建发送邮件的请求对象
let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',    //发送端邮箱类型（QQ邮箱）
    port: 465,      //端口号
    secure: true, 
    auth: {
        user: 'liulingyue@vip.qq.com', // 发送方的邮箱地址（自己的）
        pass: '*****' // mtp 验证码
    }
});

function send(mail, code) {
    let mailObj = {
        from: '"611的冰箱" <liulingyue@vip.qq.com>',   // 邮件名称和发件人邮箱地址
        to: mail,   //收件人邮箱地址（这里的mail是封装后方法的参数，代表收件人的邮箱地址）
        subject: '验证码',   //邮件标题
        text: '您的验证码是：'+ code, // 邮件内容，这里的code是这个方法的参数，代表要发送的验证码信息，这里的内容可以自定义
    }
    // 发送邮件(封装成一个promise对象)，方便后面调用该方法
    //这部分代码直接复制粘贴即可，但是注意发送邮件的请求对象名称要和上面声明的名称保持一致（这里我的名称是transporter）
    return new Promise((resolve, reject)=>{
        transporter.sendMail(mailObj, (err, data) => {
            if(err){
                reject()    //出错
            }else{
                resolve()    //成功
            }
        })
    })
}

module.exports = { send }
```

```js
//send.js
var Mail = require('./mail')  

Mail.send('460605674@qq.com', 342135)

```



```js
"QQ": {
        "host": "smtp.qq.com",
        "port": 465,
        "secure": true
    },
"126": {
        "host": "smtp.126.com",
        "port": 465,
        "secure": true
    },

"163": {
        "host": "smtp.163.com",
        "port": 465,
        "secure": true
    }
```

# 随机6位验证码
我一开始有几个疑问?

- 为什么验证码要6位,我只知道6比4安全.
  知乎:人机交互理论中提到人的短期记忆容量为 7±2, 数字过多则记忆困难；数字太少的话安全性会不足。因此6是一个非常合适的数。

- 无数个人请求验证码,验证码重复无怎么办?
  手机号,和邮箱不会重复, 哈哈哈 傻逼了我.

- 附上一些能用的东西
```js

生成6位验证码: 
 let code = ("000000" + Math.floor(Math.random() * 999999)).slice(-6);

正则验证手机号: 
let reg = /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/

隐藏手机号中间字段:
const hiddenReg = /^\d{3}(?<hidden>\d{4})\d{4}$/;
phoneNumber.replace(phoneNumber.match(hiddenReg).groups.hidden, "****");
  

```
  











