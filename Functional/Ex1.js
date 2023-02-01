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



