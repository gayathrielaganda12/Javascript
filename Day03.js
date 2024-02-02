//javascript 
//variables ,declaration,initialization
//data types
//functions
//parametarized functions
//conditional Statements  -- 5, 8, 9,10,
//Looping Statement -- for

//to find the given triangle is  
//function declaration
function findTriangleType(side1, side2, side3) {
    if (side1 == side2 && side1 == side3) {
        return "Equalateral Triangle"
    } else if (side1 == side2 || side1 == side3 || side2 == side3) {
        return "Isosceles Triangle"
    } else {
        return "Scalene Trianle"
    }


}

//function call
let resultofTriangletype = findTriangleType(2, 2, 2)
console.log(resultofTriangletype)



//Lear year 

// 2012 % 4 == Leap year  
//and if it is divisible by 400

// first condition -- (year%4==0   and year%100!=0 )   ||  second condition year%400==0


function IsLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return true
    }
    else {
        return false
    }
}


let year = (IsLeapYear(2013))

//write function to find the number of days in a month

function findDaysInGivenMonth(month, year) {
  
    if (month >= 1 && month <= 12) {
        if (month == 4 || month == 6 || month == 9 || month == 11) {
            return "30 days"
        } else if (month == 2) {
            if (IsLeapYear(year) ) {
                return 29
            } else {
                return 28
            }
        } else {
            return 31
        }

    }else{
        return "InValid Month "
    }

}


console.log(findDaysInGivenMonth(2,2024))
   



//Description 
//write a program to find the missing number in a given array
//Input :[1,2,4,5,6]
//3
//Input :[1,3,4,5]
2

function MissingNumber(array){
//write code





}


console.log(MissingNumber([1,2,3,5]))
