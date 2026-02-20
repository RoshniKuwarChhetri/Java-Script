
function pwd(){
    let inp= document.querySelector("input")
    let btn= document.querySelector("button")

    let currentType=inp.getAttribute("type")
    if(currentType==="password"){
        inp.setAttribute("type","text")
        btn.innerText="Hide"
    }
    else{
        inp.setAttribute("type","password")
        btn.innerText="show"
    }
}