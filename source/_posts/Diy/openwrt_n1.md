---
title: N1 刷 openWrt
date: 2020-09-02 00:00:00
updated: 
cover:  https://picgo.genji.xyz/blog/posts/image-20201010162139035.png
description: 家里 500m/100m 速度不能浪费了啊!
tags:  	[openwrt,旁路由]
categories: diy
keywords: "openwrt,smartDns"
---

![image-20201010162139035](https://picgo.genji.xyz/blog/posts/image-20201010162139035.png)

## 只mark帖子 没有教程  

固件: [恩山  flippy 更新很快](https://www.right.com.cn/forum/thread-981406-1-1.html)    

DockerUI: 
- [luci-app-dockerman github](https://github.com/lisaac/luci-app-dockerman)  当然你也可以用 
- [portainer github](https://github.com/portainer/portainer)      
  
  

DDNS: 自带的 ddns 不支持 token 所以换了一个
- [ddns github ](https://github.com/NewFuture/DDNS)
- 如何配置   [我的文章-ddns](https://blog.genji.xyz/2020/01/05/2020-01-06_Net_ddns/)
- */5 * * * * cd /mnt/mmcblk1p3/ddns && python ./run.py
  
  

作为旁路由如何组网:

- [ youtube ](https://www.youtube.com/watch?v=jTs3VEaKFCw&t=1022s)
- 我选择的方案如下图

![image-20201010163852516](https://picgo.genji.xyz/blog/posts/image-20201010163852516.png)

连旁路由的wifi 出国

连主路由 国内



在电脑端我直接clash 

在手机端我直接设置代理加端口

但是在电视上,操作累死个人,所以选择连接 出国




救砖:

- [救砖视频 bilibili](https://www.bilibili.com/video/BV19J411c7Zf?from=search&seid=11516956421474620448)



