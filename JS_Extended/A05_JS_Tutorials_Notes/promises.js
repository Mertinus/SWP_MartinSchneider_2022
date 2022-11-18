let promise = new Promise((resolve, reject) => {
    let i = 2;
    if (i == 1) {
        resolve("completed with " + i);
    }
    else {
        reject("failed");
    }
});

promise.then((message) => {
    console.log("The program was " + message);
}).catch((message) => {
    console.log("The program has " + message);
});