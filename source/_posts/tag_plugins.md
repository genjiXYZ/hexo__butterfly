---
title: tag plugins


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


