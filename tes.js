// var entries = [12, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8, 4, 2, 1]

// console.log( entries.find( (num)=> num=== 1  ) )

// var list2 = [{nihao:"ddd"},{nihao:"ddd"},{ddd:"niha"}]
// var list3 = ["hello","hi","world"]

// var unique_entries = [...new Set(entries)];
// var unique_entries2 = [...new Set(list2)];
// var unique_entries3 = [...new Set(list3)];

// console.log(unique_entries);
// console.log( unique_entries2)
// console.log( unique_entries3)
// var the_string = "123";
// var the_num = +the_string
// console.log(typeof( the_string),typeof( the_num) )

// var arr = [1, 2, 3, 4];
// var sum = arr.reduce(function(prev, cur, index, arr) {
//     console.log(prev, cur, index);
//     return prev + cur;
// })
// console.log(arr, sum);

// var sub = arr.reduce( (a,b)=>a + b*b)
// console.log("sub", sub)

// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// let nameNum = names.reduce((pre,cur)=>{
//  cur in pre? pre[cur]++:  pre[cur] = 1
//   return pre
// },{})
// console.log(nameNum);

// let fruit = ['apple', 'banana', 'orange', 'lemon', 'apple','bear','lemon']
// var list2 = [{nihao:"ddd"},{nihao:"ddd"},{ddd:"niha"}]

// let fruitNeed = list2.find( (a,b,c)=>{

// 	return a.nihao==="ddd"
// },obj)
// console.log('fruitNeed: ', fruitNeed);

// let fruitNeed = list2.findIndex( (a,b,c)=>{
// 	console.log('a,b,c: ', a,b,c);
// 	return a.nihao==="ddd"
// })

// console.log('fruitNeed: ', fruitNeed);

// let newFruit = fruit.reduce( (pre,cur) =>{
// 	return	pre.includes( cur ) ?pre:pre.concat(cur)

// } ,[])

// console.log("fruitNum", fruitNum)

// let arr = [[0, 1], [2, 3], [4, 5]]

// // let newArr = arr.flat()
// // console.log("newArr", newArr)

// // let newArr = [].concat.apply([],arr)
// // console.log('newArr: ', newArr);
// let  newArr = (arr + '').split(',')
// console.log('newArr: ', newArr);

// console.log(newArr.map(Number))

// var objArr = [{num:22}]
// var Max = objArr.reduce( (a,b)=> Math.max(a.num,b.num) ,{num:0})
// console.log('Max: ', Max);

// let a = {num:22}
// let b = { num: 33}
// Math.max(b.num)
// let max  = Math.max(a.num,b.num)
// console.log('max: ', max);

// var res = [ {name:'lili',like:'read'},			  													 {name:'hah',like:'play'},
// 				  {name:'ligang',like:'run'}]

// let newarr = res.filter((a,b,c)=>{
// 	console.log(a,b,c)

// })

// var arr = res.reduce( (a,b)=> a.concat(b.like),[])
// console.log('arr: ', arr);

// let random = Math.random() - 0.5
// console.log('random: ', random);
// let dd = { name:'nihao',like:'sing'}
// const {id = 5 } = dd
// console.log('dd: ', dd);

// (_=>[..."`1234567890-=~~QWERTYUIOP[]\~ASDFGHJKL;'~~ZXCVBNM,./~"].map(x=>(o+=`/${b='_'.repeat(w=x<y?2:' 667699'[x=["BS","TAB","CAPS","ENTER"][p++]||'SHIFT',p])}\|`,m+=y+(x+'    ').slice(0,w)+y+y,n+=y+b+y+y,l+=' __'+b)[73]&&(k.push(l,m,n,o),l='',m=n=o=y),m=n=o=y='|',p=l=k=[])&&k.join`
// `)()

// const { id = 5 } ={ name:'nihao',like:'sing',id:88}
// const { id = 5 } ={ name:'nihao',like:'sing',id:88}

// console.log(id)
// class Person {
//     constructor(name) {
//         this.name = name;
//         this.id = Person.nextId++;
//     }
// }

// Person.nextId = 0;

// const jamie = new Person("Jamie"),
//       juliet = new Person("Juliet"),
//       peter = new Person("Peter"),
// 	  	jay = new Person("Jay");

// const arr = [jamie, juliet, peter, jay];
// const obj = {name:"football",ownerID:3}

// // option 2: using "this" arg:
// let a = arr.find(function(p) {
//   return p.id === this.ownerID;
// }, obj);

