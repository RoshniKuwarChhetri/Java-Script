let btn=document.querySelector(".btn")
let body=document.querySelector("body")

let pageTheme=localStorage.getItem("theme")

if(pageTheme==="dark"){
    body.classList.add("dark")
    btn.innerText="🌞"
}else{
    body.classList.remove("dark")
    btn.innerText="🌑"
}



function mode(){
    if(btn.innerText==="🌑"){
         body.classList.toggle("dark")
         btn.innerText="🌞"
         localStorage.setItem("theme","dark")
    }else if(btn.innerText==="🌞"){
         body.classList.toggle("dark")
         btn.innerText="🌑"
         localStorage.setItem("theme","light")
    }
   
}

btn.addEventListener("click",mode)