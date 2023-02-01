//Creating an object

let person ={
    'name': "Ram",
    'address': "Sunwal",
    get_detail(){
        return `The name of person is ${person.name}. And His address is ${person.address}`
    },
    //Defining objects within object
    phone:{
        'mobile': 98324555,
        'landline':76555

    }
}

console.log(person.get_detail())   //   The name of person is Ram. And His address is Sunwal

console.log(person.phone.landline)   //   76555