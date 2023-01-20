function loop1(){
    for (var i=0; i<5; i++){
        console.log(i)
    }
    console.log('final', i)
}

loop1()

// The result is 0
// 1
// 2
// 3
// 4
// final 5

//We cannot use the variableoutside the function if let keyword is used
function loop2(){
    for (let i=0; i<5; i++){
        console.log(i)
    }
    console.log('final', i)
}

loop2() // This will result an error;  ReferenceError: i is not defined

//Here in loop2 function we can not use const keyword as we are incrementing the value of i after each iteration.