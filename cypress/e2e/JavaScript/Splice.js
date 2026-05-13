// Syntax: array.splice(start, deleteCount, item1, item2, ...), returns deleted sub Array.
 
const num=[1,2,3,4,5,6,7,8,9,10]
 
let numSplice = num.splice(2,3,13,14)
console.log(numSplice)
console.log(num);
console.log('---------------------------------------')
numSplice.splice(0,0,66,77)
console.log(numSplice)

console.log('---------------------------------------')
let arr = [1, 2, 5];

arr.splice(2, 0, 3, 4);

console.log(arr);

console.log('---------------------------------------')

let arr1 = [1, 2, 3, 4];
arr1.splice(0, 0, 10, 20);
console.log(arr1);