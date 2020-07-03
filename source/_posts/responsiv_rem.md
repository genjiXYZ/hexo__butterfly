---
title: 移动端 rem自适应
top_img: https://cdn.dribbble.com/users/2181562/screenshots/11874821/media/7f180ffc5c497dabfb96f9dac1647ddb.jpg
description: "rem 自适应"
keywords: "travis"
date: 2018-01-05 00:00:00
cover: https://cdn.dribbble.com/users/2181562/screenshots/11874821/media/7f180ffc5c497dabfb96f9dac1647ddb.jpg
tags: [rem, meta, postcss, px2rem, 移动端]
categories: responsive
---

# 移动端 rem 自适应

### 1. rem --> html{font-size: 100px   or 625%   };
   chrome强制字体最小值为12px，低于12px按12px处理.
   1rem=10px就变成1rem=12px，出现偏差.


### 2. `<meta name='viewport' content='width=device-width,initial-scale=1,user-scale=no' />`

### 3. 高清适配方案中iPhone X全屏兼容：
  1、需要在viewport中添加 viewport-fit=cover，js和meta标签中都要添加；
  2、同时iPhone X屏幕底部圆弧区域占位高度使用 calc(constant(safe-area-inset-bottom) * 3) 作为padding-bottom， margin-bottom等高度属性的值。iPhone X上，高清适配方案中，此值等价于.34rem，即34逻辑像素。根据实际情况可以修改* 3这个系数来调整占位区域的高度，但一定要使用constant(safe-area-inset-bottom)。在ios11下，非iPhone X的设备此值为0，使用时需要注意样式覆盖的情况。

```js
//vue.config.js

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("autoprefixer")(),
          require("postcss-plugin-px2rem")({
            rootValue: 100, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为100px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            propWhiteList: [], //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            selectorBlackList: ["html"], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
        ],
      },
    },
  },
};
```

```css
html{
	font-size: 100px   or 625%  
}
```

```js
methods: {
    rem() {
      var designWidth = 750,
        rem2px = 100;
      document.documentElement.style.fontSize =
        (((window.innerWidth / designWidth) * rem2px) / 16) * 100 + "%";
    },
  },
  created() {
    this.rem(),
      window.addEventListener(
        "resize",
        () => {
          clearTimeout(timer);
          let timer = setTimeout(() => {
            this.rem()
          }, 200);
        },
        false
      );
  },
```




{% blockquote  %}
也可 将 fontsize  填入黑名单 , 媒体查询控制 字体的大小 避免 文字过小  .
{% endblockquote %}

