//alert
let btn=document.querySelectorAll("button")
function alert1(){
    alert("button was  clicked")
}
btn[0].addEventListener("click",alert1)

//pressed key
let intext=document.querySelector(".span1")
let text= document.querySelector(".text")
function input(){
   intext.innerText=text.value
}
text.addEventListener("keydown",input)

//click count
let span2 =document.querySelector(".span2")

let count=0;
function counting(){
    span2.innerText=count
    count++;
}
btn[1].addEventListener("click",counting)

//to do list
let litext=document.querySelector(".litext")
function list(){
    let intext=litext.value
    let listItem = document.createElement("li")
    listItem.innerText=intext

     document.querySelector("ul").appendChild(listItem)
     

     //delete button
     let del=document.createElement("button")
     del.innerText="✖"

     listItem.append(del)
 
     del.addEventListener("click", function delet(){
        listItem.remove()
     })


     litext.value=""
}

btn[2].addEventListener("click",list)