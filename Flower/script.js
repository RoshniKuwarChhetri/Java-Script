let b5=document.querySelector(".img5")

let b1=document.querySelector(".img1")
let i1=b1.getAttribute("src")

function photo1(){
    let i5=b5.getAttribute("src")
    if(i5!=="Eeve.jpg"){
        b5.setAttribute("src","Eeve.jpg")
    }
}
b1.addEventListener("click",photo1)

let b2=document.querySelector(".img2")
// let i2=b2.getAttribute("src")
function photo2(){

    let i5=b5.getAttribute("src")
    if(i5!=="Espeon.jpg"){
        b5.setAttribute("src","Espeon.jpg")
    }
}
b2.addEventListener("click",photo2)

let b3=document.querySelector(".box3")
function photo3(){
    let i5=b5.getAttribute("src")
    if(i5!=="sylveon.jpg"){
        b5.setAttribute("src","sylveon.jpg")
    }
}
b3.addEventListener("click",photo3)

b4=document.querySelector(".img4")
function photo4(){
    let i5=b5.getAttribute("src")
    if(i5!=="umbreon.jpg"){
        b5.setAttribute("src","umbreon.jpg")
    }
}

b4.addEventListener("click",photo4)