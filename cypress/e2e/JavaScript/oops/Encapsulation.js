/*** In JavaScript, the concept of Access Modifiers (or access specifiers) is not the same as in languages like Java or C++.
JavaScript has limited support for access control.
1. Public (Default)

All properties and methods are public by default.

2. Private (#)

JavaScript supports true private members using #.
3. Protected (Not officially supported)

JavaScript does not have a real protected modifier. Developers usually use a naming convention like _.
class Person {
  _salary = 50000; // treated as protected by convention
}

JavaScript mainly supports public and private (#) members, while protected is only a naming convention.
***/
//// All public
/* class Person {
  name = "John";   // public variable

  showName() {     // public method
    console.log(this.name);
  }
}

const p = new Person();
console.log(p.name);  // accessible
p.showName(); */

//////Private 
/*** 
Important Points:

#number → private variable
#display() → private method
They can only be used inside the same class
To print them, create a public method like printData().
*****/
class Person {
  #age = 25;   // private variable

  #showAge() { // private method
    console.log(this.#age);
  }

  display() {
    this.#showAge();
  }
}

const p = new Person();
p.display();   // works
// console.log(p.#age); ❌ Error