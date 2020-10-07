---
title: Tag_plugins
description: 一些 Tag_plugins
date: 2020-01-01 00:00:00
cover:  
---
## 提示块

```Markdown
{% note [class] [no-icon] %}
Any content (support inline tags too.io).
{% endnote %}

[class]   : default | primary | success | info | warning | danger.
[no-icon] : Disable icon in note.

All parameters are optional.

```


{% note default %}
default 提示塊標籤
{% endnote %}

{% note primary no-icon %}
primary 提示塊標籤
{% endnote %}

{% note success %}
success 提示塊標籤
{% endnote %}

{% note info %}
info 提示塊標籤
{% endnote %}

{% note warning %}
warning 提示塊標籤
{% endnote %}

{% note danger %}
danger 提示塊標籤
{% endnote %}

## 图形



```Markdown
{% mermaid %}
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
{% endmermaid %}



```
{% mermaid %}
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
{% endmermaid %}



## tab 
```markdown

{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}



```
{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}



## btn

{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}

{% btn 'http://blog.genji.xyz',hello,far fa-hand-point-right,green larger %}







## front-matter

```
---
title: 【必需】頁面標題 
date: 【必需】頁面創建日期 
updated: 【可選】文章更新日期 
tags:  	【可選】文章標籤 
categories: 【可選】文章分類 数组 [1,2,3]表示1>2>3 子分类
keywords: 【可選】文章關鍵字 
description: 【可選】文章描述
top_img 【可選】文章頂部圖片
comments: 	【可選】顯示文章評論模塊 (默認 true)
cover:  【可選】文章縮略圖 (如果沒有設置 top_img, 文章頁頂部將顯示縮略圖，可設為 false / 圖片地址 / 留空)



toc:
toc_number:
auto_open:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:

---



https://demo.jerryc.me/posts/dc584b87/#Front-matter
```




