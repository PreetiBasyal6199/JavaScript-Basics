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
