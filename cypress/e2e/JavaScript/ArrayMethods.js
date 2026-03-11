 
let num = [];
 
num.push('java','python','c#');
console.log(num);
console.log('--------------------------------')
 
// push: Add the element in the last
num.push('javascript');
console.log(num);
console.log('--------------------------------')
 
// pop: removes the element in the last
num.pop();
console.log(num);
console.log('--------------------------------')
 
// Shift: removes the first element
 
let fruits = ['Apples','Mangoes','Guava','banana']
 
let shift1= fruits.shift();
console.log(shift1);
console.log('--------------------------------')
 
// unshift: add the elements in the first
 
let colors = ['black','blue','pink'];
colors.unshift('yellow','navyblue');
console.log(colors);
console.log('--------------------------------')
 
// splice:
 
let names = ['santhosh','softsol','Sudheer', 'swaroop'];
names.splice(0,2,'akhil')
console.log(names);
console.log('--------------------------------')
 
// slice: prints the elements for the given range.
 
let n =[1,2,3,4,5,6];
let newn = n.slice(1,5);
console.log(newn);
 
console.log('---------------------------');
 
// indexOf(): provides the first immdex value of an element.
 
let fruits1 = ['Apple', 'banana', 'pilum', 'peer'];
let str_fruits1 = fruits1.indexOf('peer');
console.log("Index of fruit: ",str_fruits1);
console.log("--------------------------");
 
//lastIndexOf(): provides the last index of the element in a aary if contains same element value in different index.
 
let fruit = ['Plump','Apple','Banana','Peach','Apple','Mango'];
let fruitlastIndex = fruit.lastIndexOf('Apple');
let fruitIndexOf1 = fruit.indexOf('Apple');
console.log(fruitlastIndex);
console.log(fruitIndexOf1);
console.log("---------------------------");
 
 
// some(): checks whether at least one element in the array passes a condition and returns
 
let num1 = [1,2,3,4,5,6,7,8];
let fg = num1.some((e)=> e%2 === 0);
console.log(fg);
console.log("---------------------------");
 
// filter():
 
let num2 =  [1,2,3,4,5,6,7,8,9,10];
let fg1 = num2.filter((e)=> e%2 === 0);
let fg2 = num2.filter((e)=> e%2 !== 0);
console.log(fg1);
console.log(fg2);
console.log("---------------------------");
 
 
// reduce(): It is used to reduce an array to a single value (like sum, product, average, etc.)
 
let num3 =  [1,2,3,4,5,6,7,8,9,10];
 
let sum = num3.reduce((total,n)=>total+n,0)
console.log(sum);
let product = num3.reduce((total1,n)=>total1*n,1)
console.log(product);
console.log("---------------------------");
 
// map():
 
let num4 = [2,5,6,7,8,9]
let double = num4.map((n)=>n*2);
console.log(double);
console.log ('--------------------')
 
// forEach():
numbers = [1,2,3,4,5,6]
numbers.forEach(n => console.log(n));
console.log ('--------------------');
 
 
// forEach with If Condition:
 
numbers = [1,2,3,4,5,6]
 
numbers.forEach((n)=>{
    if(n%2 === 0){
        console.log(n)
    }
});
 
 