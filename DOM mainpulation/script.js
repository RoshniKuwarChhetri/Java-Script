let list=document.querySelector("#list")
let newItem=document.createElement("li")
newItem.textContent="Item 2"
list.appendChild(newItem)

list.removeChild(list.firstElementChild)
let newItem3=document.querySelector('li')
newItem3.textContent="Item 3"
list.insertBefore(newItem3, list.firstChild)

let text = document.querySelector(".text")
text.addEventListener('keydown',(event)=>{
    console.log(`Entered key is${event.key}`)
})