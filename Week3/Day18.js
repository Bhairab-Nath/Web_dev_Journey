// var names = ['Ram', 'Sita', 'Gita', 14]
// var doesExist = names.includes('Ram')
// console.log(doesExist)

// var num1=10
// var num2=15
// var sum = num1 + num2
// console.log("Sum is:",sum)
// console.log(2**3)

//conditional Statements
// Example 1
var age = 12
if(age >= 18){
    console.log("You can vote.")
}
else{
    console.log("You cannot vote")
}

// Example 2
var isStudent = true
if (isStudent){
    console.log("You can give exam.")
}
else{
    console.log("You cannot give exam.")
}

// Example 3
//== equal too
//=== equal value and type

var moneyUserHave = 1000
var addedMoney = "250"
if(addedMoney === 250){
    moneyUserHave += addedMoney
}
console.log("Balance =",moneyUserHave)

// var name1 = "Bhairab"
// if (name1 ==  "Bhairab"){
//     console.log("Hello, Bhairab!")
//     return
// }
// console.log("Not found!")


//Q.1 Program to check whether a number is positive, negative or zero.

var num = -4
if(num > 0){
    console.log("Positive number.")
}
else if(num < 0){
    console.log("Negative number.")    
}
else{
        console.log("Zero.")
}


//Q.2 Program to find greatest among three numbers

var num1 = 10
var num2 = 21
var num3 = 15

if(num1>num2 && num1>num3){
    console.log(num1 + " is greatest")
}
else if(num2>num1 && num2>num3){
    console.log(num2 + " is greatest")
}
else{
    console.log(num3 + " is greatest")
}

//Q.3 program to check whether a num is even or odd
var num = 3
if(num%2==0){
    console.log(num,"is even number")
}
else{
    console.log(num,"is odd number")
}


