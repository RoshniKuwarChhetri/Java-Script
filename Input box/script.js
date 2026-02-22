
let toptext=document.querySelector("#text")
let sectext=document.querySelector("#in")
let btn =document.querySelector("#sub")
//text box1-->textbox2
function text1(){
    toptext.setAttribute("value",toptext.value)
   let textval =toptext.getAttribute("value")
   sectext.setAttribute("value",textval)
}
btn.addEventListener("click", text1)

let select =document.querySelector("select")
//font size
function fontSize(){
 let size=select.value;
 if(size=="10px"){
    sectext.classList.add("px10");
 }

 else if(size=="20px"){
    sectext.classList.add("px20");
 }
  else if(size=="30px"){
    sectext.classList.add("px30");
  }
}
select.addEventListener("change",fontSize)

//font style
let utext=document.querySelector(".up")
//underline
function uline( ){
   sectext.classList.add("under");   

}
utext.addEventListener("click",uline)

//bold
let boldtext=document.querySelector(".bold")
function bold(){
    sectext.classList.add("bold")
}
boldtext.addEventListener("click",bold)

//italic
let italic =document.querySelector(".italic")
function italictext(){
    sectext.classList.add("italic")
}

italic.addEventListener("click",italictext)

//alignment
//left
let left =document.querySelector(".lefta")
function leftalign(){
    sectext.classList.add("leftalign")
}

left.addEventListener("click",leftalign)

//right
let right=document.querySelector(".righta")
function rightalign(){
    sectext.classList.add("rightalign")
}
right.addEventListener("click",rightalign)

//justify
let justify=document.querySelector(".justifya")
function justifyalign(){
    sectext.classList.add("justifyalign")
}
justify.addEventListener("click",justifyalign)