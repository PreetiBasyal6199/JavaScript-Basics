// Object Spread Operator

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

