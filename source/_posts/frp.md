---
title: frp 内网穿透
description: "frp内网穿透 仅仅为了访问家里的设备还好."
keywords: "frp"
date: 2018-01-05 00:00:00
cover: https://picgo.genji.xyz/blog/posts/frp0.png
tags: [frp,内网穿透]
categories: frp
---
# frp 内网穿透/映射

#### 办网时候 尽量要公网ip   阿里或者腾讯的 学生服务器 1m带宽 都不够吃屎的.

-----



## 工具 github  frp

[https://github.com/fatedier/frp](https://github.com/fatedier/frp)



不同系统下载不同  工具包

![frp2](https://picgo.genji.xyz/blog/posts/frp2.png)



![frp](https://picgo.genji.xyz/blog/posts/frp.png)







## 配置服务器端

1. ssh 服务器 
2. 下载工具包 
3. 解压 里面有个frps.ini
4. 设置端口

```ini
# frps.ini
#require
[common]
bind_addr = 0.0.0.0
bind_port = 7000






#option


#udp
bind_udp_port = 7001   
#tcp
kcp_bind_pot = 7000

#密码
token = qaz123

#其他
log_level = info
log_max_days = 3
max_pool_count = 5
max_ports_per_client = 0
tcp_mux = true
disable_log_color = false
log_file = /www/server/panel/plugin/btp_frps/temp/frps.log


```

​    

5. 运行

```sh
sh
./frps -c ./frps.ini
```

   

6. 开放端口  服务器本地的 和 服务商的 安全组   



## 客户端

1.  也下载个工具包 我这里是mac  下载的是 drawin 版本的

2. 解压 有个frpc.ini 文件

   

```ini
[common]
server_addr = 公网ip地址
server_port = 7000

token = qaz123

[web]
type = http
#要映射的端口
local_port = 8080  
local_ip=127.0.0.1
custom_domains = 域名或者公网ip
remotr_port= 8080

```

3. 运行(路径要对) 

```shel
./frpc -c ./frpc.ini
```

## 结论

没啥难度

可选充值代替品(也挺贵): 

花生壳 每月免费1G 速度可以 

nat123  老古董

ngrok  




服务器带宽1m ,吃了屎一样难受 . 管电信要个公网ip 不香么 ,如果动态公网ip,可以用ddns.

