---
title: Git 同时push到 多个仓库
top_img: https://picgo.genji.xyz/blog/posts/git_push.jpg
description: "Git push到多个仓库 "
keywords: "git"
date: 2020-01-02 00:00:00
cover: https://picgo.genji.xyz/blog/posts/git_push.jpg
tags: [git]
categories: [mark,git]
---

-----

# git push 到多个仓库

##  手动档

随便初始化

```bash
git init 
touch README.md
git add .
git commit -m"some thing"
gti remote add origin   git@gitee.com:liulingyue/test.git

git push -u origin master
```

每个仓库都有这些话吧 .

 创建后有一个.git 隐藏文件  里面有个config



![image-20200704010944468](https://picgo.genji.xyz/blog/posts/image-20200704010944468.png)



这时候添加一个新的仓库 ,  注意 ` add` 后面不能是origin

```bash
git remote add hello  git@gitee.com:liulingyue/ddddfdfdfdfdfd.git
```



![image-20200704005128019](https://picgo.genji.xyz/blog/posts/image-20200704005128019.png)



再看 config  多出来个东西    `remote "hello"`.



这样就可以手动push  任意仓库

```bash
git push origin 
git push hello 
```



-----



##  自动档

![image-20200704005845355](https://picgo.genji.xyz/blog/posts/image-20200704005845355.png)



 直接添加 

直接 git push 

![image-20200704010013126](https://picgo.genji.xyz/blog/posts/image-20200704010013126.png)