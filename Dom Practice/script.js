//  to change heading
 let para= document.querySelectorAll("button");
    let head=document.querySelector("h1");
function paraFun(){
  
    head.innerText="Wellcome to my page!!!"
}
para[0].addEventListener("click",paraFun)

// to convert text to italic
function italic(){
    head.classList.add("italic")
}
para[1].addEventListener("click",italic);

//show hidden text
function show(){
    let hide =document.querySelector(".hide")
     
    hide.textContent="👼👼👼👼"
}
para[2].addEventListener("click",show)

//change background color
let container= document.querySelector(".container")
function bgColor(){
    container.classList.add("bg");
}
para[3].addEventListener("click",bgColor)

//change font size
function fontSize(){
    head.classList.add("font")
}
para[4].addEventListener("click",fontSize)

//change border
function border(){
  container.classList.add("border")
}
para[5].addEventListener("click",border)

//hide text
function hide(){
    head.innerHTML="<p></p>"
}
para[6].addEventListener("click",hide)

//change image
let btn=document.querySelector(".btn")
let img =document.querySelector("img")
function image(){
  if(btn.innerText=="Show Netflix"){
    img.setAttribute("src","netflix.jpeg")
    (btn.innerText="Show Disney")
  }
  else{
    btn.innerText="Show Disney";
    img.setAttribute("src","Disney.jpeg")
  }
}
para[7].addEventListener("click",image)