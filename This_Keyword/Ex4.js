//With the bind() method, an object can borrow a method from another object.

const wizard ={
    name : "Robin",
    health : 100,
    heal (num1, num2){
        return this.health += num1+num2
    }
}

const arber ={
    name :"Hood",
    health : 30
}
 
console.log(wizard.heal(10,10))  // returns 120

const next_func =wizard.heal.bind(arber, 20,20)
console.log(next_func())


// the person object has a display method. In the display method, this refers to the person object:
// When a function is used as a callback, this is lost.
const person = {
    firstName:"John",
    lastName: "Doe",
    display() {
      console.log(`Hello`,this.firstName +" " + this.lastName)
  }
}

setTimeout(person.display, 3000);    // returns Hello undefined undefined
// The alternative solution for this problem is the use of bind method
let display = person.display.bind(person);
setTimeout(display, 3000)     // returns Hello John Doe