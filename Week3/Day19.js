//Loops 
for(var i=1; i<=10; i++){
    console.log(i,"Bhairab");
}

//Even numbers using while loop
var i=2;
while(i<=10){
    console.log(i);
    i+=2;
}

//Odd numbers using do while loop
var i = 1;
do{
    console.log(i);
    i+=2;
}while(i<=10);

//Array 
var names = ["Bhairab", "Aakash", "Anubhav", "Sita", "Sarada"];

for(var i = 0; i<names.length; i++){
    console.log(names[i])
}


//for in can be used for both array and object
// for(let index in names){
//     console.log(names[index]);
// }

//for of for array
// for(let name of names){
//     console.log(name)
// }

//Object
var person = {
    name: "Bhairab Nath",
    isStudent: true,
    address: "Kathmandu", 
    id: 1010
}

for(var key in person){
    console.log(key,":",person[key]);
}


