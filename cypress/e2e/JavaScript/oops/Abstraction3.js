/* /*** 
In this program we created three classes using inheritance. 
The user interacts only with public methods a(), b(), and c(), while the internal calculations are hidden inside private methods using #. This demonstrates abstraction and encapsulation in JavaScript. 

User only sees:

ci.a()
ci.b()
ci.c()

Hidden internal logic:

#divide()
#multiplyLogic()
#complexCalculation()

Meaning::

multiply inherits from type
Division inherits from multiply
Object ci gets access to all public methods

***/

// Base class 'type'
class type {
    // Public method exposed to the user
    // Internally it calls the private calculation method
    a(x, y) {
        this.#divide(x, y)
    }
    // Private method that performs the actual division
    #divide(x, y) {
        console.log(x / y)
    }
}
// Child class inheriting from 'type'

class multiply extends type {
    // Public method accessible to user
    b(x, y, z) {
        this.#multiplyLogic(x, y, z)
    }
    // Private method that performs internal calculation
    #multiplyLogic(x, y, z) {
        console.log(x + y * z)
    }

}
// Child class inheriting from 'multiply'
class Division extends multiply {
    // Public method exposed to user
    c(x, y, z, g) {
        this.#complexCalculation(x, y, z, g)
    }

    // Private method hiding internal logic
    #complexCalculation(x, y, z, g) {
        console.log(x * y + z - g)
    }

}

// Creating object of Division class
const ci = new Division()
// User only calls these simple methods
ci.a(1, 2);
ci.b(1, 3, 4);
ci.c(5, 6, 7, 8);
