// let promise1 = fetch("https://jsonplaceholder.typicode.com/users")
// console.log(promise1)

const  getFacts=async()=>{
    console.log("getting data.....")
   let response= await fetch("https://jsonplaceholder.typicode.com/users")
   console.log(response)
   let data= await response.json()
   console.log(data)
   
}

getFacts()