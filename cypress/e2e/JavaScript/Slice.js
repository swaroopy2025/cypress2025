// slice : returns and prints the elements.start → index to begin (inclusive),end → index to stop (exclusive)
//slice() is a method used to extract a portion of an array, string, or typed array without modifying the original data.
//Syntax: array.slice(start, end)
 
let num = [8, 9, 10, 11, 22, 33,1, 2,  3,  4,  5,  6, 7, 8]
 
let numSlice = num.slice(-4,-2)
console.log(numSlice);

console.log("==================================");

let arr = [10, 20, 30, 40, 50];

let result = arr.slice(1, 4);
console.log(result); // [20, 30, 40]