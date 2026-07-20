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

const registerUser = new Promise((resolve, reject) => {
    const username = "Hammad";

    if (username.length >= 5) {
        resolve("User Registered Successfully!")
    }
    else {
        reject("User Registeration Failed! Username is too short")
    }
})

registerUser
    .then((message) => console.log(message))
    .catch((error) => console.log(error)
    )


const checkStock = new Promise((resolve, reject) => {
    const stock = 15;
    if (stock > 0) {
        resolve("Products are available!")
    }
    else {
        reject("Products are out of stock!")
    }
})

