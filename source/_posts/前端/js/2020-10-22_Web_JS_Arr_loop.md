---
title: filter forEach every some reduce 
date: 2020-09-02 00:00:00
updated:
cover: https://picgo.genji.xyz/blog/posts/picjs.png
description: 闲着没事又去 MDN 看了看
tags: [js, Array]
categories: [前端, js]
keywords: "js,filter,forEach,every,some,reduce,map"
---

# table



这些虽然经常用,但还是又认真看了下MDN 

放一张 有意思的图哈哈

![img](https://picgo.genji.xyz/blog/posts/f18b33adf235b721b009eddbc00645e9_720w.jpg)

| 方法          | 参数                               | 返回值     | 改变原数组 | tip               |      |
| ------------- | ---------------------------------- | ---------- | :--------- | ----------------- | ---- |
| \.every\(\)   | \(curE,index,arr\),thisArg         | T/F        | ❌          | [].every() = true |      |
| \.some\(\)    | \(curE,index,arr\),thisArg         | T/F        | ❌          | [].some() = false |      |
| \.forEach\(\) | \(curE,index,arr\),thisArg         | undefinded | ❌          |                   |      |
| \.filter      | \(curE,index,arr\),thisArg         | 新数组     | ❌          |                   |      |
| .map          | \(curE,index,arr\),thisArg         | 新数组     | ❌          |                   |      |
| \.reduce\(\)  | \(acc,cur,index,arr\),initialValue | 执行后结果 | ❌          |                   |      |

# Array.filter()

比较万能

```js
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

const filterItems = (query) => {
  return fruits.filter((el) =>
    el.toLowerCase().includes(query.toLowerCase())
  );
}

filterItems('an')       //['banana', 'mango', 'orange']

```



# Array.forEach()

记三个比较特别的

```js
const arr = [1,2,,7];
//2-7 中间空的 不会被forEach()调用
arr.forEach((e)=>{console.log(e)})
// 1
// 2
// 7

var words = ['one', 'two', 'three', 'four'];
words.forEach(function(word) {
  console.log(word);
  if (word === 'two') {
    words.shift();
  }
});
// one
// two
// four
//个人理解 执行到 word = 'two'然后 删除了第一项 four 就提前了 


//promise 或 async 最好对造成的执行顺序影响多加考虑，否则容易出现错误。
let ratings = [5, 4, 5];
let sum = 0;
let sumFunction = async function (a, b) {
    return a + b;
} 
ratings.forEach(async function(rating) {
    sum = await sumFunction(sum, rating);
})
console.log(sum)   //0
setTimeout(() => {
console.log(sum);
}, 2000);    //5

```





# Arry.every()


 有false =>false    全true =>true   串联

{% note warning no-icon %}

空数组 都返回true 

`callback` 只会为那些已经被赋值的索引调用。不会为那些被删除或从未被赋值的索引调用。  

{% endnote %}

```js
[12, 5, 8, 130, 44].every(x => x >= 10) //false



let res = [12, 15, 18, ,44].every((x,index) => {
	console.log('index: ', index);

return x >= 10

})
console.log(res)   
//index:  0
//index:  1
//index:  2
//index:  4
//res  true

```
# Arry.some()
和ever 类似





# map

```js
res.map(item,index,ary=> {name:item.name,
                         	avatar:item.avatar
                          sex:item.sex
                         } )

const 

```



# Array.reduce()

{% note info no-icon %}
arr.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)
{% endnote %}

```
callback （执行数组中每个值的函数，包含四个参数）
		1、previousValue （上一次调用回调返回的值，或者是提供的初始值						（initialValue））
    2、currentValue （数组中当前被处理的元素）
    3、index （当前元素在数组中的索引）
    4、array （调用 reduce 的数组）

initialValue （作为第一次调用 callback 的第一个参数。）可以使数字也可以是{}  []

** 不改变原数组
```

{% note info no-icon %}
对空数组使用 `reduce` 会报错,但是设置了 `初始值`就不会报错了.
{% endnote %}

```js
var  arr = [];
var sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
}，0)
console.log(arr, sum); // [] 0


所以当 数组不能确定时,或者有可能是空数组 最好设定初始值 可以是0 可以是[]
```





转载 MDN 关于初始值的说明

```js
var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce() without initialValue
[ { x: 22 }, { x: 42 } ].reduce( maxCallback ); // 42
[ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
[                      ].reduce( maxCallback ); // TypeError

// map/reduce; better solution, also works for empty or larger arrays
[ { x: 22 }, { x: 42 } ].map( el => el.x )
                        .reduce( maxCallback2, -Infinity );
```



## 一些简单用法

```js
var  arr = [1, 2, 3, 4];
var Sum = arr.reduce( (a,b) => a + b ) // 求和
var Quadratic = arr.reduce( (a,b) => a * b ) //乘积
var QuadraticSum = arr.reduce( (a,b)=>a + b*b) //平方和
var obj = [{num:22},{num:33},{num:24}]
var Max = arr.reduce( (a,b)=> Math.max(a.num,b.num) )
```

## 一些好用的

元素出现次数

```js
let fruit = ['apple', 'banana', 'orange', 'lemon', 'apple','bear','lemon']

let fruitNum = fruit.reduce( (pre,cur) =>{
  	cur in pre ? pre[cur]++ :pre[cur] = 1 
  	return pre //千万别忘了 return
} ,{})//这里的初始值就是{}

///fruitNum { apple: 2, banana: 1, orange: 1, lemon: 2, bear: 1 }
```

数组去重

```js
let fruit = ['apple', 'banana', 'orange', 'lemon', 'apple','bear','lemon']

let newFruit = fruit.reduce( (pre,cur) =>
		pre.includes( cur ) ?pre:pre.concat(cur)
                            
 ,[])
console.log("newFruit", newFruit)

//就一行  省略了{ }和 return
```

{% note warning %}

​		`pre.includes( cur ) ?pre:pre.concat(cur)`

注意这里你把 concat 换成push 就会报错



要用push 得这么写,因为啊push() return 的数组的length

```js
let newFruit = fruit.reduce( (pre,cur) =>
{
	if(pre.includes(cur)){
		return pre
	}else{
		pre.push(cur)
		return pre
	}
}
 ,[])
console.log("newFruit", newFruit)
```
{% endnote %}



二维数组 转一维

```js
let arr = [[0, 1], [2, 3], [4, 5]]
let newArr = arr.reduce((pre,cur)=>pre.concat(cur),[])
console.log(newArr); 

当然 你可以用es6的flat
let newArr = arr.flat()
也可以用apply
let newArr = [].concat.apply([],arr)
split 方法 特别适用超级多维
let  newArr = (arr + '').split(',')
console.log(lists.map(Number))

```

对象 value 处理

```js
var res = [ {name:'lili',like:'read'},			  													{name:'hah',like:'play'},
            {name:'ligang',like:'run'}]

var arr = res.reduce( (a,b)=> a.concat(b.like),[])
```


