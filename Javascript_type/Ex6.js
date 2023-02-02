// Post Increment operators
let count = 0;
console.log(count++)        //0
console.log(count)          //1


// Pre Increment Operator
let count1=0;
console.log(++count1)       //1
console.log(count)          //1


// Post Decrement operators
let count2 = 10;
console.log(count2--)        //10
console.log(count2)          //9


// Pre Decrement Operator
let count3=10;
console.log(--count3)       //9
console.log(count3)          //9

// Conditional operator

let number1 = 5 ;
number1 > 0 
? console.log(`The number is positive number.`)
: console.log("THe number is negative number.")
// The number is positive number.


let number2 = -9 ;
number2 > 0                                         // write the condition here
? console.log(`The number is positive number.`)      // returns this result if condition is true
: console.log("THe number is negative number.")       // returns this result if condition is false
// THe number is negative number.


console.log(parseInt('9.8') ==10)           // false


//Switch case

let input_number = 5 ;

switch(true){
    case input_number>0 :
        console.log("Switch The number is positive") ;
        break;
    case input_number<0:
        console.log(" Switch The number is negative")  ;
        break;
    case input_number==0:
        console.log("Switch The number is Zero.")  ;
        break;
    default:
        console.log("Switch The input number is not number")  ;

}

