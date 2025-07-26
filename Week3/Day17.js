var name1 = "Bhairab"
var name2 = "Srijan"
var name3 = "Sarada"
const university = "Kathmandu"
let num1 = 20
// console.log(num1)

//Array
var names = ["Bhairab","Srijan","Sarada"]  
// console.log(names)
// console.log(names.length)
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// names[0]= "Keshav"
// console.log(names)
// names.push("Keshav") // appends at last
// console.log(names)
// names.pop() // deletes last element
// console.log(names)
// names.shift() // deletes first element
// console.log(names)
// names.unshift("Saroj") // add at starting
// console.log(names)

// Objects
var person1 = {
    name: "Srijan",
    age: 19,
    address: "Kathmandu"

}

console.log(person1)
// console.log(person1.name) //console.log(person1["name"])
// console.log(person1.age)
// console.log(person1.address)
person1.name = "Saroj"
console.log(person1)
delete person1.address
console.log(person1)
person1.salary = 90000
console.log(person1)
