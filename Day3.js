// Map Function 
// Practice Problems

// 1.
const prices = [100, 200, 300, 400];

// Create a new array where every price has 10% tax added.
const withTaxPrices = prices.map((item) => item + (item * 10 / 100))
console.log(withTaxPrices);

// 2.
const users = [
    { name: "Hammad", age: 23 },
    { name: "Ali", age: 21 },
    { name: "Ahmed", age: 25 }
];
const updatedUsers = users.map(user => `${user.name} (${user.age})`);

console.log(updatedUsers);

// 2️⃣ filter()

// 1.
const numbers = [5, 10, 15, 20, 25];

const updatedNums = numbers.filter(num => num > 15)
console.log(updatedNums)

// 2.Return only the products that are in stock.
const products = [
    { name: "Laptop", stock: 5 },
    { name: "Mouse", stock: 0 },
    { name: "Keyboard", stock: 3 },
    { name: "Monitor", stock: 0 }
];

const stockPrdcts = products.filter(product => product.stock > 0)
console.log(stockPrdcts);


// 3️⃣ reduce()

// 1. find the total marks
const marks = [80, 75, 90, 85];

const totalMarks = marks.reduce((acc, curr) => acc + curr, 0)
console.log(totalMarks)

2.//find the total bill
const cart = [
    { price: 500, qty: 2 },
    { price: 300, qty: 3 },
    { price: 1000, qty: 1 }
];

const totalCart = cart.reduce((acc, curr) => (curr.price * curr.qty) + acc, 0)
console.log(totalCart)

// 4️⃣ find() - find first number greater then 10
const numbers2 = [4, 8, 12, 16];

const numGreater = numbers2.find(item => item > 10)
console.log(numGreater);

2.// find the employee that has id 2
const employees = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Hammad" },
    { id: 3, name: "Ahmed" }
];

const employeeId = employees.find(item => item.id === 2)
console.log(employeeId);

// 5️⃣ findIndex()
// 1.find index of orange 
const fruits = ["Apple", "Mango", "Orange", "Banana"];
const indexOrang = fruits.indexOf("Orange");
console.log(indexOrang)

// 2.find the name of index of the student hammad
const students = [
    { name: "Ali", marks: 60 },
    { name: "Hammad", marks: 85 },
    { name: "Ahmed", marks: 70 }
];

const indexHammad = students.findIndex(item => item.name === "Hammad")
console.log(indexHammad)

// 6️⃣ some() 
// 1. check if any person is 18 or older
const ages = [15, 17, 18, 20];

const olderPer = ages.some(item => item >= 18)
console.log(olderPer);

// 2.check if at least one user is admin
const users2 = [
    { name: "Ali", isAdmin: false },
    { name: "Hammad", isAdmin: false },
    { name: "Ahmed", isAdmin: true }
];

const oneAdmin = users2.some(item => item.isAdmin)
console.log(oneAdmin);

// 7️⃣ every()
// 1.Check whether all students passed (pass marks = 50).
const marks2 = [80, 75, 90, 60];

const passMarks = marks2.every(item => item >= 50)
console.log(passMarks)

// 2.check if all the products are available

const products2 = [
    { name: "Laptop", available: true },
    { name: "Mouse", available: true },
    { name: "Keyboard", available: false }
];

const productsAvail = products2.every(item => item.available === true)
console.log(productsAvail);


//  8️⃣ includes()
// 1.check weather the green exists or not ?

const colors = ["Red", "Green", "Blue"];

const ExistGreen = colors.includes("Green");
console.log(ExistGreen);

// 2.check weather the current role is allowed

const allowedRoles = ["Admin", "Editor", "User"];

const currentRole = allowedRoles.includes("Manager");
console.log(currentRole);


// 9️⃣ slice()
// 1.Mango and orannge without modifying the original
const fruits2 = ["Apple", "Mango", "Orange", "Banana"];

const fruitsupdated = fruits2.slice(1, 3)
console.log(fruitsupdated);

// 2. return middle 3 numbers

const numbers3 = [10, 20, 30, 40, 50, 60, 70];

const middleNums = numbers3.slice(2, 5)
console.log(middleNums);

// 🔟 join()
const words = ["JavaScript", "is", "awesome"];

const updatedWords = words.join(" ");
console.log(updatedWords);

// 2.create string with /

const path = ["home", "user", "documents", "project"];
const updatedPath = path.join("/");
console.log(updatedPath);


// 1️⃣1️⃣ flat()
const numbers4 = [[1, 2], [3, 4], [5, 6]];
const flatedNums = numbers4.flat();

console.log(flatedNums);

// 2.
const data = [
    ["HTML", "CSS"],
    ["JavaScript", "React"],
    ["Node", "MongoDB"]
];

const flatedArray = data.flat();
console.log(flatedArray);


// final Challenge 
const employees2 = [
    { name: "Ali", salary: 40000 },
    { name: "Hammad", salary: 60000 },
    { name: "Ahmed", salary: 30000 },
    { name: "Ayesha", salary: 80000 }
];


// 1. Get all employees whose salary is greater than 40,000.

const greaterForty = employees2.filter(item => item.salary > 40000)
console.log(greaterForty);

// 2.Create a new array containing only employee names.
const NameEmployee = employees2.map(item => item.name)
console.log(NameEmployee);

// 3.Find the employee named "Ahmed".
const employeeAhmd = employees2.find(item => item.name === "Ahmed")
console.log(employeeAhmd);

// 4.Check whether every employee earns more than 25,000.
const employeeEarn = employees2.every(item => item.salary > 25000)
console.log(employeeEarn);

// 5.Check whether any employee earns more than 70,000.
const anyEmpEarn = employees2.some(item => item.salary > 70000)
console.log(anyEmpEarn);


// 6.Calculate the total salary of all employees.
const totalSalary = employees2.reduce((acc, curr) => acc + curr.salary, 0)
console.log(totalSalary);
