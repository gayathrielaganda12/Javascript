//write a program to find the factorial of a given number

//5 -- 5* 4 * 3 * 2 * 1 
function factorial(usergivennumber) {
    let fact = 1;
    for (let i = usergivennumber; i >= 1; i--) {
        fact = fact * i;
        // fact *= i
    }
    return fact


}
let resultoffactorial = factorial(10)
console.log(resultoffactorial)

//write a program to reverse the given string

//Input : "hello world"
//Output : "dlrow olleh"


function reverseOfString(word) {
    let reversedword = ""

    for (let i = word.length-1 ; i >= 0; i--) {
        reversedword = reversedword + word[i]

    }
    return reversedword
}

let reversedword = reverseOfString("javascript");
console.log(reversedword)


//write a program to check wheather given word is palindrome or not

// hello  --  olleh
// mom -- mom 


function isPalindrome(givenword){
    let reversedword = reverseOfString(givenword)
    if(givenword == reversedword){
        return "palindrom"
    }else{
        return "not a palindrome"
    }
    
}

let resultofpalindrome = isPalindrome("sir");
console.log(resultofpalindrome)









