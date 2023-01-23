// Example 1

let obj1 ={
    a: 'a',
    b: 'b',
    c: {
        deep: "Hello There"
    }
}

let obj2 = {...obj1}  ;
obj2.b = 2;
console.log(obj1)        //{ a: 'a', b: 'b', c: {deep: "Hello There"}}
console.log(obj2)        //  { a: 'a', b: 2, c: {deep: "Hello There"}}


// Example 2

let obj3 ={
    a: 'a',
    b: 'b',
    c: {
        deep: "Hello There"
    }
}

let obj4 = {...obj3}  ;                           // Shallow copy in js
let obj5 = JSON.parse(JSON.stringify(obj3))      // Here we are performing deep copy
obj4.c.deep = "Hello Object 3";
console.log(obj3)        //{ a: 'a', b: 'b', c: {deep: "Hello Object 3"}}
console.log(obj4)        //  { a: 'a', b: 'b', c: {deep: "Hello Object 3"}}
console.log(obj5)        //  { a: 'a', b: 'b', c: {deep: "Hello There"}}   
