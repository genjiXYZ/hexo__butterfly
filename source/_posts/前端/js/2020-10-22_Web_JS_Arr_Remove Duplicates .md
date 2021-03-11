---
title: 数组去重||unique||remove duplicates
date: 2020-09-02 00:00:00
updated:
cover: https://picgo.genji.xyz/blog/posts/picjs.png
description: 记录下几种去重的思路
tags: [js, Array]
categories: [前端, js]
keywords: "js,去重,remove duplicates,unique"
---

{% note info no-icon%}

去重的几种思路

只比较了了不同思路, `for` 一般会` filter`  性能好.

写了两个`for` 然后就 `for`  不动了 改用`filter `了.

如果后期性能要求特别高,把filter 改成for .

毕竟在不考虑实际情况下谈性能,都是耍流氓.

{% endnote  %}



```js
//基本测试参数  暂时只考虑 数字 字符串 布尔值
var arr =  [1, 5, 2, 3, 1, 5, "hello", "1", "hello", "11", "22"],
	arrs = [],
	LOOPS = 1000,
	LEN = 1000;
while(LEN--){
	arrs = arrs.concat(arr);
}

var d = new Date();
for (var i = 0; i < LOOPS; i++) {
  unique(arrs);
}
console.log("用时(ms)", (new Date() - d) / LOOPS)
console.log("res: ", unique(arr));

```





#  双层for  元素对比



```js
function unique(arr) {
  let arrNew = [],
    len = arr.length,
    flag = 1;
  for (let i = 0; i < len; i++) {
    const eOld = arr[i];
    flag = 1;
    for (let j = 0; j < arrNew.length; j++) {
      const eNew = arrNew[j];
      if (eOld === eNew) {
        flag = 0;
        break;
      }
    }
    flag && arrNew.push(eOld);
  }
  return arrNew;
}


//0.171
```



# 双层for splice

```js
function unique(arr) {
	let i  = 1,
		j =0 ,
		len = arr.length
		arr2 = arr
	for( i = 1;i<len;i++){
		for( j = 0;j<i;j++){
				if(arr2[i]===arr2[j]){
					arr2.splice(i,1);
					i--
			}
		}
	}
	return arr2
}
//0.122
```



# indexOf

```js
function unique(arr) {
	return	arr.filter((item, pos, self) => self.indexOf(item) == pos)
	}

//0.184
```



# includes reduce



```js
function unique(arr) {
	return	arr.reduce((pre,cur,index)=>pre.includes( cur )? pre:pre.concat(cur),[])
	}
//0.292
```



# sort 前后对比



```js
function unique(arr) {
    return arr.sort().filter(function(item, index, ary) {
        return !index || item != ary[index - 1];
    });
}
//0.366
```



# 对象(哈希表)

```js
function unique(arr) {
    var obj = {};
    return arr.filter(item => obj.hasOwnProperty(item) ? false : (obj[item] = true)
    )
}
//0.226

```





# Set

```js
uniq = [...new Set(array)]
//0.117
```

# 区分 type

```js


function unique(a) {
  let prims = { boolean: {}, number: {}, string: {} },
    objs = [];
  a.forEach((e) => {
    let type = typeof(e);
    if (type in prims) {
      !prims[type].hasOwnProperty(e) && (prims[type][e] = 0);
    } else {
      objs.indexOf(e) < 0 && objs.push(e);
    }
  });
  return { prims, objs };
}

```

