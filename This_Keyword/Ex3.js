const wizard={
    name : "Harry",
    health: 30,
    heal(num1, num2){    //passing parameters with function
        return this.health += num1 +num2 ;
    }
}

console.log(wizard.heal(20,50)) //Returns 100


const archer ={
    name: "Richard",
    health : 20
}
console.log(archer.health) // Returns 20
console.log(wizard.heal.call(archer,20,50))  // Returns 90
// Here we can call the heal function of object wizard for the object archer . We can also pass parameters here
console.log(wizard.heal.apply(archer, [20,30])) // returns 90+20+30 since 90 is the current value of this.health
// The difference between call and apply is that call takes seperate arguments whereas apply takes the list of arguments