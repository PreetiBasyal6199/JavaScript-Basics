//Function Currying

function multiply(a, b){
    return a*b
}

let MultiplyByTwo = multiply.bind(this, 2)  // Here 2 is the first argument for creating the function
console.log(MultiplyByTwo(3))    // returns 6 ;Here we pass the second arguments

let MultiplyBySix = multiply.bind(this, 6)
console.log(MultiplyBySix(5))   // returns 30