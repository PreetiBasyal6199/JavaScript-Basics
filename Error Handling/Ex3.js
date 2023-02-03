// This code is executed in the console
const urls =[
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments"
]

Promise.all(urls.map(url =>{
    return fetch(url).then(resp => resp.json())
})).then(results =>{
    console.log(results[0]),
    console.log(results[0]),
    console.log(results[0])
})