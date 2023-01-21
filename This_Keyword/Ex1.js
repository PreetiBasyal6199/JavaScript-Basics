//'this' keyword is the object that the function is property of

const obj ={
    name : "Billi",
    sing: function(){
        return "Lalala "+ this.name  //here this refers to obj ; this keywordis similar to self keyword in python
    }
}

console.log(obj.sing())