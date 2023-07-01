//your JS code here. If required.
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Hello, world!");
    }, Math.floor(Math.random() * 5000) + 1000);
})
