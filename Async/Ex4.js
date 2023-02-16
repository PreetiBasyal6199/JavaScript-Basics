const getTodo = async ()=>{
   let response = await fetch('https://jsonplaceholder.typicode.com/users')  // fetch for get request
    let resp = await response.json()
    return resp
}

const createTodo = async () =>{
    response = await fetch("https://jsonplaceholder.typicode.com/posts",{
    method: 'POST',
    headers:{
        'Content-type': 'application/json'
    },
    body:JSON.stringify({
        'userId': 1022,
        'id':102,
        'title': "Preetis Post",
        "body":"Hello"
    })
    }
    

    )
}

const mainFunc = async() =>{
    const func = await createTodo()
    console.log(func)
}

mainFunc()

