let textarea = document.querySelector("textarea");
let preview = document.querySelector(".preview");
let submitBtn = document.querySelector(".top button");
let fontSelect = document.querySelector("select");

let boldBtn = document.querySelectorAll(".style button")[1];
let italicBtn = document.querySelectorAll(".style button")[2];
let underlineBtn = document.querySelectorAll(".style button")[0];

let alignBtns = document.querySelectorAll(".align button"); // FIXED

let bgColor = document.querySelectorAll(".colors input")[0];
let fontColor = document.querySelectorAll(".colors input")[1];

submitBtn.onclick = function(){
    preview.innerText = textarea.value;
}

// Font Size
fontSelect.onchange = function (){
    if(fontSelect.value === "High"){
        preview.style.fontSize = "28px";
    }
    else if(fontSelect.value === "Medium"){
        preview.style.fontSize = "20px";
    }
    else{
        preview.style.fontSize = "14px";
    }
}

// Bold
boldBtn.onclick = function(){
    preview.style.fontWeight =
        preview.style.fontWeight === "bold" ? "normal" : "bold";
}

// Italic
italicBtn.onclick = function(){
    preview.style.fontStyle =
        preview.style.fontStyle === "italic" ? "normal" : "italic";
}

// Underline (FIXED)
underlineBtn.onclick = function(){
    preview.style.textDecoration =
        preview.style.textDecoration === "underline" ? "none" : "underline";
}

// Alignment (FIXED)
alignBtns[0].onclick = function(){
    preview.style.textAlign = "left";
}
alignBtns[1].onclick = function(){
    preview.style.textAlign = "center";
}
alignBtns[2].onclick = function(){
    preview.style.textAlign = "right";
}

// Background Color
bgColor.oninput = function(){
    preview.style.backgroundColor = bgColor.value;
}

// Font Color (FIXED)
fontColor.oninput = function(){
    preview.style.color = fontColor.value;
}