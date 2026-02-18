/*Print The output word by word for given String*/

let str="I am Working In Softsol";
//if u not give the space on split(''). print out output vertical way by words
let words= str.split('');
for(let i=0;i<words.length;i++){
    console.log(words[i]);
    
}
console.log('-----------------------------');

let strr="I am Working In Softsol";
//if u not give the space on split(' '). print out horizontal way by words
let word= strr.split(' ');
for(let i=0;i<word.length;i++){
    console.log(word[i]);
    
}
console.log('-----------------------------');
/* Print the output for a given string in Reverse mode*/
//without given space('') getting output as "ISHM ni gnikrow ma I"
let x="I am working in MHSI";
let y=x.split('').reverse().join('');
console.log(y);
console.log('-----------------------------');
//without given space('') getting output as "GHX in working am I"
let x1="I am working in GHX";
let y1=x1.split(' ').reverse().join(' ');
console.log(y1);