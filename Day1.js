// Starting java script basics 
// =>Variables , Data types , operators 

// Variables are of three types in js 
// 1.Var
// var is the functioned scope and can be redecalared like

// var name = "Hammad";
// var name = "Ali";

// 2.let 
// let is blocked scope and cant be redeclared and only you can reassign the value in it like 

// let name ="Hammad Ashraf";
// name="Abdul Rehman";


// 3.const
// const is the blocked scope and cant be reassign and redeclared like 
// const name ="Hammad Ashraf";
// const name ="Abdul Rehman"; // this will give error because const cant be redeclared and reassigned


// Now move to Data Types in js 
// there are two types of data types in js 

// 1.primitive data types 
// string --like the "Hello Hammad"
// number -- like this 1234
// boolean -- like this true of false 
// null   -- like this is the null value having empty value
//undefined -- like this is the undefined butt the varibale is declared and value is not assigning to it.
// bigint -- like this is to the big int values to show shortly like this 1234567890123456789012345678901234567890n
// symbol -- like this is the symbol data type in js and it is used to create uniuqe identifiers for objects in js 


// non-permitive data types
// only 2 are 
// 1. objects -- like these are the key value pairs in js to store the data like this 
        let student={
            name:"Hammad Ashraf",
            age:23,
            city:"karachi"
        }

// 2. arrays -- like these are the collection of data in js to store the data and store multiples values in js like this 

        // const numbers=[1,2,3,4,5,5,5,6,7,8,8,9]


// Now move to operators in js
// there are 5 types of operators in js 
// 1.Arthematic operators -- like these are the operators to perform the mathematical operations in js like 
        let a=10;
        let b=20;
        console.log(a+b); // addition
        console.log(a-b); // subtraction
        console.log(a*b); // multiplication
        console.log(a/b); // division

// 2.Assignment operators -- like these are operators to assgn the values to the variables in js 
       let c=10;
       c+=5//addition assignment
       c-=5//subtraction assignment
       c*=5//multiplication assignment
       c/=5//division assignment
        
// 3.Comparison operators -- like these are the operators to compare the values in js


// const age =27;

// if(age >= 18){
//     console.log("Adult"); 
// }else{
//     console.log("Not Adult");
// }


// const marks = 90;
// if(marks >= 90){
//     console.log("A+")
// }else if(marks >= 80){
//     console.log("A")
// }else if(marks >= 70){
//     console.log("B")
// }else{
//     console.log("Fail");
// }

// // Check if a person is eligible to vote.
// let personAge = 25;
// if(personAge >=18){
//     console.log("Eligible to vote")
// }else{
//     console.log("Not eligible to vote")
// }

// let number=-23;

// if(number >=0){
//     console.log("Number is positive");

// }else if(number <0){
//     console.log("Number is negative")
// }else{ console.log("No number found")}

// const numOutput = number >=0 ? "Number is positive" : "Number is negative";
// console.log(numOutput);




// console.log(f);

// var f = 10;

// console.log(f);


// Hoisting

// What will this code print, and why?

console.log(a);

var a = 10;

console.log(a);


// Closures

// Read the code carefully.

function outer() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const increment = outer();

increment();
increment();
increment();

// this Keyword

// Without running the code, what will this print and why?

const person = {
    name: "Hammad",

    greet() {
        console.log(this.name);
    }
};

const user = {
    name: "Ali",
    greet: person.greet
};

user.greet();