let isMale=true;
let person2={
    name:"raj",
    age:33,
    isMale:isMale
}
console.log(person2.name)
person2.name="rana"
console.log(person2.name)
delete person2.name
console.log(person2.name)

let person={
    name:"raja",
    age:33,
    isMale
}

///array
let friend=["dfg","cvb","dfg"]
console.log(friend[0])
//friend[0]="666"
console.log(friend[0])
//delete friend[0]
console.log(friend[0])
console.log(friend.length)


friend.pop()
console.log(friend)
friend.push("radha")
console.log(friend)

let arr=[
    {name:"rose",color:"pink"},
    {name:"lili",color:"yellow"}
]

let name1="roshni"
let age="88";
let favColor="pink";
console.log(name1)
console.log(age)
console.log(favColor)
console.log("my name is " + name1 + " i am " + age + " years old " + "my fav color is " + favColor)

console.log(`my name is ${name1} i am  ${age} years old my fav color is ${favColor}`)

//
let agex=66
let adult=(agex>=18) && ( agex<=64)
console.log(adult)

let fr=[1,2,3,4]

//conditional statement
let a=8;
if(a>=18){
    console.log("eligible")
}else{
    console.log("not eligible")
}
//loops
for(let i=1;i<=5;i++){
    console.log(i)

}

//for in
let alpha={name1:"roshni", age:0, gender:"femle"}
for(let i in alpha){
    console.log(i,":", alpha[i])
}

//for of
let alpha2=[1,2,3,4]
for(let i of alpha2){
    console.log(i)
}
let alpha3="hello"
for(let i of alpha3){
    console.log(i)
}

let m = new Map([
    ["name","raj"],
    ["age",99],
    ["state", "goa"]
]);

for(let [key,value] of m){
    console.log(`${key} : ${value}`)
}

for(let [index,k] of m.entries()){
    console.log(`${index} : ${k}`)
}
//
for(let i=5;i>=1;i--){
  console.log("count down : " + i)
}
console.log("go")

//
let saving=0;
let target=100;
while(saving<target){
    saving=saving+10;
    console.log(`saving is ${saving}`)
    
}
//practice 
let num=-4;
if(num>0){
    console.log(`${num} is positive`)
}else if(num<0){
    console.log(`${num} is negative`)
}else{
    console.log(`${num} is is zero`)
}
//print number1-10
for(let i=0;i<=10;i++){
    console.log(i)
}
//try catch divisible by zero

try{
  var n=10/0;
}catch(error){
    console.log(error.message);
}
console.log(n)

//function
function sum(a,b){
    return a+b;
}
let add=sum(3,4)
console.log(add)

//callback
console.log("---------callback-------")
function fun(arr, callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i])
    }
}
 
// function sum(arr){
//    arr[i]+2;
// }

fun([1,2,3], function(num){
    console.log(num*2)
})

console.log("---------greet--------")
function greet(name, callback){
       callback(name);
    
}
function cb(name1){
   console.log(`hello ${name1} welcome to js`)
}

greet("roshni",cb)

console.log("---------math--------")
function maths(a,c,opration){
   console.log(opration(a,c))
}
function add1(a,b){
    return a+b;
}
function multi(a,b){
    return a*b
}
maths(1,2,add1)
maths(1,2,multi)

//object