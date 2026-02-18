// foreach Method // For--in// For--of// Map()//filter()//reduce() methods
/*syntax:
array.forEach(function(currentValue, index, arr), thisValue)
*/

numbers = [1,2,3,4,5,6]
numbers.forEach(n => console.log(n));
/* OR */
numbers.forEach(function f(n){console.log(n)});
console.log ('--------------------')
 
// for .. in method - this method is used to print the values in object based
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key, obj[key]);
}
 
console.log ('--------------------')
 
/* for.. of()
num = [4,5,6,7,8,9]
 
for (const n of num) {
  if (n === 3) break;
} */
 
 
// Map(): this method is used for to multiply the array values 1x2, 2x4 
 
const doubled = numbers.map(n => n*2)
console.log(doubled)
 
console.log ('--------------------')
 
    // filter(): used for filtering the data in the Array.that means print the only even/odd values
 
    const evens = numbers.filter(n => n%2 === 0)
    console.log(evens);
    console.log ('--------------------')
 
    // reduce(): Reduces to a single value(SUM).
 
    const sum = numbers.reduce((total,n) => n+total,0);
    console.log(sum);