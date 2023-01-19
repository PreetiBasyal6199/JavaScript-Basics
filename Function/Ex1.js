//Function Declaration without parameters
function school_detail(){
    console.log("This is the result from function without parameters.")
}

//Function Calling Without parameters
school_detail()


//Function With Parameters
function take_param(person1,person2){
    console.log("This is the result from function with parameters where Person1 is " +person1 +" and Person2 is "+person2 +".")
}
//Function calling with parameters
take_param("Ram", "Sita")


//Returning result in function
function marry(boy, girl){
    console.log('argument',arguments) //==> returns argument object: [Arguments] { '0': 'Ram', '1': 'Sita' }
    console.log(Array.from(arguments)) //==>  [ 'Ram', 'Sita' ]
    return `${boy} is married to ${girl}.`
}

console.log(marry("Ram","Sita"))

//Function with undefined number of arguments
function my_choices(...args){ //We can use ```...args``` if we donot know the length of arguments to be passed
    for (i=0; i<(args.length); i++){
        console.log(`I like ${args[i]}.`)
    }
}

my_choices("apple","banana", "mango")