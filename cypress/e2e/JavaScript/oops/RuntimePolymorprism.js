/*** Runtime Polymorphism means a method call is resolved at runtime instead of compile time.
In JavaScript, this is usually achieved through method overriding in inheritance.

*****/

class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {   // overriding parent method
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {   // overriding parent method
    console.log("Cat meows");
  }
}

let a;

a = new Dog();
a.speak();   // Dog barks

a = new Cat();
a.speak();   // Cat meows