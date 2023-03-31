let promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //console.log("this is first block")
        resolve(true)
    }, 3000);
})

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //console.log("this is second block")
        reject(new Error("error"));
    }, 3000);
})

//to get the value 
promise1.then((value)=>{
    console.log(value)
})

promise2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
}
)

// promise2.catch((Error)=>{
//     console.log("error")
// })