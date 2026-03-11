/* class User {

  constructor(username, email) {
    this.username = username
    this.email = email
    console.log(this.username + " " +this.email);
    console.log(`${this.username} and maild is ${this.email}`);
  }

}

const user1 = new User("swaroop", "swaroop@gmail.com") */


/* Before ES6 we use the functions to create constructiors*/
/* function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Creating objects
const p1 = new Person("Swaroop", 25);
const p2 = new Person("Ravi", 30);

console.log(p1.name); // Swaroop
console.log(p2.age);  // 30 */

//1. Variables Declared Inside Class but Outside Constructor
//In modern JavaScript you can declare class properties outside the constructor and use them inside the constructor.
/* class Person {

  country = "India";   // variable outside constructor

  constructor(name) {
    this.name = name;
    console.log(this.country);
  }

}

const p1 = new Person("Swaroop"); */

//Variable Outside Class
//If a variable is declared outside the class, you can directly use it in the constructor.

let company = "TCS";

class Employee {

  constructor(name) {
    this.name = name;
    this.company = company;
  }

}

const e1 = new Employee("Swaroop",this.company);

console.log(e1);

//Example with Multiple Variables
/* class Student {

  college = "ABC College";

  constructor(name, age) {
    this.name = name;
    this.age = age;

    console.log("College:", this.college);
  }

}

const s1 = new Student("Ravi", 21); */