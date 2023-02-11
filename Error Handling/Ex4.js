//Promise APIs

p1 = new Promise((resolve, reject) =>{
    setTimeout(resolve("Value1"), 1000)
})

p2 = new Promise((resolve, reject) =>{
    setTimeout(resolve("Value2"), 2000)
})

p3 = new Promise((resolve, reject) =>{
    setTimeout(resolve("Value3"), 3000)
})

p4 = new Promise((resolve, reject) => {
    setTimeout(reject("Reject1"), 9000)
})

all_promise = Promise.all([p1,p2,p3])               // when all promise are fulfilled
all_promise.then(value => console.log(value))           // [ 'Value1', 'Value2', 'Value3' ]

// all_promise = Promise.allSettled([p1,p2,p4])
// all_promise.then(value => console.log(value))           
/* 
    0
[
{status: 'fulfilled', value: 'Value1'},
 
{status: 'fulfilled', value: 'Value2'},

{status: 'rejected', reason: 'Reject1'}

]
*/


all_promise.then(value => console.log(value[0]))   //   {status: 'fulfilled', value: 'Value1'}  ; when any one promise is rejected

race_winner = Promise.race([p2,p4,p2])
race_winner.then(value =>{
    console.log(value)          //value2
})

Promise.any([p4,p1,p2]).then(value => console.log(value))   // Uncaughe Promise Error

Promise.race([p4,p1,p2]).then(value => console.log(value))   //value1