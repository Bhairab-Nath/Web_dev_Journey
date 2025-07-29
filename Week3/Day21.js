numbers = [1,2,3,4,5,6,7,8,9,10]
const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
    
},0)

// console.log("Sum is " + sum)


//Total price of cart items and total items added
const cartItems = [
    {
        product: "Rice",
        productPrice: 350,
        qty: 4,
        haha: "hehe"
    },
    {
        product: "Momo",
        productPrice: 200,
        qty: 5,
        haha: "hehe"      
    },
    {
        product: "Noodle's",
        productPrice: 100,
        qty: 2 ,
        haha: "hehe"  
    }
]

const totalPrice = cartItems.reduce((accumulator,currentPrice)=>{
    return accumulator + currentPrice.productPrice
},0)

console.log("Total price: " + totalPrice)

const totalItems = cartItems.reduce((accumulator,currentQuantity)=>{
    return accumulator + currentQuantity.qty
},0)

console.log("Total items: " + totalItems)


const newCartItems = cartItems.map((item)=>{
    return {
        product: item.product,
        productPrice: item.productPrice,
        qty: item.qty
    }
})

console.log(newCartItems)

const output = newCartItems.filter((item)=>{
    return item.product === "Momo"
})

console.log(output)

//Object destructuring ES6
const {firstName, id}= {
    firstName: "Nishant",
    id:1001
}
console.log(firstName)
console.log(id)

//Array Destructuring
const [names] = ["Bhairab"]
console.log(names)

//Copy of array
const numbers2 = [1,2,3,4]
const numberCopy = [...numbers2]
console.log(numberCopy)