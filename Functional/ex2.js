// Get the array of names only
var persons =[
    {'name': "Ram", "level":"Student"},
    {'name': "Shyam", "level":"Teacher"},
    {'name': "Gita", "level":"Student"},
    {'name': "Hari", "level":"Student"},
    {'name': "Nilam", "level":"Teacher"},
    {'name': "Mina", "level":"Teacher"},
]

var only_persons_name =[]

for (var i=0; i<persons.length; i++){
    only_persons_name.push(persons[i].name)
}
console.log(only_persons_name)          // [ 'Ram', 'Shyam', 'Gita', 'Hari', 'Nilam', 'Mina' ]


// Implementing Map to get the abouve result

var names = persons.map(function(person){
    return person.name
})
console.log(names)

var person_details = persons.map(function(person){
    return person.name + " is a " + person.level
})

console.log(person_details) 
/*[
    'Ram is a Student',
    'Shyam is a Teacher',
    'Gita is a Student',
    'Hari is a Student',
    'Nilam is a Teacher',
    'Mina is a Teacher'
  ] */


