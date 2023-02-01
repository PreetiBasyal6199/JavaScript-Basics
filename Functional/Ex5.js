// Pure Functions with no side effects

var array1=[1,2,3]

let array2 =function mutuateArray(array1){    // Those functions donot have side effects over the global variable
    let new_array = [].concat(array1)
    new_array.pop()
    return new_array
}

let array3 = function addData(array, value){
    let new_array = [].concat(array1)
    new_array.push(value)
    return new_array
}

console.log(array1)     //[1,2,3]
console.log(array2(array1))     //[1,2]
console.log(array3(array1, 4))     //[]
