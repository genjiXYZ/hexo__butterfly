---
title: npm publish一个 vue 组件 
date: 2020-11-01 00:00:00
updated:
cover: https://picgo.genji.xyz/blog/posts/npm.jpg
description: 好久之前就想写一个自己的npm包,但是吧觉得自己菜.先写个vue小组件玩玩
tags: [npm]
categories: [前端,npm]
keywords: "npm"
---

## 两种方式包

1.webpack 打包成 js ( 体积小,适用极少的依赖第三方插件)

2.直接 vue 组件 (直观,方便后期改)

{% note info no-icon %}

我这小组件,还在更新中,经常改.( 感觉传入参数 还需要重新设计下!)所以选择第二种方式 .

{% endnote %}

## create hello

```js
vue create hello  -m npm    // -m 选择   包管理工具
然后你随便写个你想要的 组件
```

## 提取组件/添加入口文件

![image-20201115145749248](https://picgo.genji.xyz/blog/posts/image-20201115145749248.png)

创建个lib 文件夹 在src同级,将`components` 复制粘贴 

![image-20201115150045695](https://picgo.genji.xyz/blog/posts/image-20201115150045695.png)

在lib目录下 创建index.js  入口文件

[要暴露install 方法 :官方文档](https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6)

第一个参数是 `Vue` 构造器，第二个参数是一个可选的选项对象.

{% tabs info  %}
<!-- tab 单组件-->

```js
 //  lib/index.js
import parallaxBanner from './components/parallaxBanner'

parallaxBanner.install = function(Vue){
	Vue.component(parallaxBanner.name, parallaxBanner)
  //这里的parallaxBanner.name 就是你组件里面 定义的name  也可替换成任意 "str"
  }
 export default parallaxBanner
```

<!-- endtab -->

<!-- tab  按需引入-->

```js
//  按需引入 就是搞个对象出去 然后  import {a} = {a,b}
let ModuleObj = {
    ComponentA,
    ComponentB
}
let MyModule = {}
MyModule.install = (Vue) => {
    for (let i in ModuleObj) {
        Vue.component(i, ModuleObj[i])
    }
}
export default MyModule
```

<!-- endtab -->

<!-- tab antd-->

** 见文章末尾 其他 ** 

<!-- endtab -->
{% endtabs %}









## package.json

```json
{
  "name": "vue-parallax-banner",   // name required
  "version": "0.0.67",     // 版本号  每次publish的版本一定要不同 required
  "private": false,        // 公开/私人 required
  "author": "genjixyz",    // 作者   required
  "main": "lib/index.js",  // 入口文件  required
  "files": ["lib"],        // 白名单   
  "license":"MIT",  //开源协议
  "repository": {    //repo
    "type": "git",
    "url": "https://github.com/genjiXYZ/vue-parallax-banner"
  },
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "core-js": "^3.6.5",
    "vue": "^2.6.11",
    "vue-parallax-banner": "0.0.63"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "vue-template-compiler": "^2.6.11"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
}

```



## npm publish



{% tabs test3 %}
<!-- tab 1.npm 源 -->

确认你的 npm 源 ,想要在哪个源发布就用哪个.
   ```zsh
      ❯ npm config list  
      // metrics-registry = "https://registry.npm.taobao.org/"
      
      //我这里用的nrm 
      ❯ nrm ls 
      
        npm -------- https://registry.npmjs.org/
        yarn ------- https://registry.yarnpkg.com/
        cnpm ------- http://r.cnpmjs.org/
      * taobao ----- https://registry.npm.taobao.org/
        nj --------- https://registry.nodejitsu.com/
        npmMirror -- https://skimdb.npmjs.com/registry/
        edunpm ----- http://registry.enpmjs.org/
        
      ❯ nrm use npm
         Registry has been set to: https://registry.npmjs.org/
   ```

<!-- endtab -->

<!-- tab 2.npm login -->
 登录
 ```zsh
   ❯  npm login
   Username: genji.xyz
   Password:
   Email: (this IS public) 895939059@qq.com
   Logged in as genji.xyz on https://registry.npmjs.org/.
   
   // 这里可能有很多报错  我遇到了这些 =_=!
   ---------------------
   npm ERR! 402 Payment Required - PUT http://registry.npmjs.org/@genji%2fparallax-banner - You must sign up for private packages 
   
   //package.json 中 "private": false,    因为你没花钱 不能用私人包
   
   ---------------------
   npm ERR! code E404
   npm ERR! 404 Not Found - PUT https://registry.npmjs.org/genji-parallax-banner - Not found
   npm ERR! 404 
   npm ERR! 404  'genji-parallax-banner@0.0.1' is not in the npm registry.
   npm ERR! 404 You should bug the author to publish it (or use the name yourself!)
   npm ERR! 404 
   
   //我没有验证邮箱,  好多都报错404 问题都不一样
   
   ---------------------
   npm ERR! code E403
   npm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/genji-parallax-banner - Forbidden
   npm ERR! 403 In most cases, you or one of your dependencies are requesting
   npm ERR! 403 a package version that is forbidden by your security policy.
   // npm 包名字不能重复
   
   ---------------------
   npm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/vue-paralax-banner - vue-paralax-banner cannot be republished until 24 hours have passed.
   
   //删除后 24 小时后 才能发布 相同名字的package
 ```
<!-- endtab -->

<!-- tab 3.npm pack / npm publish -->
pack publish
   ```zsh
   npm pack // 本地生成一个压缩包  解压引入 测试用
   npm publish  //发布
   ```

<!-- endtab -->
{% endtabs %}

## 其他

#### 随手记录下antd 的 `dependencies` 有好用的 以后可以用.

```json
"dependencies": {
    "@ant-design/icons": "^2.1.1",
    "@ant-design/icons-vue": "^2.0.0",
    "@simonwep/pickr": "~1.7.0",
    "add-dom-event-listener": "^1.0.2",
    "array-tree-filter": "^2.1.0",
    "async-validator": "^3.0.3",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-runtime": "6.x",
    "classnames": "^2.2.5",
    "component-classes": "^1.2.6",
    "dom-align": "^1.10.4",
    "dom-closest": "^0.2.0",
    "dom-scroll-into-view": "^2.0.0",
    "enquire.js": "^2.1.6",
    "intersperse": "^1.0.0",
    "is-mobile": "^2.2.1",
    "is-negative-zero": "^2.0.0",
    "ismobilejs": "^1.0.0",
    "json2mq": "^0.2.0",
    "lodash": "^4.17.5",
    "moment": "^2.21.0",
    "mutationobserver-shim": "^0.3.2",
    "node-emoji": "^1.10.0",
    "omit.js": "^1.0.0",
    "raf": "^3.4.0",
    "resize-observer-polyfill": "^1.5.1",
    "shallow-equal": "^1.0.0",
    "shallowequal": "^1.0.2",
    "vue-ref": "^2.0.0",
    "warning": "^4.0.0"
  },

    "chalk": "^3.0.0",
    "cheerio": "^1.0.0-rc.2",
    "codecov": "^3.0.0",
    "colorful": "^2.1.0",
    "commander": "^4.0.0",
    "compare-versions": "^3.3.0",
    "cross-env": "^7.0.0",
    "css-loader": "^3.0.0",
    "deep-assign": "^2.0.0",
    "enquire-js": "^0.2.1",
    "eslint": "^6.8.0",
    "eslint-config-prettier": "^6.10.1",
    "eslint-plugin-html": "^6.0.0",
    "eslint-plugin-markdown": "^2.0.0-alpha.0",
    "eslint-plugin-vue": "^6.2.2",
    "fetch-jsonp": "^1.1.3",
    "fs-extra": "^8.0.0",
    "glob": "^7.1.2",
    "gulp": "^4.0.1",
    "gulp-babel": "^7.0.0",
    "gulp-strip-code": "^0.1.4",
    "html-webpack-plugin": "^3.2.0",
    "husky": "^4.0.0",
    "istanbul-instrumenter-loader": "^3.0.0",
    "jest": "^24.0.0",
    "jest-serializer-vue": "^2.0.0",
    "jest-transform-stub": "^2.0.0",
    "js-base64": "^3.0.0",
    "json-templater": "^1.2.0",
    "jsonp": "^0.2.1",
    "less": "^3.9.0",
    "less-loader": "^6.0.0",
    "less-plugin-npm-import": "^2.1.0",
    "lint-staged": "^10.0.0",
    "marked": "0.3.18",
    "merge2": "^1.2.1",
    "mini-css-extract-plugin": "^0.10.0",
    "minimist": "^1.2.0",
    "mkdirp": "^0.5.1",
    "mockdate": "^2.0.2",
    "nprogress": "^0.2.0",
    "optimize-css-assets-webpack-plugin": "^5.0.1",
    "postcss": "^7.0.6",
    "postcss-loader": "^3.0.0",
    "prettier": "^1.18.2",
    "pretty-quick": "^2.0.0",
    "querystring": "^0.2.0",
    "raw-loader": "^4.0.0",
    "reqwest": "^2.0.5",
    "rimraf": "^3.0.0",
    "rucksack-css": "^1.0.2",
    "selenium-server": "^3.0.1",
    "semver": "^7.0.0",
    "style-loader": "^1.0.0",
    "stylelint": "^13.0.0",
    "stylelint-config-prettier": "^8.0.0",
    "stylelint-config-standard": "^19.0.0",
    "terser-webpack-plugin": "^3.0.3",
    "through2": "^3.0.0",
    "url-loader": "^3.0.0",
    "vue": "^2.6.11",
    "vue-antd-md-loader": "^1.1.0",
    "vue-clipboard2": "0.3.1",
    "vue-draggable-resizable": "^2.1.0",
    "vue-eslint-parser": "^7.0.0",
    "vue-i18n": "^8.3.2",
    "vue-infinite-scroll": "^2.0.2",
    "vue-jest": "^2.5.0",
    "vue-loader": "^15.6.2",
    "vue-router": "^3.0.1",
    "vue-server-renderer": "^2.6.11",
    "vue-template-compiler": "^2.6.11",
    "vue-virtual-scroller": "^1.0.0",
    "vuex": "^3.1.0",
    "webpack": "^4.28.4",
    "webpack-cli": "^3.2.1",
    "webpack-dev-server": "^3.1.14",
    "webpack-merge": "^4.1.1",
    "webpackbar": "^4.0.0",
    "xhr-mock": "^2.5.1"
```





#### antd  入口文件写法   学习下(读书人的事)

```json

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Space = exports.PageHeader ............ = undefined;


var _space = require('./space');

var _space2 = _interopRequireDefault(_space);
.
.
.

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ENV = process.env.NODE_ENV;
if (ENV !== 'production' && ENV !== 'test' && typeof console !== 'undefined' && console.warn && typeof window !== 'undefined') {
  console.warn('You are using a whole package of antd, ' + 'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.');
}

var components = [_base2['default'], _affix2['default'], _anchor2['default'],...............];

var install = function install(Vue) {
  components.map(function (component) {
    Vue.use(component);
  });
  Vue.prototype.$message = _message2['default'];
  Vue.prototype.$notification = _notification2['default'];
  Vue.prototype.$info = _modal2['default'].info;
  Vue.prototype.$success = _modal2['default'].success;
  Vue.prototype.$error = _modal2['default'].error;
  Vue.prototype.$warning = _modal2['default'].warning;
  Vue.prototype.$confirm = _modal2['default'].confirm;
  Vue.prototype.$destroyAll = _modal2['default'].destroyAll;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

exports.Base = _base2['default'];
.
.
.
.
.
.
.
exports['default'] = {
  version: _version2['default'],
  install: install
};
```

