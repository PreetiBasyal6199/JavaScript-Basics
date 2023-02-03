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

var promise = new Promise(function(resolve, reject){
    const mark =40
    if (mark>40){
        resolve("Wow...")
    }
    reject("Opps")
})

promise.then(result =>console.log(result + " You have passed")).catch(result => console.log(result + " You failed."))
// Opps You failed.
