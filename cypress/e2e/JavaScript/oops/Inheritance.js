class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log(this.name + " barks");
  }
}

let dog1 = new Dog("Tommy");

dog1.speak(); // Tommy makes a sound
dog1.bark();  // Tommy barks