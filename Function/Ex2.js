//Local and Global Variables 


function three(){
    console.log(`The value of isValid in function three: ${isValid}`) // It is using the global variable
    // The value of isValid in function three: false
}

function two(){
    var isValid ; //local variable for function two
    console.log(`The value of isValid in function two: ${isValid}`)
    //The value of isValid in function two: undefined
}

function one(){
    var isValid = true; // local variable for function one
    console.log(`The value of isValid in function one: ${isValid}`)
    // The value of isValid in function one: true
    two()
}

var isValid = false ;  //global variable
one()
console.log(`The value of isValid outside the function is: ${isValid}`)
three()
//The value of isValid outside the function is: false


// Defining the scope of variables(Lexical Scope)
function sayMyName(){
    var a = 'a' ;
    return  function findMyName(){
        console.log(`The value of a is ${a}`) // 'a'
        console.log(`The value of c is ${c}`) //This will give an error; c is not defined
        var b ='b' ;
        return function printMyName(){
            console.log(`The value of a is ${a}`) //'a'
            var c = 'c';
            return "Andrew Meth"
        }
    }
}

console.log(sayMyName()()())

