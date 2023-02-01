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