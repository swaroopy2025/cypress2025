/*
| Method          | Direction    | Result           |
| --------------- | ------------ | ---------------- |
| `indexOf()`     | Left → Right | First occurrence |
| `lastIndexOf()` | Right → Left | Last occurrence  |


*/


let arr=[1,2,3,4,4,3,2,1];
//By using lastIndexof
let indexof=arr.lastIndexOf(4);
console.log(indexof);
console.log("=================");
//By Using Indexof
let indexoffirst=arr.indexOf(4)
console.log(indexoffirst);

//array.lastIndexOf(element, fromIndex)
//Searches from right to left (end → start)
//Returns the index of the last occurrence
//If not found → returns -1
console.log("=================");
let arr1 = [10, 20, 30, 20, 40];
console.log(arr1.lastIndexOf(20, 4));
console.log("=================");
//string.lastIndexOf(searchValue, fromIndex)
let str = "hello world hello";
console.log(str.lastIndexOf("hello"));
console.log(str.lastIndexOf("hello",2));