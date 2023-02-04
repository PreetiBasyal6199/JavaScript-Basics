// Object Spread Operator
//Example1
let arr1 = [1,2,3]
let [a,b,c] = arr1
console.log(a)  //1
console.log(c)  //3

///Example 2

let others
[a, b, ...others] = [10, 20, 30, 40, 50];

console.log(others);    // [30,40,50]

//Example 3

const animals ={
    tiger: 20,
    lion : 10,
    bird :40,
    monkey :2
}

const {tiger, lion, ...rest} = animals ;

console.log(tiger)          //20
console.log(lion)           //10
console.log(rest)           //{bird:40, monkey:2}

const getAnimals = function(p1,p2,p3){
    console.log(p1)             //20
    console.log(p2)             //10
    console.log(p3)             //{bird:40, monkey:2}

}
getAnimals(tiger, lion, rest)

// Example 4

const array1= [1,2,3,4,5]

function addResult(a,b,c,d,e){
    return a+b+c+d+e        
}

console.log(addResult(...array1))           // 15 ; It is same as addResult(1,2,3,4,5)
