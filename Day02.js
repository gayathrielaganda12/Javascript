//Conditional Statements  10 questions--  based on the condition executes the statement
//Looping Statements -- repeatedly if u want to execute the statement
//For loop ,while loop ,do while loop
//1.For Loop
//syntax is 
// for(initialization,condition,incre/decre){
//     //statements
// }

//let is having block scope 
//cannot redeclare the block scope variable
//var can be redeclare


//const 
//scope is block
//cannot be redeclared
//cannot be reassigned

//let 
//scope is block
//cannot be redeclare
//can reasign


// var a = 30;
// var  a =34;


//const

// const  pi =3.14;
// pi =78754;

// const a = 30;
// a=78





for(let i = 1 ;i <= 5;i++){
    console.log(i)
    
}




// for(let j =0;j<=5;j++){
//     console.log(j)
// }


//write a program to print table 
//Input is 2
//Output   2 * 1 = 2
//         2 * 2 = 4
//         2 * 3 = 6
//         .
//         .
//         2 * 10 =20


//functions declaration

function table(num){
    for(let i = 1; i <= 10; i++){
        // console.log((num +" * "+ i +" = "+(num * i)) )
        console.log(`${num} * ${i} = ${num * i}`)

    }
}

(table(2))

//write a program to find the sum of elements in an array

//Input is [1,2,3,4,5]
//Output  15

//procedure

// let sum = 15
// let array = [1,2,3,4,5,8]
//  sum = sum +array[0]

//  sum  = sum +array[1]

//  sum = sum + array[2]

//  sum = sum + array[3]

//  sum = sum +array[4]

// let sum =0;
// let array = [1,2,3,4,5,8,9]
//  for(let i =0 ; i<array.length; i++){
//       sum = sum + array[i]
     
//  }

//  console.log(sum)

function sumOfElement(array){
    let sum =0
    for(let i = 0 ; i < array.length ; i++){
        sum = sum+array[i]
        
    }

    return sum

}
 

let array = [1,2,3,4,5]
console.log(sumOfElement(array))

 
















