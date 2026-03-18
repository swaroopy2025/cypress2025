// some(): checks that atleast one condition is satisfied or not and returns the result in boolean: true, false
 
let num = [8, 9, 10, 11, 22, 33, 1, 2,  3,  4,  5,  6, 7, 8, 22, 33, 99, 8, 9]
 
 let numSome = num.some((n)=> true)
 console.log(numSome)
 
 
const users = [
  { name: "A", active: false },
  { name: "B", active: false }
];
 
const isAnyActive = users.some(user => user.active);
 
console.log(isAnyActive); // true
console.log("==================================");
console.log("==================================");


let numbers = [1, 3, 5, 8];

let result = numbers.some(num => num % 2 === 0);

console.log(result); // true

console.log("==================================");
console.log("==================================");
//some()        At least one element matches
//every()       All elements must match

let numbers1 = [1, 3, 5];

let result1 = numbers1.some(num => num % 2 === 0);

console.log(result1); // false