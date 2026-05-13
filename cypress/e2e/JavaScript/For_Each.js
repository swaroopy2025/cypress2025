/*  
| Method      | Purpose              | Returns New Array? | Use Case                  |
| ----------- | -------------------- | ------------------ | ------------------------- |
| `map()`     | Transform data       | ✅ Yes              | Modify every element      |
| `forEach()` | Just loop            | ❌ No               | Print / side effects      |
| `filter()`  | Select some elements | ✅ Yes              | Condition-based selection |

*/

let fruits=["apple","Orange","Grapes"]
fruits.forEach(n=>console.log(n))

console.log("--------------");
let num=[1,2,3,4,5];
num.forEach(num1=>{
    console.log(num1*2);
})