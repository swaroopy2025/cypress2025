// filter(): returns new array based on the given condition
 
let num = [8, 9, 10, 11, 22, 33, 1, 2,  3,  4,  5,  6, 7, 8, 22, 33, 99, 8, 9]
 
let numFilter = num.filter((e)=> e%2 === 0); // even
let numFilterOdd = num.filter((e)=> e%2 !== 0); // odd
let numFilterOdd1 = num.filter((e)=> e%3 === 0); // 3 condition
let numFilterOdd12 = num.filter((e)=> e%3 == '0');
console.log(numFilter);
console.log(numFilterOdd);
console.log(numFilterOdd1);
console.log(numFilterOdd12);

console.log("==========================");

let students = [
  { name: "Ravi", marks: 80 },
  { name: "Anu", marks: 45 },
  { name: "John", marks: 60 }
];

// 1. map → get all names
let names = students.map(s => s.name);

// 2. filter → passed students
let passed = students.filter(s => s.marks >= 50);

// 3. forEach → print result
passed.forEach(s => {
  console.log(s.name + " passed");
});