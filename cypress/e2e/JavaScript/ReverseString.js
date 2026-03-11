//Reverse a string using reverse() method
let str="Hello java script";
let str1=str.split('').reverse().join('');
console.log(str1);
console.log('-----------------------------');

//Print the output word by word for given string
let strr="I am Working In Softsol";
//if give the space on split(' '). print out horizontal way by words
let word= strr.split(' ');
for(let i=0;i<word.length;i++){
    console.log(word[i]);  
}
console.log('-----------------------------');
//Print the output word by word in reverse mode for given string
let str2="I am Working In Softsol";
//if give the space on split(' '). print out horizontal way by words
let word2= str2.split(' ').reverse();
for(let i=0;i<word2.length;i++){
    console.log(word2[i]);
}
console.log('-----------------------------');

//Print the output char by char and word by word in reverse mode for given string
let a="I am Working In Softsol";
//if not give the space on split(''). print out horizontal way by words
let b= a.split('').reverse().join('');
let c=b.split(' ');
for(let i=0;i<c.length;i++){
    console.log(c[i]);
}
console.log('-----------------------------');

//Reverse a string using function

function reversestring(string){
 return string.split('').reverse().join('')
}
console.log(reversestring("Swaroop Reddy"));