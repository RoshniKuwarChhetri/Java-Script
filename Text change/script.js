let btn1=document.querySelector(".btn1")
function click1(){
    
    btn1.textContent="You clicked";
}
btn1.addEventListener("click",click1)

let text1=document.querySelector(".text1")
 let submit=document.querySelector(".submit")
function validate(){
    
   
    if(text1.value===""){
        alert("input required")
    }
}

submit.addEventListener("click",validate)

let body= document.querySelector("body")

let btn2= document.querySelector(".btn2")
function bgColor(){
    body.style.backgroundColor="green"
}
btn2.addEventListener("click",bgColor)

let btn3=document.querySelector(".btn3")
let hello=document.querySelector(".hello")
function hideIt(){
    hello.classList.toggle("hide")
}
btn3.addEventListener("click",hideIt)