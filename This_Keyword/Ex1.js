//'this' keyword is the object that the function is property of


//1. gives method access to their objects
const obj ={
    name : "Billi",
    sing: function(){
        return "Lalala "+ this.name  //here this refers to obj ; this keywordis similar to self keyword in python
    },
    sing_again(){
        return this.sing() + '!' // we can use the sing()function here
    }
}

console.log(obj.sing())
console.log(obj.sing_again())
console.log(`The keys of the object are` ,Object.keys(obj))    // The keys of the object are [ 'name', 'sing', 'sing_again' ]
console.log(`The values of the object are` ,Object.values(obj))    // The values of the object are [ 'Billi', [Function: sing], [Function: sing_again] ]
console.log(Object.entries(obj))         //[[ 'name', 'Billi' ],[ 'sing', [Function: sing] ],[ 'sing_again', [Function: sing_again] ]]
console.log(obj.hasOwnProperty('name'))     // true   i.e the key 'name' exists in the object.
console.log(obj.hasOwnProperty('address'))     // false  i.e. the key  address does not exists in the object.


//2. Executes same code for different objects
function importantPerson(){
    return this.name
}
const name ='Harry' ;
const obj1 ={
    name: 'Joseph',
    important_person :importantPerson
}
const obj2 ={
    name: 'Mith',
    important_person :importantPerson
}
console.log(importantPerson())  // This should have return Harry but not giving result undefined
console.log(`I am `, obj2.important_person()) //  I am  Mith
console.log(`I am ` ,obj1.important_person()) //   I am  Joseph
