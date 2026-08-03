// ***********************Async problems ******************
// problem #3

const delay =(ms)=> new Promise((resolve)=> setTimeout(resolve,ms))
const withTimeout = (promise, ms) => {
    return Promise.race([promise, new Promise((_, reject) => setTimeout(() => reject(new Error("Request Timed Out")), ms))])
}

const slowApi = delay(3000).then(() => "Return Profile Data");

withTimeout(slowApi, 2000)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));


// Problem #4
