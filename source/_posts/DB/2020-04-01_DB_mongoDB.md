---
title: mongoDB 
date: 2020-04-01 00:00:00
updated: 
cover:  https://picgo.genji.xyz/blog/posts/mongoDB.jpg
description: mongoDB 安装,及其他软件使用

tags:  	mongoDB
keywords: mongoDB
categories: [DB,mongodb]
---

# MongoDB安装



{% note info %}
Mongodb  操作方式 和js  挺像的.省事.

[redis 和 mongoDB区别](https://zhuanlan.zhihu.com/p/86777551)



[mongodb 官方文档](https://docs.mongodb.com/)

[mongodb 官方文档中文版](https://docs.mongoing.com/)

{% endnote %}



## Homebrew安装 (我懒所以...)

慢就换源,或者终端开代理.
```bash
### 切换库
brew tap mongodb/brew

##搜索 看版本
brew search mongodb

##安装 
brew install mongodb-community
```



- 配置文件：**/usr/local/etc/mongod.conf**
- 日志文件路径：**/usr/local/var/log/mongodb**
- 数据存放路径：**/usr/local/var/mongodb**



```
## 切换数据库目录
mongod --dbpath /Users/liulingyue/mongodata/data

## 使用 brew 命令启动服务。
brew services start mongodb-community
brew services stop mongodb-community
```


-----
# 数据库转移
把本地的数据 转移到 服务器.

## 打包
```
 ## 在当前文件夹生成 dump 文件
 mongodump -d 数据库名 
```
## 导入
复制`dump`到服务器,在`dump`当前目录执行
```
mongorestore 
```
-----

# 可视化工具

[Robo 3T](https://robomongo.org/ )     **注意不是studio 3T,那个是花钱的.**

[MongoDB Compass](https://www.mongodb.com/products/compass)  **官方社区的**


 感觉这俩都差不多,但是 3T 那行命令是显示出来的,自己可以写很多map,替换啊 ,正则的操作. 

~~compass  没有找到在哪写 ,可能有 ,但是我没找到...~~

找到了也还挺好用.哈哈都差不多.

![image-20201008094014627](https://picgo.genji.xyz/blog/posts/image-20201008094014627.png)

-----
# 数据库连接

1. 本地连本地

   可视化工具链接:   localhost:27017 直接填就行

   ```node
   //node
   ## mongoose
   module.exports = app=>{
   	const mongoose = require('mongoose')
   		mongoose.connect("mongodb://127.0.0.1:27017/name",{
   		useNewUrlParser:true,
   		useUnifiedTopology:true,
   		useCreateIndex:true
   	}).then(() => {
   		console.log("本地  连接数据库成功");
   		})
   		.catch(err => {
   		console.log("连接数据库失败");
   		})
   }
   
   ## node 
   const { MongoClient } = require("mongodb");
   const uri = 'mongodb://localhost:27017';  
   (async function() {
     try {
       const client = await MongoClient.connect(uri,{ useNewUrlParser: true });
       // ... anything
   
       client.close();
     } catch(e) {
       console.error(e)
     }
   
   })()
   
   
   ## 这些我了解的不是特别清晰 
   		useNewUrlParser:true,
   		useUnifiedTopology:true,
   		useCreateIndex:true
   报警 添上就对了... 应该是允许某些规则...
   		
   ```

2.   连接云数据库

	```zsh
	## 一般都会给你个链接 添上你数据库密码 和 dbname 即可
	srv://<username>:<password>@<ip/domain><:port>/<dbname>?<options>
	```

3. 可视化工具连服务器 

   等于ssh登录,再连本地.

	![image-20201008220836636](https://picgo.genji.xyz/blog/posts/image-20201008220836636.png)

	![image-20201008220812468](https://picgo.genji.xyz/blog/posts/image-20201008220812468.png)

4.  连接需要  authentication 的 

 先创建需要验证的 username

	```ssh
	mongo 
	use admin
	## 最高权限
	db.createUser({user:"root",pwd:"123456",roles:["root"]}) 
	## 指定数据库权限
	db.createUser({user:"username",pwd:"password",roles:[{role:"dbOwner",db:"数据库名"}]})

	```
	修改mongod.conf文件 开启验证

	```diff
	systemLog:
	  destination: file
	  path: /usr/local/var/log/mongodb/mongo.log
	  logAppend: true
	storage:
 	 dbPath: /usr/local/var/mongodb
	net:
 	 port: 27017
	-  bindIp: 127.0.0.1
	+  bindIp: 0.0.0.0
	security:
	-  authorization: disabled
	+  authorization: enabled
	
	```

{% note warning simple %}
别忘了 防火墙 和 安全组 开放 你设置的端口!!!!
{% endnote %}

重启

node 方连接方式  同理连接 云数据库.

写下可视化工具连接. 

这里`Database` 写admin 就好了 ,**别写你要连接的数据库**.

![image-20201008220457323](https://picgo.genji.xyz/blog/posts/image-20201008220457323.png)





####  roles 如下：

**数据库用户角色（Database User Roles)**

- read : 授权User只读数据的权限，允许用户读取指定的数据库
- readWrite 授权User读/写数据的权限，允许用户读/写指定的数据库

**数据库管理角色（Database Admininstration Roles)**

- dbAdmin：在当前的数据库中执行管理操作，如索引的创建、删除、统计、查看等
- dbOwner：在当前的数据库中执行任意操作，增、删、改、查等
- userAdmin ：在当前的数据库中管理User**，**创建、删除和管理用户。

**备份和还原角色（Backup and Restoration Roles)**

- backup
- restore

**跨库角色（All-Database Roles)**

- readAnyDatabase：授权在所有的数据库上读取数据的权限，只在admin 中可用
- readWriteAnyDatabase：授权在所有的数据库上读写数据的权限，只在admin 中可用
- userAdminAnyDatabase：授权在所有的数据库上管理User的权限，只在admin中可用
- dbAdminAnyDatabase： 授权管理所有数据库的权限，只在admin 中可用

**集群管理角色（Cluster Administration Roles)**

- clusterAdmin：授权管理集群的最高权限，只在admin中可用
- clusterManager：授权管理和监控集群的权限
- clusterMonoitor：授权监控集群的权限，对监控工具具有readonly的权限
- hostManager：管理server

**超级角色（super master  Roles)**

- root ：超级账户和权限，只在admin中可用le



# mongodb 常用命令

```
# 连接格式 有的需要srv 有的不需要验证直接连不用username
mongodb://[username:password@]host1[:port1][,...hostN[:portN]]][/[database][?options]]

# 查看db 运行ip 和 端口信息
db.getMongo()


# 创建超级管理员
db.createUser({user:"root",pwd:"123456",roles:["root"]})

# mongo 
# use admin 


# 更改数据库 
{
 "_id":ObjectId(),
 "icon":"https://localhost:3000/upload/fdjfiejifejfe.png"
}

db.getCollection('collections').find({}).map(doc => {
	doc.icon = doc.icon ? doc.icon.replace('localhost:3000','yourDomain.com') : null
	return doc
	db.collectionName.save(doc)
})


# 更改嵌套
{
	"_id":ObjectId(),
	"items":[
		{
			"_id":ObjectId(),
			"icon":"https://localhost:3000/upload/fdjfiejifejfe.png"
		},
		{
			"_id":ObjectId(),
			"icon":"https://localhost:3000/upload/12323123.png"
		}
	]
}


db.getCollection('collections').find({}).map(doc => {
	
	# 这里没用doc.items = doc.items.map()   因为更改的是个对象 改地址等于改本身
	doc.items.map( item => {
		item.icon = item.icon ?item.icon.replace('localhost:3000','yourDomain.com') : null
		return item
	})
	return doc
	db.collectionName.save(doc)
})






```











