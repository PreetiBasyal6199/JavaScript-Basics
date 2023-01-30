function authenticate(user, level){
    return `Access Granted to ${user} for ${level} `
}

function test_permission(value){
    let array =[];
    for (i=0; i<value; i++){
        array.push(i)
    }
}

function PersonLogin(person, fn){
    if (person.level ==="admin"){
        fn(50000);
    }
    else if (person.level==="normal"){
        fn(10000) ;
    }
    return authenticate(person.name, person.level)
}

let person1={
    'name': "Ram",
    "level": "Admin"
}

console.log(PersonLogin(person1, test_permission() ))