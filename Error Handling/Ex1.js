// Synchronous code Error handling
try{
    a=4
    c=a/b ;
    console.log("The result is ", c)
}
catch(error){
    console.log("Oops, there is an error")      //Catch block is executed if any error occurs
}

finally{
    console.log("Hey you got the solution")       // This block of code is always executed
}   

// Example 2

try{
    let age = prompt("enter the age") ;
    if (age >100){
        throw new Error("Invalid Age")          // throwing error
    }
    console.log("My age is", +age)

}
catch(error){
    console.log(error)
}

