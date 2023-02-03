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

// Asynchronous code Error handling

