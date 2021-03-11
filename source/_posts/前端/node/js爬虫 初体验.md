---
title: js爬虫 初体验
date: 2020-02-04 00:00:00
updated: 
cover: https://picgo.genji.xyz/blog/posts/image-20201202174646454.png
description: 练个手

keywords: "爬虫"
tags: [爬虫]
categories: [前端,node]
---


#  js爬虫 初体验 ( 帮朋友完成他的作业 )

***一个不好好搞设计,没事闲着学python的的朋友***

妈的 帮她 搞完了 还没用上 !! 白学了一个小下午.






## 简述

+ 要爬的网站 [香港出入境人次](https://www.immd.gov.hk/hkt/stat_20201102.html )
+ node 插件 ` axios`  ` cheerio(类似jq 的工具)` `dayjs` `mongoose`

+ 再找用什么爬东西的时候发现个 好用的 `Puppeteer` 有时间试试.
+ 网站挺简单 没有反爬虫 

## 爬

### 连接数据库 创建schema

```js
//db.js
module.exports = ()=>{
	const mongoose = require('mongoose')
	mongoose.connect("mongodb://hongkang:123456@localhost:27017/hongkang",{
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


```

```js
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  positionData: {
    type: Object,
  },
  date: {
    type: String,
  },
});
module.exports = mongoose.model("hongkang", schema);

```

### 先爬一天的数据试试

一个小demo  写的不太工整哈哈

```js
async function getWebData() {
  try {
    let title ,tableTitel= "";
    let catergory,positionData = {};



    const res = await axios.get(`https://www.immd.gov.hk/hkt/stat_${cur}.html`);
    const $html = res.data;
    const $ = cheerio.load($html);
    $("h1").each((i, el) => {
      title = el.children[0].data;
   
    });
    $("table").each((i, el) => {
      tableTitel = el.attribs.title;
    });
    $("tr").text((i, el) => {
      let str = el;
      let arg = JSON.stringify(str)
        .replace(/\"/g, "")
        .replace(/\s/g, "")
        .split("\\n")
        .splice(1);

      //提取分类catergory
      if (i < 4) {
        return;
      } else if (i == 4) {
        catergory = arg;
        return;
      } else {
        let enter = {};
        let out = {};
        arg.forEach((el, i) => {
          if (i != 0 && i <= 4) {
            enter[`${catergory[i - 1]}`] = arg[i];
          } else if (i != 0 && i <= 8) {
            out[`${catergory[i - 1]}`] = arg[i];
          }
        });
        positionData[arg[0]] = {
          enter,
          out,
        };
      }
    });    
    
    
    hongkang.create({ positionData, date: cur }); //mongoose 增
    console.log(`已经获取${cur}的数据`);
  } catch (error) {
    console.log("error: ", error);
  }
}
```



### 爬所有的

这个网站其实数据是 1月24   这里用了day.js(moment 的小儿子 )

```js
var startDate =  "2020-01-24"
var  step =  0 

function calDate(){
    let cur = dayjs(startDate)
      .add(step, "day")
      .format("YYYY/MM/DD")
    
    return cur
}


async function getWebData() {
  //... //////
 	let cur =  calDate()
  if (
      cur ==
      dayjs()
        .format("YYYY/MM/DD")
        .replace(/\//g, "")
    ) {
      return;
    }
 //......
  step++ 
  getWebData()
}
```

<img src="/Users/liulingyue/Desktop/image-20201202172703453.png" alt="image-20201202172703453" style="zoom:50%;" />

<img src="/Users/liulingyue/Desktop/image-20201202172739655.png" alt="image-20201202172739655" style="zoom:50%;" />

## 后端 

没啥说的 直接连数据库 写个接口

```js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const mongoose = require("mongoose");

//------
mongoose
  .connect("mongodb://hongkang:123456@localhost:27017/hongkang", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("本地  连接数据库成功");
  })
  .catch((err) => {
    console.log("连接数据库失败");
  });
//------
app.listen(3000, (req, res) => {
  console.log("http://localhost:3000");
});
//------
//------ 引入model
const model = require("./models/hangkong");

//------ paramas 是时间 YYYYMMDD 20201010
app.get("/api/:data", async (req, res) => {
  let str = req.params.data;
  const data = await model.find({ date: str });
  console.log("data: ", data.length);
  if (data.length == 0) {
    res.send(200, { message: "对不起数据还没有更新" });
  } else {
    res.send(200, data);
  }
});
```

## 前端 

### 插件

+ `antd table datePicker`

+ v-charts

+ toast (notify)

有点丑,我都有点接受不了,但是朋友着急要 . 我还得先学习怎么爬哈哈 赶工!!

![image-20201202173642251](/Users/liulingyue/Desktop/image-20201202173642251.png)

<img src="/Users/liulingyue/Desktop/image-20201202173839733.png" alt="image-20201202173839733"  />

## 总结

练个手,毕竟没用js爬过东西! 