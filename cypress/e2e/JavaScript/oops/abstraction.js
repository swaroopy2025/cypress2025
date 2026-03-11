//Abstraction means hiding complex implementation details and showing only the necessary parts to the user.
/*Real-life Example 🚗

Think about driving a car.

You press the accelerator → the car moves.

You press the brake → the car stops.

You don’t need to know:

how the engine works

how fuel burns

how gears move internally

The car hides all complexity and only exposes simple controls.

That is abstraction.*/

 class CoffeeMachine { 

  makeCoffee() { 

    this.#boilWater(); 

    this.#brewCoffee(); 

    this.#pourCup(); 

  } 

  #boilWater() {console.log ("Boiling water...");} 

  #brewCoffee() {console.log ("Brewing coffee...");} 

  #pourCup() {console.log ("Pouring coffee into cup...");} 

} 

let machine = new CoffeeMachine(); 

 machine.makeCoffee(); 
