// Compose and Pipe

const compose = (f,g) => (data) => f(g(data))

const pipe = (f,g) =>(data) => f(f(data))

const multiplyby5 = (num) => num*5 ;
const makeAbsolute =(num) => Math.abs(num)

const multiplyby5AndmakeAbsoulute = compose(multiplyby5, makeAbsolute)

console.log(multiplyby5AndmakeAbsoulute(-20))           //100