// console.log(a)

// var newarry = [2, 5, ,2,9];
// var arrStr = [ "apple","banana","lemon"]
// newarry.indexOf(2);     		// 0
// newarry.indexOf(7);    	    // -1
// newarry.indexOf(9, 2); 	    // 2
// newarry.includes(2)     	    //true
// newarry.includes(7)    	    //false
// newarry.includes(9,2)         //true
// arrStr.indexOf('banana')    //1
// arrStr.includes('banana')    //true
// var string = "banana"
// string.indexOf("a");        //1
// string.includes("a");       //true

// var string = "banana";
// let arrBanana = string.split("");
// //[ 'b', 'a', 'n', 'a', 'n', 'a' ]
// let aIndex = arrBanana.reduce(
//   (pre, cur, index) => (cur == "a" ? [...pre,index] : pre),

//   []
// );
// console.log("aIndex", aIndex);

// let fruit = ["apple", "banana", "orange", "lemon", "apple", "bear", "lemon"];

// let newFruit = fruit.reduce((pre, cur) => {
//   console.log(pre);
//   if (pre.includes(cur)) {
//     return pre;
//   } else {
//     pre.push(cur);
//     return pre;
//   }
// }, []);
// console.log("newFruit", newFruit);

// let dd = []
// let ff = ()=>{
// return dd.push(1)
// }
// let gg = () =>{
// 	return dd.concat(1)
// 	}
// console.log(ff)
// console.log(gg)
// let arrobj = [{ name: "ddd" }, { ddd: "d" }, { dddd: "" }];

// let res = arrobj.some((e) => {
//   return Object.values(e).includes("");
// });

// console.log("res: ", res);
// const form = {
//   name: 123,
//   category: "fruit",
//   token:""
// };

// const arrrrrr = []
// for (const key in form) {
// 	if (form.hasOwnProperty(key)) {
// 		const element = form[key];
// 		arrrrrr.push( element)
// 	}
// }
// console.log('arrrrrr: ', arrrrrr);
// let ddddd= arrrrrr.some((item)=>item === ""|| undefined)
// console.log('ddddd: ', ddddd);

// let userForm = [1,2,3,4,5]
// console.log(userForm.includes(1)) //true
// console.log(userForm.some(e=>e ===1 ))
// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// const filterItems = (query) => {
//   return fruits.filter((el) =>
//     el.toLowerCase().includes(query.toLowerCase())
//   );
// }

// console.log("filterItems('an') : ", filterItems('an') );

// let res = [].every((x,index) => {
// 	console.log('index: ', index);

// return x >= 20

// })
// console.log(res)

// var xs = ['10', '10', '10'];

// var xs2 = xs.map( (e)=> parseInt(e));
// console.log('xs2: ', xs2);

// a = [0,3,4]
// b = {name:"liu"}

// let c = a.concat(b)
// console.log('c: ', c);

// b.name = "wang"
// console.log('c: ', c);

// a[0] = 10
// console.log(a)
// console.log('c: ', c);

// const newarry1 = ['a', 'b', 'c', 'd', 'e'];

// // copy to index 0 the element at index 3
// console.log(newarry1.copyWithin(0, 3, 4));
// var arr = [[1,34],[456,2,3,44,234],[4567,1,4,5,6],[34,78,23,1]];
// var iter = arr.entries();
// console.log('iter: ', iter.next());
// console.log('iter: ', iter.next());
// console.log('iter: ', iter.next());

// console.log('iter: ', iter.next());

// console.log('iter: ', iter.next());

// var a = []

// for(var i=0; i< arr.length+1; i++){    // 注意，是length+1，比数组的长度大
//     var tem = iter.next();             // 每次迭代时更新next
//     console.log(tem.done);             // 这里可以看到更新后的done都是false
//     if(tem.done !== true){             // 遍历迭代器结束done才是true
//         console.log(tem.value);
//         a[i]=tem.value;
//     }
// }

// console.log(a);
// [1, 2, 3,4,5,6].fill(4,4,5);
// console.log('[1, 2, 3,4,5,6].fill(4,4,5): ', [1, 2, 3,4,5,6].fill(4,4,5));

// var arr = [ 2,3,4,"1"]

// arr.indexOf("1")
// console.log('arr.indexOf("1"): ', arr.indexOf(1));

// arr.lastIndexOf(1)
// console.log('arr.lastIndexOf(1): ', arr.lastIndexOf(1));

