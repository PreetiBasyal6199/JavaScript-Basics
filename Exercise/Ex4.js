//Amazon Shopping Cart

const user ={
    name:"Aiden",
    active : true,
    cart : [],
    purchase : []
}

const item ={
    name : "Bag",
    price: 500
}
const compose =(f, g) => (...args) => f(g(...args))


function purchaseItem(...fns){
    return fns.reduce(compose)
}
console.log(purchaseItem(
    removeFromCart,
    addToPurchase,
    addTaxToItem,
    addToCart
)(user,item))
function addToCart(user, item){
    const updated_cart = user.cart.concat(item)
    return Object.assign({}, user, {cart:updated_cart})
}
function addTaxToItem (user){
    const {cart} = user
    const taxRate = 1.3
    const updatedCart = cart.map(obj =>{
        return{
        name : obj.name,
        price : obj.price*taxRate
        }
    }
        )
    return Object.assign({}, user, {cart: updatedCart})
}
function addToPurchase (user){
    return Object.assign({}, user,{purchase: user.cart})
}
function removeFromCart (user){
    return Object.assign({}, user,{cart: []})

}

/*
{ name: 'Aiden',
  active: true,
  cart: [],
  purchase: [ { name: 'Bag', price: 650 } ] }
  */
