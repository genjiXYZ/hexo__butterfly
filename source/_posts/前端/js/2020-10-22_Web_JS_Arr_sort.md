---
title: Js Array.sort()
date: 2020-09-02 00:00:00
updated:
cover: https://picgo.genji.xyz/blog/posts/picjs.png
description:
tags: [js, Array]
categories: [前端, js]
keywords: "js,Array,sort"
---

#  Array.sort()



{% note info no-icon %}
arr.sort([compareFunction])
{% endnote %}

{% note warning no-icon %}
在原数组上进行排序,会改变原数组的值.如果有需求最好深拷贝一份在处理.

默认的是根据 unicode 编码进行排序!

{% endnote %}









## 数组大小排序

```js
var numbers. = [4, 2, 5, 1, 3];
numbers.sort((a,b)=> a-b ) //1-5   
numbers.sort((a,b)=> b-a ) //5-1  
```

## 随机排序

```js
var numbers. = [4, 2, 5, 1, 3];
numbers.sort((a,b)=> Math.random()- 0.5 )   
```



{% note warning no-icon %}
好像旧版本 chorme 对sort 支持有点问题 

[https://hufangyun.com/2017/sort-array/](https://hufangyun.com/2017/sort-array/)

{% endnote %}