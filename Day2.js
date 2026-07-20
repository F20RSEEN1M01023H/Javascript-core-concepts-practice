// *************** Today's Tasks ******************

// 1.Functions -- is a reusable block of codes in js to use like:
// function in js are : 
function makeGreet(name) {
    return "Hello " + name;
}
console.log(makeGreet("Hammad Asraf")); // calling the function and passing the value to the function

function addNumbers(num1, num2) {
    return num1 + num2;
}

const result = addNumbers(10, 20); // calling the function and passing the values to the function
console.log(result);

console.log(addNumbers(100, 200))

// Default Parameters in js -- like these are the parameters which are used to set the default values to the function params 
function defaultParams(name = "Hammad", age = 23) {
    return `Hello ${name} and your age is ${age}`;
}
console.log(defaultParams());
console.log(defaultParams(name = "Hammad Ashraf", age = 23))

// Real World Example of function

function calculatePrice(price, taxRate = 0.5,) {
    const tax = price * taxRate;
    return total = price + tax;
}
console.log(calculatePrice(5000));
console.log(calculatePrice(5000, 0.10));

function multiParams(name = "Hammad Here", role = "Developer", active = true) {
    return { name, role, active }
}
console.log(multiParams("Ali", "Designer", false));
console.log(multiParams())


// Funtions types are :

// Function declaration and this is hoisted as well
function fnDec() {
    return "This is the function decalaration"
}

// Function Expression and this not hoisted 
const fnExp = function (params) {
    return "This is the function expression"
}

// Arrow Functions 
const fnArrow = (params) => {
    return "This is the arrow functions"
}

// Anonymous Functions -- like these are the functions which are not having the name and they are used in the function expression and arrow functions like
const fnAnonymous = function () {
    return "This is the anonymous functions"
}

// IIFE -- Immediately Invoked Function Expression
const fnIIFE = (function () {
    return "This is the IIFE functions"
})();

// Function Overloading -- like these are the functions which are having the same name but different parameters and they are used to perform different operations like
function add(num1, num2) {
    return num1 + num2;
}
// same names butt diffrent params

function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

// Real World Examples of functions 
function validateEmail(email) {
    if (!email.includes("@")) {
        return false;
    }
    if (email.length < 5) {
        return false;
    }
    return true;
}
console.log(validateEmail("hammad@"))
console.log(validateEmail("hammad"))

// 2nd example to check the discount price 
const calculateDiscount = (price, discountPercent) => {
    const discount = price * (discountPercent / 100);
    const totalPrice = price - discount;
    return totalPrice;
}
console.log(calculateDiscount(10000, 10))

// Creating by My self completely
function isEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
console.log(isEven(2));

// 2nd one 

const getFullNames=(firstName,LastName)=>{
return `Hello This is ${firstName} ${LastName}`
}
console.log(getFullNames("Hammad","Ashraf"))

// 3rdOne 
const caclculateTip = (billAmount, tipPercent)=>{
    const tipAmount = billAmount * (tipPercent/100);
    return tipAmount;
}

console.log(caclculateTip(12000,20))

// 4th One 
const toFahrenheit = (celsius) =>{
    const fahrenheit=celsius * 9/5 +32;
    return fahrenheit;
}

console.log(toFahrenheit(54));


// ****************************** Arrays *************************************
// Arrays are the type of object and as an ordered list of values and seprated with commas and enclosed in the [].

// like 
const arraysList=[1,2,3,4,5,6,7,8]

const stringsList=["hammad","Ali","Abood"]

const valuesList=[true, 12, null , "hello"];

console.log(stringsList[0])
console.log(arraysList[0])
console.log(valuesList[3])

// Itterating Arrays 

const numbers=[1,2,3,4,5,6,7,8];

for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}


// With For of Looops  
for(const number of numbers){
    console.log(number)
}

// Now we are moving on
// ************************ Array Methods **********************
// push

numbers.push(15);
numbers.push(12,3)

console.log(numbers);

// pop 
numbers.pop();

console.log(numbers)

// shift 
numbers.shift()
console.log(numbers);

//unshift
numbers.unshift(10);
console.log(numbers);

//Slice
const middle=numbers.slice(1,4)
console.log(middle);
console.log(numbers);


// Splice 

numbers.splice(1,0,50,60)
console.log(numbers);

//Sort
numbers.sort((a,b)=>a-b)
console.log(numbers);


const names = ["Rizwan", "Hafsa", "Ashiq"];
names.sort((a,b)=>a.localeCompare(b))
console.log(names);

// Reverse 
numbers.reverse();
console.log(numbers);


// concat
const letters=["a","e","i","o","u"]
const lettersAndNumbers=numbers.concat(letters)
console.log(lettersAndNumbers);

// Join 
const numberstring=numbers.join();
console.log(numberstring);

// IndexOf()
console.log(numbers.indexOf(50));

// lastIndexof
console.log(numbers.lastIndexOf(5));

//Includes
console.log(numbers.includes(52));
console.log(numbers.includes(5));

// ***********************************//Array Methods (NON MUTATING)*********************************
// 1.Map method this creates a new array transforming the original array with the same size and length

const numbers2=[1,2,3,4,5,6,7,8,9];
const doubleNumbers=numbers2.map(n=>n*2)
console.log(doubleNumbers)

const names2=["Hammad","Ali","Abu bakkar"];
const upperNames=names2.map(name=>name.toUpperCase())
console.log(upperNames);




// Morning solutions :
// function declaration: 
function sumValues(a,b){
    return a +b;
}

const multipleValues = function (a,b){
    return a*b;
}

const arrowfn = ()=>{
    return "This is the arrow function"
}

// anonymous function is the function that does not have any name and is used as a call back function in argumments. 

//IIFE (immediately invoked Function)
(function(){
 return "This is the IIFE function"
})();

