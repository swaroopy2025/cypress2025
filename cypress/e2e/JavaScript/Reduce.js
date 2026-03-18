let num = [8, 9, 10, 11, 22, 33, 1, 2,  3,  4,  5,  6, 7, 8, 22, 33, 99, 8, 9, 1, 2]
 
 let numReduce = num.reduce((total,n)=>{
    return total+n*2
}, 10);
console.log(numReduce);  
 
let numCount = num.reduce((NumCount,n)=>{
    NumCount[n]=(NumCount[n] || 0 )+1;
    return NumCount;
 
}, {})
console.log(numCount);