// var newarry = [1,4,3,4,,5];

// // console.log('newarry.join("111"): ', newarry.join());
// console.log(newarry.sort())
// console.log(newarry)

// var obj = {
// 	"3":{NA :"FFEJ"},
//   push:[].push
// };

// console.log(obj) //{ push: [Function: push] }
// obj.push({name:"genji"})
// obj.push({name:"DDDF"})
// obj.push({name:"DDDF"})
// obj.push({name:"DDDF"})

// console.log(obj)  //{ '0': { name: 'genji' }, push: [Function: push], length: 1 }

// let arr = [1,2,3]

// arr.push("22")
// console.log(arr)

// // arr.length

// var obj = {
// 	"2": "a",
// 	"3": "b",
// 	"length": 1,
// 	"push": newarry.prototype.push
//   }
//   obj.push("c");
//   obj.push("d");

//   console.log(obj)

///什么方法都不用




// var arrNew = [];
// for (let i = 0; i < arr.length; i++) {
//   const eOld = arr[i];
//   flag = 1;
//   for (let j = 0; j < arrNew.length; j++) {
//     const eNew = arrNew[j];
//     if (eOld === eNew) {
//       flag = 0;
//       break;
//     }
//   }
//   flag && arrNew.push(eOld);
// }
// console.log("arrNew: ", arrNew);
// [ 1, 5, 2, 3, 'hello', '1', '11', '22' ]






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










// //index of filter
// function unique(a) {
// 	return	a.filter((item, pos, self) => self.indexOf(item) == pos)
// 	}


// /// include reduce 
// function unique(arr) {
// 	return	arr.reduce((pre,cur,index)=>pre.includes( cur )? pre:pre.concat(cur),[]
// 	)
// }

// function unique(arr) {
//     return arr.sort().filter(function(item, index, ary) {
//         return !index || item != ary[index - 1];
//     });
// }


// function unique(arr) {
//     let  obj = {};
//     return arr.filter(function(item) {
//         return seen.hasOwnProperty(item) ? false : (seen[item] = true);
//     });
// }

// var arr =  [1, 5, 2, 3, 1, 5, "hello", "1", "hello", "11", "22"];
// 	arrs = [],
// 	LOOPS = 1000,
// 	LEN = 1000;
// while(LEN--){

// 	arrs = arrs.concat(arr);
// }


// var d = new Date();
// for (var i = 0; i < LOOPS; i++) {
//   unique(arrs);
// }
// console.log("用时(ms)", (new Date() - d) / LOOPS)
// console.log("res: ", unique(arr));


// let a = arr.filter((item,index,ary) => {
// 	console.log(ary)
// 	return item === 1
// })


//[ 1, 5, 2, 3, 'hello', '1', { name: 11 } ]

// var arrNew = [];

// for (var i = 0; i < arr.length; i++) {
//   for (var j = i + 1; j < arr.length; j++) {
// 	if (arr[i] == arr[j]) {
// 		arr.splice(j, 1);
// 		j--;
// 	 }
//   }
// }

// var arr = [1, 5, 7, 6, 3, 2, 5, 4, 6, 9, 5, 1, 2, 3, 5, 4, 8, 9, 5, 4, 5, 0];
// for (var i = 0; i < arr.length; i++) {
//    for (var j = i + 1; j < arr.length; j++) {
// 	   if (arr[i] == arr[j]) {
// 		  arr.splice(j, 1);
// 		  j--;
// 	   }
// 	}
//  }

//  console.log('arr: ', arr);

//  console.log(' arr[1] === arr[6]: ',  arr[1] === arr[6]);

// let year = new Date()
// console.log('year: ', year);

// let arr = [1, 2, "haa"];

// let dd = arr.filter((e,i,arrg)=>{
// 	e ===2  && arr.push(2)
// 	return  e ===2
// })

// console.log('arr: ', dd);
// console.log('arr: ', arr);

// console.log("arr.pop(3): ", arr.pop(3));

// console.log("arr: ", arr);

// var obj = {
//   push: function push(e) {
//     [].push.call(this, e);
//   },
//   join: function join(e) {
//     [].join.call(this, e);
//   },
// };

// obj.push([{ name: "333" }, { ldld: "33322" }]);
// console.log("obj: ", obj);
// obj.join("hah")
// console.log("obj: ", obj);



function def(x =3) {
	console.log(x)
}
def()
let x = 100
def(x)


var a = 2.3
console.log(Math.floor(a))