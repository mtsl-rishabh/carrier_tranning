//Map()
const list1 = [1, 2, 3, 4];
var a=list.map((el) => el * 2);// [2, 4, 6, 8]

//filter()
const list2 = [1, 2, 3, 4];
list.filter((el) => el % 2 === 0); // [2, 4]

//reduce()
const list3 = [1, 2, 3, 4, 5];
list.reduce((total, item) => total + item, 0); // 15

//reduceRight()
const list4 = [1, 2, 3, 4, 5];
list.reduceRight((total, item) => total + item, 0); // 15

//fill()
const list5 = [1, 2, 3, 4, 5];
list.fill(0); // [0, 0, 0, 0, 0]

//find()
const list6 = [1, 2, 3, 4, 5];
list.find((el) => el === 3); // 3
list.find((el) => el === 6); // undefined

//index()
const list7 = [1, 2, 3, 4, 5];
list.indexOf(3); // 2
list.indexOf(6); // -1

//lastIndexOf()
const list8 = [1, 2, 3, 4, 5];
list.lastIndexOf(3); // 2
list.lastIndexOf(3, 1); // -1

//findIndex()
const array = [5, 12, 8, 130, 44];
array.findIndex((element) => element > 13); // 3

//includes()
const list9 = [1, 2, 3, 4, 5];
list.includes(3); // true
list.includes(6); // false

//pop()
const list10 = [1, 2, 3, 4, 5];
list.pop(); // 5
list; // [1, 2, 3, 4]

//push()
const list11 = [1, 2, 3, 4, 5];
list.push(6); // 6
list; // [1, 2, 3, 4, 5, 6]

//shift()
const list12 = [1, 2, 3, 4, 5];
list.shift(); // 1
list; // [2, 3, 4, 5]

//splice()
const list13 = [1, 2, 3, 4, 5];
list.splice(1, 2); // [2, 3]
list; // [1, 4, 5]

//slice
const list14 = [1, 2, 3, 4, 5];
list.slice(1, 3); // [2, 3]
list; // [1, 2, 3, 4, 5]
//reverse()
const list = [1, 2, 3, 4, 5];
list.reverse(); // [5, 4, 3, 2, 1]
list; // [5, 4, 3, 2, 1]