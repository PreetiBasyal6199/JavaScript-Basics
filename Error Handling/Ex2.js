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
