function checkpw(){
let elech=document.querySelector(".ch")
let elepw=document.querySelector(".pw1")
if(elech.getAttribute("checked")!==null){
     elepw.setAttribute("type","password")
}else{
    elepw.setAttribute("type","text")
}
}