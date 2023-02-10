// program to find the total of the price of all items
var items =[
    {'item': "Bag", "price": 100},
    {'item': "Shoes", "price": 200},
    {'item': "watch", "price": 300},
    {'item': "headphone", "price": 400},
    {'item': "charger", "price": 500},

]
sum =0
for (var i=0; i<items.length; i++){
    sum += items[i].price
}
console.log(sum)                //1500


// Implementation of reduce function

var total = items.reduce(function(sum, item){
    return sum + item.price
}, 0)
console.log(total)              //1500


var arrow_total = items.reduce(((sum, item)=>sum+item.price ), 0)

console.log(arrow_total)            //1500


let arr2 = [1,2,3,4]
console.log(arr2.reduce((item, sum) => item + sum))