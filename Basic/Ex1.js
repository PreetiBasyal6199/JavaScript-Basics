// Array

array1 =[1,2,3,4,5]


//for statement
for (let i of array1){
    console.log(i)          //1,2,3,4,5
}

//foreach

array1.forEach(element => {
    console.log(element)        //1,2,3,4,5
});

//for in statement

for (let item in array1){
    console.log(item)           // 0,1,2,3,4   
}


//Array.from

let name1 = "Harry"
let arr = Array.from(name1)
console.log(arr)                // [ 'H', 'a', 'r', 'r', 'y' ]   ; returns array