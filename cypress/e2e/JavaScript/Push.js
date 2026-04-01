
/*
| Method      | Action | Position  | Returns         |
| ----------- | ------ | --------- | --------------- |
| `push()`    | Add    | End       | New length      |
| `pop()`     | Remove | End       | Removed element |
| `shift()`   | Remove | Beginning | Removed element |
| `unshift()` | Add    | Beginning | New length      |

*/


const arr=[1,2,3,4,5,6,7,8,9,10]
//Appends the new elements at the end of the array and returned the new length of array .
let a= arr.push(11,12,13)
console.log(a)
console.log("Actual Array List "+ arr)

console.log("=========================");

let numbers = [1, 2];
numbers.push(3, 4, 5);
console.log(numbers);
// Output: [1, 2, 3, 4, 5]

console.log("=========================");

let arr2 = [10, 20];
let newLength = arr2.push(30);
//Returns new array length
console.log(newLength); // 3