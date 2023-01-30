const multiplyBy = function (num1){
    return function(num2){
        return num1*num2
    }
}

const multiplyByTwo = multiplyBy(2)
console.log(multiplyByTwo(2))         //4
console.log(multiplyByTwo(6))          // 12


const multiplyByThree = multiplyBy(3)
console.log(multiplyByThree(3))           //9


/* Replacing the above function with arrow function  */

const ArrowmultiplyBy = (num1) =>(num2) => num1*num2
console.log(ArrowmultiplyBy(2)(2))              // 4
console.log(ArrowmultiplyBy(3)(8))              //24