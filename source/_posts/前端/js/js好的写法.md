---
title: js 一些写法记录
date: 2020-09-02 00:00:00
updated:
cover: https://picgo.genji.xyz/blog/posts/image-20201010162139035.png
description:
tags: [js, Mark]
categories: [前端, js]
keywords: "js,写法,优雅"
---

## 

```js
const {id = 5 } ={id:88, name:'nihao',like:'sing'}
console.log(id) //88
const {id = 5 } ={ name:'nihao',like:'sing'}
console.log(id)  // 5

//很类似那个默认传参
function def(x =3) {
	console.log(x)
}
def() //3
let x = 100
def(x) //100
```



# 取整

```js
var a = ~~2.33   ----> 2
var b = 2.33 | 0   ----> 2
var c = 2.33 >> 0   ----> 2
var d = Math.floor(a) ----> 2
```





## 连续判断 includes



```js
//不清晰
var role = "user"
if(role === "admin"||role === "superuser"||role === "editor"){
  //do something
}

if( ["admin","editer","superuser"].includes(role)){
  //do something
}


```


## || &&

```js
a = a || []
states || console.log('niubi')
states && console.log('niubi')
```



## 多个状态选择

```js
const actions = new Map([
  [1, ['processing','IndexPage']],
  [2, ['fail','FailPage']],
  [3, ['fail','FailPage']],
  [4, ['success','SuccessPage']],
  [5, ['cancel','CancelPage']],
  ['default', ['other','Index']]
])
const onButtonClick = (status)=>{
  let action = actions.get(status) || actions.get('default')
  sendLog(action[0])
  jumpTo(action[1])
}
//Map 和 Object
//Object 一般都有prototype
//Object 键只能是字符串或者Symbols Map的键可以是任意值。
//可以通过size属性很容易地得到一个Map的键值对个数
actions.size// =>6
```

## 数据处理

在用 chart.js ,获取的数据需要处理下

对象数组 处理. --解构赋值 map

```js
//有一段get 到的数据 [{},{}]
[
  {
    date: 20201021,
    states: 56,
    positive: 8289661,
    negative: 110646725,
  },
  {
    date: 20201020,
    states: 56,
    positive: 8232367,
    negative: 109964576,
  },
  ...and so on
];


//js
let arrPositive = []
let arrStates = []
data.forEach(d=>{
  
  const{ date,states,positive,negative} = d
  arrPositive.push({date , total : positive})
  arrStates.push({date , total : states})
})
//注意map  =>  和 ()=>{return} 和 function(){}区别
arrStates.map(d=>d.date).reverse()
arrStates.map(d=>d.total).reverse()
```

```js
var foo = [{
    name: 'Stark',
    age: 21
},{
    name: 'Jarvis',
    age: 20
},{
    name: 'Pepper',
    age: 16
}]

var result = foo.filter(person => person.age > 16)
	.map(person => ({person: person,friends: []
    }))

```

类数组转数组

```js

```

## reduce 求和 计算

```js
foo.reduce((a, b) => a + b); // => 15
```


## 去重



```js
var uniqueItems = [...new Set(items)]
arr.filter((item,index,ary)=> ary.indexOf(item) === index)
arr.reduce((pre,cur,index)=>pre.includes( cur )? pre:pre.concat(cur),[])
```

# 转换类型

## 数字转字符串

```js
var converted_number = 5 + "";
console.log(converted_number);
// 5
console.log(typeof converted_number); 
// string
```

## 字符串转数字

```js
the_string = "123";
console.log(+the_string);
// 123

var the_string = "123";
var the_num = +the_string 
console.log(typeof( the_string),typeof( the_num) )
//string number
```







# dongtai对象

```js
const dynamic = 'flavour';
var item = {
    name: 'Coke',
    [dynamic]: 'Cherry'
}
console.log(item); 
// { name: "Coke", flavour: "Cherry" }
```

