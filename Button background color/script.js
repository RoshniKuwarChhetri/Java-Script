let btn=document.querySelectorAll("button")
let body=document.querySelector("body")
function red(){
   body.classList.add("red")
}

btn[0].addEventListener("click",red)