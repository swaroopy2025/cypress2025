class x{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    person(){
        console.log(`this is my ${this.name} and my age is ${this.age}`);
    }
}

class y extends x{

    child(){
        console.log(`this is child ${this.age} and this is my name ${this.name}`);
    }
    
}

const p=new y("swaroop",25);
p.child();
p.person();