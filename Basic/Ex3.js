//The Nullish Coalescing Operator (??)  ;
// The ?? operator returns the first argument if it is not nullish (null or undefined).
let name1 = null ;
let text = "Here" ;
console.log(name1??text )       // Here

const car={type:"Fiat", model:"500", color:"white"};
console.log(car.name ?? car.model)          //500