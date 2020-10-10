---
title: openWrt SmartDns
date: 2020-09-02 00:00:00
updated: 
cover:  https://picgo.genji.xyz/blog/posts/smartdns-banner.png
description: 家里网速没问题500m电信,就是dns有点问题.用这个优选一下
tags:  	[openwrt]
categories: Diy
keywords: "openwrt,smartDns"
---



# SmartDns

{% note info %}
[SmartDNS github 仓库](https://github.com/pymumu/smartdns)

我用的小米ax3600,好像只支持两个dns服务商,而且返回的ip,有的又是随机选择.  



SmartDns能从多个上游服务商获取dns结果,并且放回访问速度最快的给客服端.

{% endnote %}

# 配置

## 安装(略过)

github仓库说的特别清晰 ,中文!

## 配置

![image-20201010153519938](https://picgo.genji.xyz/blog/posts/image-20201010153519938.png)

 

这里需要说的是

![image-20201010153544699](https://picgo.genji.xyz/blog/posts/image-20201010153544699.png)



首先需要了解下

openwrt > 网络 > DHCP/DNS  (Dnsmasq)

![image-20201010153727280](/Users/liulingyue/Desktop/hexo__butterfly/source/_posts/image-20201010153727280.png)



`作为上游 `, 就是自动帮你设置的dns 转发.

`重定向53端口`就是代替Dnsmasq 接管 53 端口

53端口:就是提供dns解析的端口



建议:使用上游



--------

## 冲突

如果你 `openwrt` 安装了`openclash`

![image-20201010154125803](https://picgo.genji.xyz/blog/posts/image-20201010154125803.png)

这里有个本地dns劫持 ,如果你开启的话

smartdns中的设置就会不生效,保存后Dnsmasq仍恢复设置

我自己是直接 `停用`然后 重启设备.

## 添加dns服务器商

[https://dns.ip.cn/   这是一个列出了常用dns 服务商的网站](https://dns.ip.cn/)

我个人的配置

![image-20201010154715193](https://picgo.genji.xyz/blog/posts/image-20201010154715193.png)

注意udp tcp tls.

在右侧的`修改`,你还可以添加分组,区分国内过外.

我自己是没有设置. 

## 路由器设置

由于我是旁路由 ,所以需要在主路由(小米ax3600)中设置dns ,指向我的旁路由(openwrt)的IP.

![image-20201010155057835](https://picgo.genji.xyz/blog/posts/image-20201010155057835.png)

## 验证配置正确

正常连接主路由的网络,终端输入: 

```bash

❯ nslookup -querytype=ptr smartdns


Server:		192.168.3.1
Address:	192.168.3.1#53

Non-authoritative answer:
smartdns	name = OpenWrt.

Authoritative answers can be found from:

```

有如下显示为正确配置.

若没有`smartdns	name = OpenWrt.`就是没有配置上

## 测试

```bash
## 用119.29.29.29 dnsPod服务商 解析www.iqiyi.com
## 返回来5个ip
## 电脑会随机选一个来用
> nslookup www.iqiyi.com 119.29.29.29


Server:		119.29.29.29
Address:	119.29.29.29#53

Non-authoritative answer:
www.iqiyi.com	canonical name = ipv6-static.dns.iqiyi.com.
Name:	ipv6-static.dns.iqiyi.com
Address: 121.9.221.82
Name:	ipv6-static.dns.iqiyi.com
Address: 121.9.221.83
Name:	ipv6-static.dns.iqiyi.com
Address: 121.9.221.84
Name:	ipv6-static.dns.iqiyi.com
Address: 121.9.221.100
Name:	ipv6-static.dns.iqiyi.com
Address: 121.9.221.81
```

用smartdns

```bash
## 后面走的是我路由器
❯ nslookup www.iqiyi.com 192.168.3.1
Server:		192.168.3.1
Address:	192.168.3.1#53

Non-authoritative answer:
www.iqiyi.com	canonical name = ipv6-static.dns.iqiyi.com.
Name:	ipv6-static.dns.iqiyi.com
Address: 121.9.221.100

```

只返回个你最快的..



这里没有用 我旁路由的ip( 192.168.3.100 )

是因为我在主路由( 192.168.3.100 )设置了dns 指向192.168.3.1 

用谁都一样. 

## 尾巴

作用是有的,但是程度有限.

我用他主要是解决有的网站图片打不开,换个dns 就好了的问题.

用它帮我选个好用的ip,省的我重新设置dns.

