let promise = new Promise(function(reslove,reject){
    alert("hello")
    reslove(50)
})

console.log('hii')
setTimeout(function()  {
    console.log("Hello")
}, 2000);
setTimeout(function()  {
    console.log("World")
}, 2000);

console.log(promise)