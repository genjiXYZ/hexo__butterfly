---
title: console.
date: 2020-09-02 00:00:00
updated: 
cover: https://picgo.genji.xyz/blog/posts/console_log.png
description: 一些常用的console

tags:  	[js]
categories: [前端,js]
keywords: "console"
---
- console.log
- console.dir
- console.table()
- console.trace
- console.error() console.warn()
- console.time()和 console.timeEnd()
- console.group() console.groupEnd()
- console.count()
- console.clear()
- 自定义样式

## console.log()

```js
//没啥说的
var name = "genji";
console.log("name : ", name);

// name :  genji

//tips
console.log([object]);
```

## console.dir()

```js
//tips
console.dir(object, {depth:null}}
```

## console.table()

一开始没觉得很好用,直到有一天

```js
var animal = {
  dog: { name: "haha", like: "shit", about: "123" },
  cat: { name: "lili", like: "wool", about: "4523523" },
};
console.table(animal, ["name"]);
```

![image-20201128144734279](https://picgo.genji.xyz/blog/posts/image-20201128144734279.png)

可是筛选,可以排序.

有些请求的数据,有很多东西是你不用的,这样一筛选,很清晰了

换成数组试试.

```js
var animal = [
  { name: "lili", email: "haha@qq.com" },
  { name: "lala" },
  { name: "wang", email: "123@qq.com" },
];
console.table(animal, "email");
```

![image-20201128145644045](https://picgo.genji.xyz/blog/posts/image-20201128145644045.png)

可以清晰看到, 数组哪个对象的`key`是不存在的.并且能清晰的看到 index

要不你还得

```js
animal.forEach((e, i) => console.log(`${i}----${e.email}`));
```

![image-20201128145939043](https://picgo.genji.xyz/blog/posts/image-20201128145939043.png)

各有利弊,适当选择.我觉得有时候挺香的,有时候没那么香.



## console.error() console.warn()

我就是当高亮 来用!

![image-20201128151533877](https://picgo.genji.xyz/blog/posts/image-20201128151533877.png)

## console.trace()

```html
<button onclick="fn1()">跟踪函数运行</button>

<script>
  function fn1() {
    fn2();
  }
  function fn2() {
    console.trace();
  }
</script>

/// console.trace fn2 fn1 onclick
```

## console.group() console.groupEnd()

就是分下组. 更有层次吧

```js
console.log("Runoob");
console.group("post请求");
console.log("res = {data:'hello'}");
console.groupEnd();
console.log("执行下一个个命令");
```

![image-20201128140913499](https://picgo.genji.xyz/blog/posts/image-20201128140913499.png)

## console.time()和 console.timeEnd()

我主要是计时比较下性能,

```js
console.time();
for (i = 0; i < 100000; i++) {}
console.timeEnd();
```

## console.count() console.clear()

```js
for (i = 0; i < 10; i++) {
  console.count("name");
}

// name: 1
// name: 2
// name: 3
// name: 4
// name: 5
// name: 6
// name: 7
// name: 8
// name: 9
就是个计数的 从1 开始

console.clear()  // 清空

```

## console.profile console.profileEnd

```js
console.profile('性能分析器');
fn();
console.profileEnd();
```

![image-20201128140338413](https://picgo.genji.xyz/blog/posts/image-20201128140338413.png)

## 自定义内容

| 占位符   | 作用                          |
| -------- | ----------------------------- |
| %s       | 字符串                        |
| %d or %i | 整数                          |
| %f       | 浮点数                        |
| %o       | 可展开的DOM                   |
| %O       | 列出DOM的属性                 |
| %c       | 根据提供的css样式格式化字符串 |

```js
// 格式成可展开的的DOM，像在开发者工具Element面板那样可展开 
console.log('%o',document.body.firstElementChild); 
// 像JS对象那样访问DOM元素，可查看DOM元素的属性 
// 等同于console.dir(document.body.firstElementChild) 
console.log('%O',document.body.firstElementChild);
```

![image-20201128160732266](https://picgo.genji.xyz/blog/posts/image-20201128160732266.png)

```js
console.log(
  " ________   ____    \n/\\_____  \\ /'___\\   \n\\/___//'/'/\\ \\__/   \n    /' /' \\ \\  _``\\ \n  /' /'    \\ \\ \\L\\ \\\n /\\_/       \\ \\____/\n \\//         \\/___/ \n"
),
  console.log("%c 送我杯咖啡 ", "color:orange;font-size:16px"),
  console.log(
    "%c ",
    "background: url(http://picgo.genji.xyz/zanshangma.jpeg) no-repeat center;padding:100px;border-radius:20px;background-size: cover;"
  ),
  console.log("%c 前端小菜鸟,欢迎您来找 ", "color:orange;font-size:24px"),
  console.log(
    "%c ",
    "background: url(http://pic.genji.xyz/images/2020/03/15/WechatIMG3.jpg) no-repeat center;padding:100px;background-size: cover;"
  );
```





76 是怎么弄得 



字

[http://www.network-science.de/ascii/](http://www.network-science.de/ascii/)

[http://www.figlet.org/examples.html](http://www.figlet.org/examples.html)



图

https://www.degraeve.com/img2txt.php

或者google pic2ascii