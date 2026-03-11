/* class sample{

    constructor(username,age){
        this.username=username;
        this.age=age;
        
    }
}

const info=new sample("swaroop",26)
console.log(info) */

/* class sample{
    loc="hyd";
    constructor(username,age){
        this.username=username;
        this.age=age;
        console.log(this.loc);
        
    }
}

const info=new sample("swaroop",26)
console.log(info) */

let loc="hyd";
class sample{
    
    constructor(username,age){
        this.username=username;
        this.age=age;
        this.loc=loc;
        //console.log(this.loc);
        
    }
}

const info=new sample("swaroop",26,this.loc)
console.log(info)
