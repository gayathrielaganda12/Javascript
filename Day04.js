//write a program to print 1 to 5 
//for is used to execute same statement given number of times 


//what is the use of funtion 
//Reusable peace of code or block of statements

function print1to5(){
    let numbers = ""
    for(let i = 1 ; i <= 5; i++ ){
          numbers = numbers + i + ' '
    }
    return numbers
}

let result = print1to5()
console.log(result)


//Print Even numbers  from the given number  to 30
//how to check wheather given number is even -- if(num % 2 ==0)

function printEvenNumbers(givennumber){
   if(givennumber<30){
    for(let i = givennumber ; i <= 30 ; i++){
        if(i % 2 == 0){
            console.log(i)
        }
    }
   }
   else{
    console.log("not valid number")
   }
}
printEvenNumbers(30)

//Write program to find the sum of given numbers
//after getting sumofgiven number ,i want sumofgivennumber+20
function sumOfgivennumbers(){
let sum = 0;
for(let i = 1 ; i <= 10 ; i++){
   sum = sum + i
}
return sum
}

console.log(sumOfgivennumbers())



function add20tosum(){
    let sum = sumOfgivennumbers()

    return sum+20
}

console.log(add20tosum())





