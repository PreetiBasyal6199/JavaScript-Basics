let person = {
    first_name : "Preeti",
    last_name : "Basyal",
    address: "Sunwal",
    age : 25
}

console.log(Object.entries(person))   // returns list of the keys and values 
/* 
   [ [ 'first_name', 'Preeti' ],
  [ 'last_name', 'Basyal' ],
  [ 'address', 'Sunwal' ],
  [ 'age', 25 ] ]
  */

console.log(Object.values(person))    // returns the list of the values ;  [ 'Preeti', 'Basyal', 'Sunwal', 25 ]


let name2 ="     Hello    "
console.log(name2.trimStart())          //returns "Hello   "
console.log(name2.trimEnd())               // returns "    Hello"


let person2 = [ 
    [ 'first_name', 'Preeti' ],
    [ 'last_name', 'Basyal' ],
    [ 'address', 'Sunwal' ],
    [ 'age', 25 ] 
 ]

 console.log(Object.fromEntries(person2))  //The fromEntries() method creates an object from iterable key / value pairs.
/* {first_name: 'Preeti', last_name: 'Basyal', address: 'Sunwal', age: 25} */

const myArray = [[12,15],[16,17],[18,19]]  //The flat() method creates a new array by flattening a nested array.
console.log(myArray.flat())                 //[12,15,16,17,18,19]
// console.log(myArray.flatMap(x => x+1))


const myArray1 = [1,2,3,4,5]                //The flatMap() method first maps all elements of an Array and then creates a new array by flattening the array.
console.log(myArray1.flatMap((x)=> x*2))    //[2,4,6,8,10]


let newstr = "Hello I am there always"
iterator = newstr.matchAll("there")
console.log(Array.from(iterator))    //array
