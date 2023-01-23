// Pass by Value and Pass by Reference

// In Case of primitive data types ; here thevalue is passed i.e pass by value

var a = 5;
var b = a;
b++ ;
console.log(a)            // 5
console.log(b)             //6


// In Case of non-primitive data types i.e objects ; here the reference to the object is passed

let obj1 ={
    user: "user1",
    password: "password1"
}

let obj2 = obj1 ;

obj2.password = "password2"

console.log(obj1.password)     // password2
console.log(obj2.password)     // password2


// The solution for the above problem


let obj3 ={
    user: "user3",
    password: "password3"
}

let obj4 = Object.assign({}, obj3)

let obj5 = {...obj3}     //spread operator

obj4.password ="password4"
obj5.password = "password5"
console.log(obj3.password)     // password3
console.log(obj4.password)     // password4
console.log(obj5.password)     // password4




// Another Example of passby reference

var c =[1,2,3,4,5]
var d = c
d.push(123456)
console.log(c)                  // [1,2,3,4,5,123456]
console.log(d)                  // [1,2,3,4,5,123456]

//Solution for the above problem

var c =[1,2,3,4,5]
var d = [].concat(c)
d.push(123456)
console.log(c)                  // [1,2,3,4,5]
console.log(d)                  // [1,2,3,4,5,123456]

