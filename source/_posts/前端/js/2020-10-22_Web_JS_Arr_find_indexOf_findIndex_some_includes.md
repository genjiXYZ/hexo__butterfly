---
title: find findIndex indexOf includes 
date: 2020-09-02 00:00:00
updated:
cover: https://picgo.genji.xyz/blog/posts/picjs.png
description:
tags: [js, Array]
categories: [前端, js]
keywords: "js,Array,find,findIndex,indexOf,includes,some"
---

#  Array.find()



{% note info no-icon %}
arr.find(callback[, thisArg])

callback(curElement,index,arry )

{% endnote %}

{% note warning no-icon %}

返回第一个符合条件的 `元素`的`值 ` ,否则返回 undefined

不改变原数组

{% endnote %}



基本不说了看下 thiArg

```js
class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}

Person.nextId = 0;

const jamie = new Person("Jamie"),
      juliet = new Person("Juliet"),
      peter = new Person("Peter"),
	  	jay = new Person("Jay");

const arr = [jamie, juliet, peter, jay];
const obj = {name:"football",ownerID:3}	  

// option 2: using "this" arg:
let a = arr.find(function(p) {
  return p.id === this.ownerID;
}, obj); 

console.log(a)
//Person { name: 'Jay', id: 3 }

```



#  Array.findIndex()

{% note info no-icon %}
arr.findIndex(callback[, thisArg])

callback(curElement,index,arry )

{% endnote %}



和 find  一样 只不过是返回 符合条件第一个`元素`的`索引 `否则 返回 `=1`

-------

# Arry/String   .indexOf()  .includes()

这两方法适用 `数组` 和`字符串`.

{% note info no-icon %}
arr.includes( value/stringToFind [, fromIndex])

str.indexOf(searchValue [, fromIndex])

{% endnote %}



fromIndex 开始查找位置   负数 就是从后查找

fromIndex 大于数组或者字符串长度 返回-1

indeOf  返回 `索引`  没有返回`-1`  且只返回第一个

includes 返回 `true` of `false`

```js
var array = [2, 5, ,2,9];
var arrStr = [ "apple","banana","lemon"]
array.indexOf(2);     		// 0
array.indexOf(7);    	    // -1
array.indexOf(9, 2); 	    // 2
array.includes(2)     	    //true
array.includes(7)    	    //false
array.includes(9,2)         //true
arrStr.indexOf('banana')    //1
arrStr.includes('banana')    //true
var string = "banana"
string.indexOf("a");        //1  
string.includes("a");       //true
```



{% note info no-icon %}
.includes()  和.some() 是有点类似的

比如

```js
let userForm = [1,2,3,4,5]
userForm.includes(4) //true
userForm.some(e=>e ===4 ) //true
```

{% endnote %}