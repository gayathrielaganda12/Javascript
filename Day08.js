//Array methods 
let arr  = [10,3,4,6]

arr.push(2)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(8);
console.log(arr)

arr.shift();
console.log(arr)

//Accessing Elements
let arr2 = [1,2,3,4,5,67]

console.log(arr2.indexOf(89))
console.log(arr2.lastIndexOf(89))


//Slicing and Splicing 
console.log(arr2.slice(0,8))


//Splice
arr2.splice(1,0,10,30,90,89)
console.log(arr2)


//Iterating

let names = ["python",'java',"html","css"]

names.forEach((each)=>{
    console.log(each)
})


let squares = arr.map((element)=>element * element)
console.log(squares)


//reduce 
let array = [1,2,3,4,5]
let sum = array.reduce((a,b)=> a+b)
console.log(sum)

let numbers = [10,20,30,40,9,7,3]
numbers.filter((element)=>{element%2 == 0 })
let result = numbers.map((each)=>{return each * 3})
console.log(result)

let nums = [1,9,8,4,9,6,98,12]
let weeks = ["Mon","Tues","Wed","Thurs"]
console.log(weeks.sort())
let sorted = (nums.sort());
console.log(nums.sort())
console.log(sorted)


//Do while Loop

//Syntax

//do 
//statement
//condition
// let i =0
// do{
    
//     console.log(i)
// }while(i<0)

// let usergivenval = prompt("Enter number")

78
let count = 0
do{
      var usergivenval =prompt("Guess the number ")
      count++

}while(usergivenval != 10)

console.log("your atttempts "+count)





















