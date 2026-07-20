// ******************Promises******************** 
const loginUser = new Promise((resolve, reject) => {
    const passwordCorrect = "123456";
    if (passwordCorrect) {
        resolve("Login Successfull")
    }
    else {
        reject("Something Went wrong ")
    }
})

loginUser
    .then((message) => console.log(message))
    .catch((error) => console.log(error)
    )