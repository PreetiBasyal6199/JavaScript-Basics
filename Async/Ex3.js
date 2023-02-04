const promisify = (item, delay) =>
    new Promise((resolve) =>
    setTimeout(() =>
    resolve(item), delay))

const a = () => promisify("a",100)
const b = () => promisify("b",5000) 
const c = () => promisify("c",7000) 

async function parallel (){
    const promises = [a(), b(), c()]
    const [output1, output2, output3] = await Promise.all(promises)
    return `Parallel Output: ${output1} ${output2} ${output3}`
}


async function race (){
    const promises = [a(), b(), c()]
    const output = await Promise.race(promises)
    return `Race Output: ${output}`
}

async function sequence (){
    const output1 = await a()
    const output2 = await b()
    const output3 = await c()
    return `Sequence Output: ${output1} ${output2} ${output3}`
}

console.log(sequence().then(console.log))
console.log(parallel().then(console.log))
console.log(race().then(console.log))

/* 
    Race Output: a
    Parallel Output: a b c
    Sequence Output: a b c
*/
