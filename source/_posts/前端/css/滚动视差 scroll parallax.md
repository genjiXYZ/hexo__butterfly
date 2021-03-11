---
title: 滚动视差 scroll parallax js and css
top_img: https://picgo.genji.xyz/image/parallax/top.png
description: "parallax"
keywords: "parallax"
date: 2020-05-01 00:00:00
cover: https://picgo.genji.xyz/image/parallax/top.png
tags: [parallax]
categories: [前端,css]
---




# 滚动视差 scroll parallax

## 说点没用的

滚动视差 似乎在 5 年前很火!

我个人很喜欢,我喜欢这种沉浸,交互的感觉,但是相反网页展示的信息量要比正常网站少了一点.而且有的垃圾电脑还卡!

在这个 demo 没有优化的时候!

用家里没有显卡的老古董打开 ==>> 卡的一逼

用 nuci7 核显 2k ==> 流畅

用 nuci7 核显 4k ==> 也有点卡

不过优化后 效果明显好多了!

---

## 两种控制方法

### js 与 css

- Js : 监听 scroll 更改 transition

- Css : 设置`perspective` `transform-style: preserve-3d;` `translate Z` 很好理解 `近大远小` `近快远慢`

### 优缺点(仅个人不完全的认为)

- Js : 更灵活 , 而且还能 左右移动 , 透明度 , 添加些 class 来实现动画啊, 颜色之类的. 效果更好
- css : 更方便 设置 css 即可实现.性能更好. 效果感觉像是一个平面

## js

### 代码

```js
var parallax = document.querySelector(".parallax"),
  Top = document.querySelector(".top"),
  Center = document.querySelector(".center"),
  Bottom = document.querySelector(".bottom");

window.addEventListener("scroll", (e) => {
  let scrolled_px = document.documentElement.scrollTop;
  //已经滚动了的 像素
  let scrolled_per =
    scrolled_px /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  //滚动的百分比  已经滚动的了像素 /(滚动条总长度 -  当前窗口的高度)

  //判断 parallax 是否还是视口
  if (scrolled_px <= parallax.offsetHeight) {
    Top.style.transform = `translateY(${scrolled_px *
      0.8}px) scale(${scrolled_per * 0.5 + 1} )`;
    Center.style.transform = `translateY(${scrolled_px *
      0.7}px) scale(${scrolled_per * 1 + 1} )`;
    Bottom.style.transform = `translateY(${scrolled_px *
      0.05}px) scale(${scrolled_per * 1 + 1} )`;
  }
});
```

我没有确切计算, 随便地根据效果设置的 `translateY` `scale`.

我见过那种计算的特别精确的, 滚动后图片之间的线还能连上. 应该是用矩阵算的.(找了一个月都找不到那个网站了) 

### 优化

现在这几行代码,我 2k 分辨率不卡 4k 就有点卡了.

scroll 触发频率很高的 ,而且,我还安装平滑滚动的软件 `Mos`,就触发的更频繁了.

搞个节流试试

```js
function move() {
  let scrolled_px = document.documentElement.scrollTop;
  let scrolled_per =
    scrolled_px /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  Top.style.transform = `translateY(${scrolled_px *
    0.8}px) scale(${scrolled_per * 0.5 + 1} )`;
  Center.style.transform = `translateY(${scrolled_px *
    0.7}px) scale(${scrolled_per * 1 + 1} )`;
  Bottom.style.transform = `translateY(${scrolled_px *
    0.05}px) scale(${scrolled_per * 1 + 1} )`;
}

function throttle(fn, delay) {
  let canRun = true;
  return function() {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true;
    }, delay);
  };
}

window.addEventListener("scroll", throttle(move, 16));
```

换成 requestAnimationFrame 试试

```js
function throttle(fn, delay) {
  let canRun = true;
  return function() {
    if (!canRun) return;
    canRun = false;
    window.requestAnimationFrame(() => {
      fn.apply(this, arguments);
      canRun = true;
    });
  };
}

window.addEventListener("scroll", throttle(move));
```

再添加个 will change

```css
.parallax {
  will-change: transform;
}
```

简单的看看

![image-20201202004002303](/Users/liulingyue/Desktop/image-20201202004002303.png)

滚动的时候 帧率也比较稳定 60

![image-20201202004127764](/Users/liulingyue/Desktop/image-20201202004127764.png)

帧率下来的区域是我没有滚动 哦!不是卡顿.

再添加个 IntersectionObserver 来 addEventListener 和 removeEventListener

```js
// window.addEventListener("scroll",throttle(move));  替换成

var io = new IntersectionObserver((entries) => {
  let flag = entries[0].isIntersecting;
  console.log(flag);
  if (flag) {
    window.addEventListener("scroll", throttle);
  } else {
    window.removeEventListener("scroll", throttle(move));
  }
});
io.observe(parallax);
```

省的计算是不是在可视区域了.

完整代码 **_codepen_**

<iframe height="265" style="width: 100%;" scrolling="no" title="scroll parallax js" src="https://codepen.io/895939059/embed/yLYWQaq?height=265&theme-id=dark&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/895939059/pen/yLYWQaq'>scroll parallax js</a> by Liu ling yue 
  (<a href='https://codepen.io/895939059'>@895939059</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## css

![image-20201202011155725](/Users/liulingyue/Desktop/image-20201202011155725.png)

就是 translate Z

### 代码

<iframe height="265" style="width: 100%;" scrolling="no" title="scroll parallax css" src="https://codepen.io/895939059/embed/poEJmJO?height=265&theme-id=dark&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/895939059/pen/poEJmJO'>scroll parallax css</a> by Liu ling yue 
  (<a href='https://codepen.io/895939059'>@895939059</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

***和js 的效果还是有差别的***

注意几个点

`perspective: 1px;`
`perspective-origin: 0 0;`
`transform-style: preserve-3d;`

`transform: translateZ(-20px) scale(21);`

## 计算

加上一个 scale() , 效果更好

至于 scale 放大多大才能完美匹配呢

这有个计算公式

`1 + (translateZ * -1) / perspective`

![image-20201202012244471](/Users/liulingyue/Desktop/image-20201202012244471.png)
