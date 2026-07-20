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


const getStudentResult = new Promise((resolve, reject) => {
    const marks = 85;

    if (marks > 50) {
        resolve("You passed")
    } else {
        reject("You failed")
    }
})

getStudentResult
    .then((message) => console.log(message)
    )
    .catch((error) => console.log(error)
    )


const getStudentResultAsync = async () => {


    try {
        const message = await getStudentResult;
        console.log(message);

    }
    catch (error) {
        console.log(error);

    }
}
getStudentResultAsync();