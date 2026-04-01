
/*
| Method      | Action | Position  | Returns         |
| ----------- | ------ | --------- | --------------- |
| `push()`    | Add    | End       | New length      |
| `pop()`     | Remove | End       | Removed element |
| `shift()`   | Remove | Beginning | Removed element |
| `unshift()` | Add    | Beginning | New length      |

*/


const arr=[1,2,3,4,5,6,7,8,9,10]
//Inserts the new elements at the start of the array and returned the new length of array .
let a= arr.unshift(11,12,13)

console.log(a)
console.log("Actual Array List "+ arr)
