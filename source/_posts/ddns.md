---
title: ddns
top_img: https://picgo.genji.xyz/blog/posts/images.jpeg
description: "有了公网ip,试试ddns,不用内网穿透了就"
keywords: "ddns"
cover: https://picgo.genji.xyz/blog/posts/images.jpeg
tags: [ddns, 旁路由]
categories: 网络
---







Dns ( domain name server )  有过服务器的都懂    域名解析

ddns  ( Dynamic domain name server )   就是前面加个  Dynamic  动态的 .

为什么要用ddns ?而不是直接在 服务商dns解析  添加个a 记录 指向 你的ip 呢  ?

因为 你向电信爸爸申请的公网ip 是每天都变化的,甚至重启光猫有时候也会变.(没有公网ip的可以用内网穿透,这里不说了)





## 方案一

### 利用路由器自带的ddns

#### 优点:不折腾  缺点:服务商少  有的路由器不支持多个域名

以我家的 `小米ax3600`为例,自带的ddns服务商就那么几个:

![image-20200917014105405](https://picgo.genji.xyz/blog/posts/image-20200917014105405.png)

这里注意下 图片里的 `账号密码` 就是你在服务商注册的账号和密码

![image-20200917014310786](https://picgo.genji.xyz/blog/posts/image-20200917014310786.png)

##### 主机名称  就是你在服务商(这里是花生壳)注册的域名.

一开始没懂什么是`主机名称`  哈哈 域名你就说域名呗..

有的服务商第一次使用的话,可能需要你填写当前的公网ip.都没问题的话会显示:

![image-20200917015141777](https://picgo.genji.xyz/blog/posts/image-20200917015141777.png)

##### 这里注意下 小米路由器好像只能启用 一个,不能多个同时启用.

这时候就可以用域名访问你的ip . ip变化的话,域名解析 自动改成你现在ip . 

当然会有一定延迟,毕竟有个检查的时间.

如果你有二级域名也想解析到你的动态公网ip  ,就可以设置cname了

比如你的公网ip  是 8.8.8.8  ,然后通过ddns 记录到了  baidu.com 了,

这时候你把 nihao.baidu.com 通过cname 指向 baidu.com 

访问 baidu.com nihao.baidu.com都会解析到你的公网ip

然后电信爸爸给你改成 8.8.8.9了  ,这时候路由器检查到了,然后就会向服务商请求,把ip改成了8.8.8.9

这里面有一个  检查间隔的时间 和服务商 ttl 的时间 .

同理 nihao.baidu.com 的服务商也有个ttl时间 

![image-20200917025246755](https://picgo.genji.xyz/blog/posts/image-20200917025246755.png)

反正就是套娃 很慢.

所以就有了方案二



## 方案二

通过旁路由的ddns直接解析到你域名的服务商

因为小米路由器的服务商有限 没有腾讯云 或者阿里 

所以要用下旁路由的 ddns ,一般来说旁路有支持的服务商很多的:

<img src="https://picgo.genji.xyz/blog/posts/image-20200917021109249.png" alt="image-20200917021109249" style="zoom: 50%;" />





这样就少了个中间商 赚差价

但是问题来了![image-20200917021236263](https://picgo.genji.xyz/blog/posts/image-20200917021236263.png)



这里还是用 用户名 和 密码 的方式,但是服务商都要用 token 秘钥啥的了

如果 你的服务商 支持 用户名 和 密码 的方式.就可以直接用了.



![image-20200917021829641](https://picgo.genji.xyz/blog/posts/image-20200917021829641.png)

注意如果你是旁路由这里就不能是默认的`网络`了,因为这里ip是你主路由dhcp给旁路由的ip 比如:192.168.3.200,不是真正公网ip,要改成url的方式.

![image-20200917022152035](https://picgo.genji.xyz/blog/posts/image-20200917022152035.png)

可以用自带的,也可用 [http://ip.3322.net/](http://ip.3322.net/) ,访问这个链接可以返回你的公网ip



我是腾讯的dnspod,不支持账号和密码了,所以要换个新的ddns  ipk





## 方案三

在github 没找到旁路由好用的ddns ipk  ,找到了个py脚本.

而且是最近更新的 ,也支持腾讯的dnspod.

[https://github.com/NewFuture/DDNS](https://github.com/NewFuture/DDNS)

![image-20200917022425545](https://picgo.genji.xyz/blog/posts/image-20200917022425545.png)



说明很详细.不多赘述

申请个 秘钥 记住id  和token

配置下`config.json`

```json
{
  "$schema": "https://ddns.newfuture.cc/schema/v2.8.json", 
  "debug": false, 
  "dns": "dnspod", 
  "id": "你的秘钥id", 
  "index4": "default",///获取ipv4方式 
  "index6": "default", //获取ipv6方式 
  "ipv4": [
    "baidu.com", 
    "nihao.baidu.com"
  ], 
  "ipv6": [
    "newfuture.cc", 
    "ipv6.ddns.newfuture.cc"
  ], 
  "proxy": null, 
  "token": "YOUR TOKEN or KEY for DNS Provider", 
  "ttl": null,
  "cache":true
}
```

填好了就设置个计划任务 让他每5分钟 执行一次 ,因为  我设置了 `"cache":true` 所以没有变就不提交,改变了再提交.

![image-20200917022541974](https://picgo.genji.xyz/blog/posts/image-20200917022541974.png)



###  如何设置计划任务

好多* 好乱

这里引用下这篇文章 [https://www.mivm.cn/openwrt-crontab/](https://www.mivm.cn/openwrt-crontab/)

例子：`0 6 * * * reboot`

每天6点0分执行`reboot`命令。因为只设置了“分”和“时”，“日月周”都是通配符，所以只要当前时间是 6点0分，不管当前是几月几日周几都会被执行。

还是例子：`0 6 * * 1,3 reboot`

每周一和周三的6点0分执行`reboot`命令。因为“周”被设置为了`1,3`，逗号是将多个值分开，当条件达到其中一个值时便会执行。所以只有在周一或者是周三的6点0分才会被执行，当然，也不管当前是几月几日。

再来个例子：`0 6 * 3-6 1,3 reboot`

这个例子的月改为了`3-6`，连字符的作用是指定范围，它就是在三月至六月的每周一和每周三的6点0分执行`reboot`命令。其实也可以这样写`0 6 * 3,4,5,6 1,3 reboot`，不过这样不够简洁，推荐还是使用连字符。

斜杠例子：`0 */3 * * * reboot`

斜杠的作用是跳过某些特定值。你可以把它看作一个除法，当结果等于整数时才会执行。上面个例子，把时写成了`*/3`，星号表示任何值、/表示除法、3表示除数。那么，如果现在是1点，1/3 不是整数，就不会被执行，如果是9点，9/3 是整数，它就可以被执行。不知道我这样说大家有没有理解。（[小山](https://github.com/Hill-98)数学是体育老师教的）

最后一个例子：`*/10 */3 * * * reboot`

这个例子有两个斜杠，分别是分和时，那么不但要满足当前“分”除于10是整数，还需要满足“时”除于3是整数，比如1点10分，虽然“分”满足了条件，不过“时”并没有，只有当前时间为3点40分，这样的情况下，才会触发执行。



### 计划任务注意事项

我们先来说一下上面那个重启设备，那种写法其实是错误的，正确的写法应该是：`0 6 * * * sleep 60 && reboot`。

为什么呢？因为当设备重启后，计划任务的守护进程被启动，便会立即检查一遍是否有任务需要被执行，设备重启时间一般是小于1分钟的，所以当设备重启后，就又会触发这个重启任务，直到时间不匹配为止，而延迟60秒再重启设备可以避免这种错误。

当日或周同时被设定为固定值时，那么其中的一个条件被满足时，任务就会被执行，不会等到两个条件均满足。（这么苛刻的条件，能满足的估计不多。）

命令中双引号使用 % 时，需要加反斜杠转义，错误的例子：`0 6 * * * touch /tmp/$(date "%Y")`，正确的例子：`0 6 * * * touch /tmp/$(date "\%Y")`。





## 完结撒花