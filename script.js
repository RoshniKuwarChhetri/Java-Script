function darkLight(){
let b=document.querySelector("body")
let btn=document.querySelector("button")

if(btn.innerText==="Dark Mode"){
    btn.innerText="Light Mode";
    b.classList.toggle("theme")
} else{
    btn.innerText="Dark Mode";
    b.classList.toggle("theme")
}

}