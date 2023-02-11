const createTodo = async ()=>{
   let response = await fetch('https://jsonplaceholder.typicode.com/users')  // fetch for get request
    let resp = await response.json()
    return resp
}

const mainFunc = async() =>{
    const func = await createTodo()
    console.log(func)
}

mainFunc()