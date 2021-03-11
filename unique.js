// //for for
// function unique(arr) {
//   let arrNew = [],
//     len = arr.length,
//     flag = 1;
//   for (let i = 0; i < len; i++) {
//     const eOld = arr[i];
//     flag = 1;
//     for (let j = 0; j < arrNew.length; j++) {
//       const eNew = arrNew[j];
//       if (eOld === eNew) {
//         flag = 0;
//         break;
//       }
//     }
//     flag && arrNew.push(eOld);
//   }
//   return arrNew;
// }

// function unique(arr) {
// 	let i  = 1,
// 		j =0 ,
// 		len = arr.length
// 		arr2 = arr
// 	for( i = 1;i<len;i++){
// 		for( j = 0;j<i;j++){
// 				if(arr2[i]===arr2[j]){
// 					arr2.splice(i,1);
// 					i--
// 			}
// 		}
// 	}
// 	return arr2
// }
// var prims = { boolean: {}, number: {}, string: {} },
//   objs = [];

// function unique(a) {
//   let prims = { boolean: {}, number: {}, string: {} },
//     objs = [];
//   a.forEach((e) => {
//     let type = typeof e;

//     if (type in prims) {
//       !prims[type].hasOwnProperty(e) && (prims[type][e] = 0);
//     } else {
     
//       !(objs.indexOf(e) >= 0) || objs.push(e);
//     }
//   });
//   return { prims, objs };
// }

function unique(a) {
  var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];

  return a.filter(function(item) {
      var type = typeof item;
      if(type in prims)
          return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
      else
          return objs.indexOf(item) >= 0 ? false : objs.push(item);
  });
  
}
//index of filter
// function unique(a) {
// 	return	a.filter((item, pos, self) => self.indexOf(item) == pos)
// 	}

// /// include reduce
// function unique(arr) {
// 	return	arr.reduce((pre,cur,index)=>pre.includes( cur )? pre:pre.concat(cur),[]
// 	)
// }

//sort  filter
// function unique(arr) {
//     return arr.sort().filter(function(item, index, ary) {
//         return !index || item != ary[index - 1];
//     });
// }

// function unique(arr) {
//     var obj = {};
//     return arr.filter(item => obj.hasOwnProperty(item) ? false : (obj[item] = true)
//     )
// }

// function unique(arr) {

// 	return uniq = [...new Set(arr)]

// }

var arr = [
    1,
    5,
    2,
    3,
    1,
    5,
    "hello",
    "1",
    "hello",
    "11",
    "22",
    true,
    { name: 11 },
    { name: 33 },
    { name: 34 },
    { name: 34 },
    { name: 33 },

  ],
  arrs = [],
  LOOPS = 1000,
  LEN = 1000;

while (LEN--) {
  arrs = arrs.concat(arr);
}

var d = new Date();
for (var i = 0; i < LOOPS; i++) {
  unique(arrs);
}

console.log(arrs);
console.log("用时(ms)", (new Date() - d) / LOOPS);
console.log("res: ", unique(arrs));




let res = [{name:"111",sex:"男",like:"egg"},{name:"222",sex:"男"},{name:"fdf",sex:"男"},{name:"111",sex:"女"}];




let resss= res.map(item => ({name:item.name,sex:item.sex}))
console.log('resss: ', resss);


