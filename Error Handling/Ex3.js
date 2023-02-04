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

// The same function can be implemented using async await

const getData = async function (){
    const [users, posts, comments] = await Promise.all(urls.map(url =>{
        return fetch(url).then(resp => resp.json())
    }))
    console.log("Users", users)
    console.log("Posts", posts)
    console.log("Comments", comments)

    
}

    

