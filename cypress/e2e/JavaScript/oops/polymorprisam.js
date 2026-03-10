//You are trying to implement method overloading like in Java, but in JavaScript it works differently.
// JavaScript DOES NOT support method overloading like Java
//If multiple methods have the same name, the last method overrides the previous ones.
/*So JavaScript internally keeps ONLY this method:a(x,y,z).The first two methods are ignored/overwritten.
Return Statement:
return x+y+z;
3 + 2 + undefined
number + undefined = NaN
So result becomes:NaN
------------------------------------
p1.a(3,2)

x = 3
y = 2
z = undefined

return 3 + 2 + undefined

= NaN
-------------------------------------
*/

class person{
    a(x){this.x=x; return x;}
    a(x,y){ this.x=x; this.y=y; return x+y;}
    a(x,y,z){ this.x=x; this.y=y;this.z=z; return x+y+z;}
    
}

const p1=new person();
console.log(p1.a(3));//NaN
console.log(p1.a(3,2));//NaN
console.log(p1.a(3,2,1));//6



