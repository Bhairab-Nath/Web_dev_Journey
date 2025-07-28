//Regular function
//name is a parameter
function sayHello(name){
    console.log(`Hello ${name}`)
}

// sayHello("Bhairab") // "Bhairab" is an argument

//Arrow function

const sendMessage = ()=>{
    console.log("Offer! Offer! Offer!")
}

// sendMessage()

const namasteMessage = (name)=>{
    console.log(`Namaste, ${name}!`)
}

// namasteMessage("Sirjan")

const findSum = (a,b)=>{
    let sum = a + b
    console.log(`Sum is ${sum} `)
}

// findSum(2,3)

// forEach , map, filter
let names = ['Ram', 'Avinav', 'Rahul']

names.forEach((name)=>{
    console.log(name)
})

let numbers = [1,2,3,4,5,6,7,8,9,10]
const squares = numbers.map((number)=>{
    return number**2
})

console.log(squares)

const evenNumber = numbers.filter((number)=>{
    return number % 2 == 0
})

console.log(evenNumber)
