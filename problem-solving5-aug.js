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
// 4. Retry with Backoff

const delay=(ms)=> new Promise((resolve)=> setTimeout(resolve,ms))

const retry = async(fn,retries=3, wait=500)=>{
    for(let attempt=1; attempt<=retries; attempt++)
    {
        try{
            return await fn();
        }
        catch(error){
            if(attempt === retries){
                throw error;  
            }
            console.log(`Attempt ${attempt} failed. Retrying in ${wait}ms...`);
            await delay(wait);
            wait *= 2;

        }
    }
}
let calls =0;
const flakyApi = async()=>{
    calls++;
    if(calls <3){
        throw new Error ("Service Unavailable")
    }
    return connected;
}
retry(flakyApi, 3, 500)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));