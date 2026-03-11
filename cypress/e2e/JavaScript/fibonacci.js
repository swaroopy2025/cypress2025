let a=0;
let b=1;
let res=[a,b];

for(let i=2;i<10;i++){
    c=a+b;
    res.push(c);
    a=b;
    b=c;
}
console.log(res);
