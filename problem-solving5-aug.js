// ***********************Async problems ******************
// problem #3

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
// const withTimeout = (promise, ms) => {
//     return Promise.race([promise, new Promise((_, reject) => setTimeout(() => reject(new Error("Request Timed Out")), ms))])
// }

// const slowApi = delay(3000).then(() => "Return Profile Data");

// withTimeout(slowApi, 2000)
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));


// // Problem #4
// // 4. Retry with Backoff

// // const delay=(ms)=> new Promise((resolve)=> setTimeout(resolve,ms))

// const retry = async (fn, retries = 3, wait = 500) => {
//     for (let attempt = 1; attempt <= retries; attempt++) {
//         try {
//             return await fn();
//         }
//         catch (error) {
//             if (attempt === retries) {
//                 throw error;
//             }
//             console.log(`Attempt ${attempt} failed. Retrying in ${wait}ms...`);
//             await delay(wait);
//             wait *= 2;

//         }
//     }
// }
// let calls = 0;
// const flakyApi = async () => {
//     calls++;
//     if (calls < 3) {
//         throw new Error("Service Unavailable")
//     }
//     return connected;
// }
// retry(flakyApi, 3, 500)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error.message));


//   Problem #5
// 5. Promise.all Error Handling 

// const getUser = (name, shouldFail = false) => {
//     return shouldFail ? delay(300).then(() => Promise.reject(new Error(`Failed to fetch user ${name} not found`))) : delay(300).then(() => ({ name }))

// }
// const loadProfiles = async () => {
//     const results = await Promise.allSettled([getUser("Rizwan"), getUser("Ali", true), getUser("Ahmed")]
//     )

//     const loadedProfiles = results
//         .filter((r) => r.status === "fulfilled")
//         .map((r) => r.value.name)

//     const failedProfiles = results.filter((r) => r.status === "rejected").map((r) => r.reason.message)

//     console.log(`Loaded: ${loadedProfiles.join(", ")}`);
//     console.log(`Failed: ${failedProfiles.join(", ")}`);

// }


// loadProfiles();


// Problem #6 
// 6. Promisify a Callback API

const getUserLegacy = (id,callback)=>{
    setTimeout(()=>{
        if(id===101) callback(null, {id:101,name:"Hammad"});
    else callback(new Error("User not found"),null);
    },300)}

    const promisify =
  (fn) =>
  (...args) =>
    new Promise((resolve, reject) => {
      fn(...args, (err, result) =>
        err ? reject(err) : resolve(result)
      );
    });

const getUser = promisify(getUserLegacy);

const run = async () => {
  try {
    const user = await getUser(101);
    console.log(user);

    const user2 = await getUser(999);
    console.log(user2);
  } catch (error) {
    console.log(error.message);
  }
};

run();