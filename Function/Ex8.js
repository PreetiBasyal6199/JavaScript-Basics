// Using Prototype

function Student(){
    this.name = "John"
    this.aim = "doctor"
}
// initiating new object
var student1 = new Student()
student1.age =20             // assigning new property to student1 instance
console.log(student1.age)       //20

//initiating new object
var student2 = new Student()
console.log(student2.age)           //undefined  ; as the age property is assigned to only student1 instance


Student.prototype.age = 70            // assigning property

var student3 = new Student()
console.log(student3.age)               //70

var student4 = new Student()
console.log(student4.age)               //70; because of property assignment at line 15


