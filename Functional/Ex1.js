// Filtering Person whose level is Teacher

var persons =[
    {'name': "Ram", "level":"Student"},
    {'name': "Shyam", "level":"Teacher"},
    {'name': "Gita", "level":"Student"},
    {'name': "Hari", "level":"Student"},
    {'name': "Nilam", "level":"Teacher"},
    {'name': "Mina", "level":"Teacher"},
]
var new_list = []

for (var count=0; count<persons.length; count++){
    if (persons[count].level==="Teacher"){
        new_list.push(persons[count])
    }
}
console.log(new_list)   

// Implementing the above code by using Filter

var teachers = persons.filter(function(person){
    return person.level==="Teacher"
})
console.log(teachers)

// similarly for students

var students = persons.filter(function(person){
    return person.level==="Student"
})
console.log(students)


// Implementing higher order function with filter

var is_teacher = function(person){
    return person.level==="Teacher"
}

var new_teachers =persons.filter(is_teacher)

console.log(new_teachers)

// var except_teachers = persons.reject(is_teacher)