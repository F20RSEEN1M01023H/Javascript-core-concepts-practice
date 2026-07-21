// // Conditional Statements 
// // Login
// // if (email && password) {
// //     console.log("Login");
// // }

// const email = "hammad@gmail.com";
// const password = 12345;

// if (email && password) {
//     console.log("Login is successfully");
// }

// // Shopping
// // if (cart.length > 0) {
// //     console.log("Checkout");
// // }

// const cart = ["Apples", "bananas", "oranges"]

// if (cart.length > 0) {
//     console.log("Checkout the product is available");

// }

// // ATM
// // if (balance >= amount) {
// //     console.log("Withdraw Successful");
// // } else {
// //     console.log("Insufficient Balance");
// // }

// const balance = 2340000;
// const ammount = 2367;

// if (balance >= ammount) {
//     console.log("Withdraw successful");
// }
// else {
//     console.log("Insufficient Balance");

// }

// // Weather
// // if (isRaining) {
// //     console.log("Take Umbrella");
// // }
// const isRaining = true;
// if (isRaining) {
//     console.log("Take Umbrella");

// }


// // Problems 
// // A mobile phone has battery percentage.
// let batteryPercentage = 15;
// // If the battery is less than 20%, print:
// if (batteryPercentage < 20) {
//     console.log("Battery low please charge it!");

// }

// // A user enters their age.

// // If age is 18 or above:

// const userAge = 20;
// if (userAge >= 18) {
//     console.log("Driving License Eligible ")
// } else {
//     console.log("Not Eligible");

// }

// const stduentMarks = 70;

// if (stduentMarks >= 90) {
//     console.log("A+");

// } else if (stduentMarks >= 80) {
//     console.log("B+");

// } else if (stduentMarks >= 70) {
//     console.log("C");

// } else if (stduentMarks >= 60) {
//     console.log("D");

// } else {
//     console.log("Fail");

// }

// // A user wants to enter an exam hall.

// // Rules:

// // First, check if the user has an admit card.
// // If yes, then check whether they have an ID card.
// // If both are available:

// const admitCard = true;
// const idCard = true;

// if (admitCard) {
//     if (idCard) {
//         console.log("Yes you are eligible to go to exam hall!");

//     }
// }

// const number = 65;

// console.log(number > 0 ? "Positive" : "Negative");

// // SWITCH 
// // A variable contains the traffic light color.

// const trafficLight = "Umer";

// switch (trafficLight) {
//     case "Red":
//         console.log("Stop!");
//         break;

//     case "Yellow":
//         console.log("Get Ready");
//         break;

//     case "Green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid Signal !");

// }


// // Loops

// // for loop
// const tableNum = 7;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${tableNum} x ${i} = ${7 * i}`);
// }

// // A user has 3 attempts to enter the correct PIN.
// // While Loop
// // const correctPin = 12345;
// // let attempts = 0;

// // while (correctPin === 12345 && attempts < 3) {
// //     "This did not understands now "
// // }


// for (let i = 1; i <= 5; i++) {
//     console.log("Hello Hammad");
// }



// let i = 1;
// while (i <= 10) {
//     if(i % 2 === 0){
//         console.log(i);

//     }
//     i++;
// }


// let i = 1;

// do {
//     console.log("Welcome Hammad")
//     i++;
// } while (i < 4)


// const fruits = ["Apple","Mango","Banana"];

// for(const fruit of fruits){
//     console.log(fruit);
// }

// const user = {
//     name: "Hammad",
//     age: 23
// };

// for(const key in user){
//     console.log(key);

// }


// break 
// for (let i = 1; i <= 10; i++) {
//     if (i === 6) {
//         break
//     }
//     console.log(i);
    

//continue
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue
//     }
//     console.log(i);
    
// }

// for of 

// const colors = ["Red", "Green", "Blue"];

// for(const color of colors){
//     console.log(`Color: ${color}`);
    
// }

// Arrays 
// const numbers4 = [5, 10, 15, 20, 25];

// for(const num of numbers4){
//     console.log(num *2);
    
// }


// for(let i=1; i<=20; i++){
//     if(i%2===0){
//         console.log(`${i} is Even`);
//     }
//     else{
//         console.log(`${i} is Odd`)
//     }
    
// }

// let i=10;
// while(i>=1){
//     console.log(i);
//     i--;
// }


const prices = [500, 1200, 300, 1500, 700];

let count=0;
for(const price of prices){
    if(price > 1000){
        count++;
    }
    
    
}console.log(count);