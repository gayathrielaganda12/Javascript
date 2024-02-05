function changeText() {
    let headingText = document.getElementById("jstext")
    console.log((headingText));
    headingText.innerHTML = "Text changed"
    headingText.style.backgroundColor = "red"
    headingText.style.color = "white"
}


let Container = document.getElementById("container");
Container.innerHTML = "<h1> Hello All </h1>"

function AddnewPara() {

   let paracontainer = document.getElementById('para');
   
   let paragraphEle = document.createElement('p');
   paragraphEle.textContent = "paragraph 4"

   paracontainer.appendChild(paragraphEle)


}


//document.getElementById -- will give only one element with that id name
//document.getElementByClassName -- will give the  collection on element which is having same class name



//getElementById , createElement ,appendChild,innerHTML,textContent

let elements = document.getElementsByClassName('paraele');
console.log(elements)
for(let i = 0 ; i<elements.length;i++ ){
   (elements[i].style.color="red")
   elements[i].classList.add('paragraphstyles')
}



function changeImg() {
    
   let Image = document.getElementById('myimage');

      if(Image.getAttribute('src') == 'images/musicimg2.png'){
        Image.setAttribute('src',"images/musicimag1.png")
      }else{
        Image.setAttribute('src',"images/musicimg2.png")
      }
   
}



// Today Topic with Assignment

// DoM -- BrowserInterface -- 
// DoM -- Access element and manupulate dynamically

// Methods in DOM - getElementById,getElementsByClassName,getElementByTagName,
// querySelector,querySelectorAll

// document.createElement
// innerHTML/textContent

// appendChild,ClassList.add,style

// getAttribute,setAttribute

// //Assignment for tommorow is Calculator

// //create responsive design for calculator -- similar to mobile


// //Input   

// //create buttons for numbers and operator
// //add functionality for each button  -- calculate(1)

// function calculate(num){
// inputval-- 1+2+3
// eval(inputval)
// }






















