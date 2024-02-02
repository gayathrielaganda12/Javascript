function squarePatter() {
    let allrows = ""
 for(let i = 1 ; i <=5 ;i++){
    let singlerow = ""
    for(let j = 1; j <= 5-i+1 ; j++){
        singlerow+= "* "
    }

    allrows += singlerow +"\n"
}
 return allrows
}
let squarepatternresult = squarePatter();
console.log(squarepatternresult)



 function pyramidPattern(){
    let allrows = ""
    for(let i = 1 ; i <= 5 ; i++){
    let singlerow = ""
    for(let j = 1 ; j <= 5-i ; j++  ){
      singlerow += " "
    }
    for(let k = 1 ;k <=i ;k++ ){
        singlerow += "* "
    }
    allrows+=singlerow+ "\n"
 }
 return allrows
 }
let pyramidPatternResult = pyramidPattern();
console.log(pyramidPatternResult)


// simple  way to pyramid
function simplePyramid(){
let allrows = ""
for(let i = 1 ; i <= 5 ; i++){
    allrows +=  " ".repeat(5-i)+ "* ".repeat(i)+"\n"
}
return allrows

}
console.log(simplePyramid())


