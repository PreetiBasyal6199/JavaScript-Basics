/*A callback function is a function passed into another function as an argument,
 which is then invoked inside the outer function to complete some kind of routine or action. */


 function displayResult(result){
    console.log(`Hey The result is  ${result} .`)
 }

 function addNumber(n1, n2, callback){
    let result = n1 + n2
    callback(result)
 }

 addNumber(5,4,displayResult)