// Higher Order Function

function letRamLogin(){
    let array=[]
    for (i=0; i<1000000; i++){
        array.push(i)
    }
    return "Grant login Permission to Ram"
}

console.log(letRamLogin())

function letHariLogin(){
    let array=[]
    for (i=0; i<1000000; i++){
        array.push(i)
    }
    return "Grant login Permission to Hari"
}

console.log(letHariLogin())

/* Those two function are for granting login access to two users. But what if there are other users too.
    We can not repeat the same code for every users. The solution for this problem is:
*/

// function letUserLogin(user){
//     let array=[]
//     for(i=0;i<10000;i++){
//         array.push(i)
//     }
//     return (`Grant Login Permission to ${user}`)
// }
// console.log(letUserLogin("Ram"))        // Grant Login Permission to Ram
// console.log(letUserLogin("Hari"))       // Grant Login Permission to Hari

// It also can be minimized as:

const giveAccessTo = (user)=>{
    `Grant Login Permission to ${user}`
}
function letUserLogin(user){
    let array=[]
    for(i=0;i<10000;i++){
        array.push(i)
    }
    return console.log(giveAccessTo(user)) ;
}
console.log(letUserLogin("Ram"))        // Grant Login Permission to Ram
console.log(letUserLogin("Hari"))       // Grant Login Permission to Hari



