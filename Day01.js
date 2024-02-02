//variables ,Data types ,functional declaration ,function calling .

// Conditional Statements

function greeting(name1,name2){
    let wish = 'hello '+name2 +" " +name1

    return wish;
}
console.log(greeting("sai","mahesh"))
console.log(greeting("pavan","rajesh"))

//Conditional Statements
//Based upon the condition ,we want to execute the statement
//If Condition is true then only it will execute the statement

// Syntax
// if(condition){
//     console.log("Good Morning ")

// }else{
//     console.log("Good evening")
// }

//two conditions


// if(condition1){
//     console.log("condition1 is true")
// }else if(condition2){
//     console.log("condition2 is true")
// }else{
//     console.log("Else is executed")
// }

//Write a program to find the given number is positive or not 

function isPositive(num){

if(num>0){
    return "Positive number"
}else if(num<0){
    return "Negative number"
}else if(num == 0){
    return "it is zero"
}else{
    return "Not a number"

    ``

}

console.log(isPositive(10))
console.log(isPositive(3))
console.log(isPositive(-3))
console.log(isPositive(0))
console.log(isPositive("sdjkfgysd"))





