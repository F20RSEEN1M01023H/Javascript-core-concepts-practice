// ******************** ES6 + Features **************** 
// ECMA Script 2015  
// These update comes to makes things easy and perfect

// 1.let and const are the variables after var 


//2.Arrow functions 
// before ES6 + 
function greet(name) {
   return `Hello ${name}`

}
console.log(greet("Hammad"));
const greet2 = (name) => {
   return `Hello ${name}`
}
console.log(greet("Hammo"))


// 3. Template Literals
// Before ES6 + 
const name = "Hammad";
console.log("Hello " + name);

const name2 = "Hammad";
const age = 23;
console.log(`Hello ${name2}, Your age is ${age}`);

//  4. Destructuring

const user = { name3: "Hammad", age2: 23, city: "Rahim Yar Khan" };

// without Destructuring 
console.log(user.name3);
console.log(user.age2);
console.log(user.city);

// With destructuring
const { name3, age2, city } = user;
console.log(name3);
console.log(age2);
console.log(city);

//5. Spread operatot 

// 6.Rest Operator

// 7.Default Parameters 

// 8. Object literals 


