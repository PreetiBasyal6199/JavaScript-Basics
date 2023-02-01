//Creating an object
// using Object Literal
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


// using Object Constructor

function people (first_name, last_name, address){
    this.address=address ;
    this.first_name=first_name
    this.last_name = last_name
}

let obj1= new people('ram', "khanal", "Ktm")

console.log(obj1.address)   // Ktm


// using Object.create() method

const animal ={
    is_hungry : false,
    detail(){
        return  `The animal is ${this.name}. Is the animal hungry: ${this.is_hungry}`
    }
}

const animal1 = Object.create(animal)   // creates an object animal1
animal1.name = "Cat"                    // assign property to the object
console.log(animal1.detail())         // The animal is Cat. Is the animal hungry: false