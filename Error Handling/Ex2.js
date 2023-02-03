// Implementation of Promise
function func1 (x,y){
    return new Promise(function (resolve, reject){
        if (x==y){
            resolve()
        }
        reject()
    })
}

func1(2,3).then(function(){
    console.log("Congratulations, both passed values are equal to each other.") 
}).catch(function(){
    console.log("Oppps there is an error in the passed values.") 
})

// This will give result : Oppps there is an error in the passed values.


func1(2,2).then(function(){
    console.log("Congratulations, both passed values are equal to each other.") 
}).catch(function(){
    console.log("Oppps there is an error in the passed values.") 
})

// This will give result: Congratulations, both passed values are equal to each other.


//We can also pass message to the resolve() and reject() function.

const promise = new Promise(function(resolve, reject){
    const mark =50
    if (mark>40){
        resolve("Wow...")
    }
    reject("Opps")
})

promise.then(result =>console.log(result + " You have passed")).catch(result => console.log(result + " You failed."))
// Opps You failed.


const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hiiii Promise1")
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hello Promise2")
})

Promise.all([promise, promise1,promise2]).then(results =>{      //[ 'Wow...', 'Hiiii Promise1', 'Hello Promise2' ]
    console.log(results)
} )