//while loops 

//syntax while loop

//initialization
// while(condition){
//   statement
//   increment or decrement or division
// }

//program to print 1 to 5 using while loop
let  i = 1
while(i <= 5){
    console.log(i)
    i++
}
//write a program to find the sumofdigits in given number -- 808 --

function sumofdigits(num){
    let sum = 0; 
    while(num > 0 ){
        sum = sum + (num % 10)      
        num = Math.floor(num / 10)  
        
    }

    return sum
}

let sumOfdigitsresults = sumofdigits(818)
console.log(sumOfdigitsresults)

function reversedNumber(num){
    let reversednum = 0
    while(num > 0){
        reversedNumber = (reversedNumber * 10) + (num % 10)
        num = num / 10
    }
    return reversedNumber

}

console.log(reversedNumber(3456))


//write a program to find the number of digits in a given number 
//Input -- 1578
//output -- 4

//Input --089
//output --2

//Input -- 9809
//output -- 4


//write a program to find the fibinacci series 
// Input -- 9
















