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
