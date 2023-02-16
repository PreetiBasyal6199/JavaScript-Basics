//The Nullish Coalescing Operator (??)  ;
// The ?? operator returns the first argument if it is not nullish (null or undefined).
let name1 = null ;
let text = "Here" ;
console.log(name1??text )       // Here

const car={type:"Fiat", model:"500", color:"white"};
console.log(car.name ?? car.model)          //500

// The &&= Operator
let x=20 ;
x &&=10;
console.log(x)          //10

let y=10 ;
y ||= 5;
console.log(x)              //5


let word ="Hello there are so many dogs"
console.log(word.replaceAll("dogs", "cats"))        //   "Hello there are so many cats"


//JavaScript Numeric Separator (_)   ; just to make the number more readable
const num1= 1_00_000
const num2 = 100000

console.log(num1===num2)            //true