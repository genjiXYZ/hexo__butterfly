---
title: github action
date: 2020-02-04 00:00:00
updated: 
top_img:
cover: https://picgo.genji.xyz/blog/posts/bg2019091201.jpg
description: github action

keywords: "github action"
tags: [CI/CD,github action]
categories: [前端,CI/CD]
---



## github action

​    之前用过不少类似工具 travis,circle,coding,daocloud(docker).但是吧 还是觉得github action要好用一些.

1.  语言

  `yaml`
   个人不太喜欢`jekins`  
   注意下格式就行,前端也没啥写的.
   最多就
   (push后build,tar -zcvf, ssh  scp ,cd,rm ,mkdir,npm install, pm2 )

2. 插件 

   有很多开源的action , 用的时候直接 `use`: `插件名`

   就很好用,就很懒!

3. 方便管理

   代码和 CI/CD 在一个平台真的很好管理, 再也不用切来切去,  

   

## 最近用的action插件

基本用法可以看看 : [阮一峰的github actions 教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

我只记录下最近用的action插件.

yaml 一定要注意格式  空格 和 tab

1. [actions/checkout@v2](https://github.com/marketplace/actions/checkout)

   ```yaml
   name: checkout
   on: push
   jobs:
     publish:
    runs-on: ubuntu-latest
    steps:
      -
        name: Checkout
        uses: actions/checkout@v2
        
   #这样你就能获取到 repo  的文件
   ```

2. [setup-node](https://github.com/marketplace/actions/setup-node-js-environment)  

   ```yaml
   #basic
   steps:
   - uses: actions/checkout@v2
   - uses: actions/setup-node@v1
     with:
       node-version: '12'
   - run: npm install
   - run: npm test
   
   
   #Publish to npmjs and GPR with npm/yarn:
   steps:
   - uses: actions/checkout@v2
   - uses: actions/setup-node@v1
     with:
       node-version: '10.x'
       registry-url: 'https://registry.npmjs.org'
   - run: npm install
   - run: npm publish
     env:
       NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
   - uses: actions/setup-node@v1
     with:
       registry-url: 'https://npm.pkg.github.com'
   - run: npm publish
     env:
       NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
   ```



3. [Github pages](https://github.com/marketplace/actions/github-pages)

   ```yaml
   name: action page
   
   on: push
   jobs:
     publish:
       runs-on: ubuntu-latest
       steps:
         -
           name: Checkout
           uses: actions/checkout@v2
         - uses: actions/setup-node@v1
           with:
             node-version: 10
         - run: npm install
           
         - name: build
           run: npm run build
         - name: ls
           run: ls
         -
           name: Deploy to GitHub Pages
           if: success()
           uses: crazy-max/ghaction-github-pages@v2
           with:
             target_branch: gh-pages
             build_dir: dist
           env:
             GITHUB_TOKEN: ${{ secrets.PAGETOKEN }}
   
      
   ```



4. [ssh deploy](https://github.com/marketplace/actions/ssh-deploy)

   ```YAML
       - name: Install npm dependencies
         run: npm install
       - name: Run build task
         run: npm run build --if-present
       - name: Deploy to Server
         uses: easingthemes/ssh-deploy@v2.1.5
         env:
             SSH_PRIVATE_KEY: ${{ secrets.SERVER_SSH_KEY }}
             ARGS: "-rltgoDzvO --delete"
             SOURCE: "dist/"
             REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
             REMOTE_USER: ${{ secrets.REMOTE_USER }}
             TARGET: ${{ secrets.REMOTE_TARGET }}
             
    #还有更多参数 端口等        
   ```

   

## action badge

#### [官方文档](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/adding-a-workflow-status-badge)

`https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_FILE_PATH>/badge.svg`

```md
![something](https://github.com/genjiXYZ/vue-parallax-banner/workflows/npm%20publish%20by%20action/badge.svg)
```

链接形式:[![something](https://github.com/genjiXYZ/vue-parallax-banner/workflows/npm%20publish%20by%20action/badge.svg)](https://github.com/genjiXYZ/vue-parallax-banner)

图片形式:![something](https://github.com/genjiXYZ/vue-parallax-banner/workflows/npm%20publish%20by%20action/badge.svg)

这个是动态的,根据你action执行的情况,显示不同状态.

