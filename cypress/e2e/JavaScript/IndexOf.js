let num = [8, 9, 10, 11, 22, 33,1, 2,  3,  4,  5,  6, 7, 8,22,33,99,8,9]

//Find position of a value. This print the position of array where is the 22 and its starts from index 2
//Syntax: array.indexOf(element, start)
//element → value to search for
//start (optional) → index to begin search
//It returns the first occurrence only
let numIndex = num.indexOf(22,2) // starts from first Index  --> forward direction
let numLastIndex = num.lastIndexOf(22,18) // starts from last index --> search reverse direction
console.log(numIndex);
console.log(numLastIndex);
console.log("==================================");
console.log("==================================");

let arr = [10, 20, 30, 20];

console.log(arr.indexOf(20));     // 1
console.log(arr.indexOf(20, 2));  // 3
