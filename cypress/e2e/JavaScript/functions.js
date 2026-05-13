//Simple function
function add(a,b,c){
    c=a+b;
    console.log(c);
}

add(2,3);
console.log('_________________');

//Function stored in a variable.THere is no function name
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(2, 3)); // 6
console.log('_________________');
//Function Declarations (hoisted fully).You can call these before they appear in the code
greet();

function greet() {
  console.log("Hello!");
}
console.log('_________________');
//Function Expressions (NOT fully hoisted).These behave differently.
// Only the variable (var greet) is hoisted, not the function itself. So at call time, greet is undefined
greet(); // ❌ Error

var greet = function() {
  console.log("Hello!");
};
console.log('_________________');
//Arrow Function (Modern JavaScript)

const subtract = (a, b) => {
  return a - b;
};

console.log(subtract(5, 2)); // 3
console.log('_________________');
//Short form:
const square = x => x * x;

console.log(square(4)); // 16
console.log('_________________');
//Function without a name.
setTimeout(function() {
  console.log("Hello after 2 seconds");
}, 2000);
