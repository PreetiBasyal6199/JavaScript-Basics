const wizard={
    name : "Harry",
    health: 30,
    heal(){
        return this.health=100
    }
}

console.log(wizard.heal()) //Returns 100


const archer ={
    name: "Richard",
    health : 20
}
console.log(archer.health) // Returns 20
console.log(wizard.heal.call(archer))  // Returns 100
// Here we can call the heal function of object wizard for the object archer
