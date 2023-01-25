// Functions are first class citizen in js

// Function Constructor
const four = new Function ('return 4')  
console.log(four())    //4


// Properties of function in java script

//1. We can assign function to a variable or object property which then becomes a method

var stuff = function(){}

//2. We can pass function as an argument to another function

function a(fn){
    return fn()
}

a(function(){console.log("Hello There")})    //return Hello There


//3. A function can return value as a function

function one(){
    return function two(){
        console.log("Hello Two")
    }
}
console.log(one()) // Returns [Function: two]
console.log(one()()) // Returns Hello Two

// new_funct1= one.bind()  // Returns Hello Two
// new_funct2= new_funct1.bind()  // Returns Hello Two

// console.log(new_funct2()())
