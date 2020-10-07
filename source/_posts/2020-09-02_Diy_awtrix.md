---
title: awtrix
date: 2020-09-02 00:00:00
updated: 
cover:  https://picgo.genji.xyz/blog/posts/image-20200930140531153.png
description: 像素电子时钟 制作


tags:  	[awtrix]
categories: Diy
keywords: "awtrix,像素电子时钟"
---









#  <i class="fas fa-dog"></i> awtrix

{% note success no-icon %}
最开始是在YouTube看到的这个项目,当时这个项目还是 version 1.0  
现在都有`pro`了!  闲着没事更新一下
{% endnote %}





## 硬件功能删减

我决定只保留基本的功能,

因为其他的功能都不太好用(不是云玩家,当时测试了一个月)



自动调节亮度(添加光敏电阻)   不稳定

播放器功能 (DFplayer)  鸡肋

手势功能  用不上几次

温度   用小米挺香
##  材料

这里只写了最精简的配件,如果需要其他功能请去 [官方文档](https://awtrixdocs.blueforcer.de/#/)

| No   | Name                                     |
| ---- | ---------------------------------------- |
| 1    | 32*8 的矩阵屏幕                          |
| 2    | Wemos  D1mini                            |
| 3    | 电源用usb 线代替(后面会说明)             |
| 4    | 导线                                     |
| 5    | 焊锡 ( 你有面包板也行)                   |
| 6    | 白纸一张                                 |
| 7    | 半透明 黑色 亚克力板 (淘宝10元包邮 定制) |
| 8    | 不透光 光栅 (咸鱼 20元收)                |



## 改造

当时`1.0版本` 使用了什么板子 我给忘了反正是没有办法直接供电 

现在这个板 `d1 mini` 可以用usb 直接供电 (5v 1A)  虽然达不到额定功率(亮度高的时候 矩阵屏幕会不稳定),但是亮度调低点就好了

![image-20200929003524665](https://picgo.genji.xyz/blog/posts/image-20200929003524665.png) 

##  祖传的焊接手艺

![WeChata7c1ef3090104df97ddc594c9beaa126](https://picgo.genji.xyz/blog/posts/WeChata7c1ef3090104df97ddc594c9beaa126.png)

看图连线时间



好像有焊接好板 能直接插 贵一点.

##  客户端 Flash  / Wifi

{% note default %}

之前是用 vscode `platformIO` 这个插件写入 ,而且需要自己修改配置文件,修改wifi什么的.

现在有 打包好的 flash 包, wifi 连接也更方便了,

[新版用了这个开源的包 esp8266 wifi Manager](https://github.com/tzapu/WiFiManager)

{% endnote %} 



[写入/wifi 步骤点此链接](https://awtrixdocs.blueforcer.de/#/en-en/controller)

 我用的macOS,window更方便 注意下 com 端口 即可





## 服务端

想用把服务端 放在 软路由的`docker`里 奈何 N1是 armv8架构 

现有的docker镜像 只支持 arm,arm64

所以放到了 `阿里云`



```bash
docker run --name AwTriX2 -p 7000:7000 -p 7001:7001 -p 5568:5568/udp --restart always -e TZ=Asia/Shanghai whyet/awtrix2:latest



## TZ time zone 时区 
Asia/Shanghai

7000 端口是 服务端面板
7001 才是你连wifi 时需要设置的端口

```



## 成品

淘宝买了个 `半透明茶色 亚克力板 ` 瞬间变得 ,清晰, 有质感.

![image-20200930135226606](https://picgo.genji.xyz/blog/posts/image-20200930135226606.png)



##  显示内容

服务端 里面有个 `App Store`

提供了很多功能: `天气` ,`温度`,`bilibili/youtube粉丝数`,`日出日落`等等.......

![image-20200930140137536](https://picgo.genji.xyz/blog/posts/image-20200930140137536.png)



## API

[https://awtrixdocs.blueforcer.de/#/en-en/api](https://awtrixdocs.blueforcer.de/#/en-en/api)

作者提供了很多API ,

之前用vue 写过一个类似遥控器的单屏网页 , 现在好像弄丢了....



比如你可以这样,显示一些文字 



{% note warning flat %}

当某个女孩子要来你家时候,你用手机提前设置好,岂不是哇塞.

Hello  XXX !

{% endnote  %}

![image-20200930140531153](https://picgo.genji.xyz/blog/posts/image-20200930140531153.png)

## 最后 这玩意多数时间还是当个 `表` 和 `日历` 来用 ...