async function test() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("first promise");
            resolve(45);
        }, 2000)
    })

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("second promise")
            resolve(32);
        },5000)
    })
    let op1=await p1
    console.log(op1)
    let op2 = await p2
    console.log(op2)
}
test()