// Implementation of classes

class Person {
    constructor(name, aim){
        this.name = name
        this.aim = aim
    }

    get_detail(){
        return `The aim of ${this.name} is ${this.aim}`
    }

}

const person1 = new Person("Andrew", "Computer Engineer")
console.log(person1.name)     // Andrew
console.log(person1.get_detail())    //  The aim of Andrew is Computer Engineer


//Encapsulation: The process of wrapping properties and functions within a single unit is known as encapsulation. 

class Vehicle {
    constructor(name){
        this.name = name
    }

    get_model(model){
        this.model = model
    }

    get_vehicle_detail(){
        return `The ${this.name} model is ${this.model}`
    }
}

const vehicle1 = new Vehicle("Car")
vehicle1.get_model("Model1")       
console.log(vehicle1.get_vehicle_detail())      //  The Car model is Model1