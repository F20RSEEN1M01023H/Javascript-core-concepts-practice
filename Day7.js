// ************************Spread vs Rest Operator 
// spread is the expanding and rest is the collecting the values 

// =>Spread 
const numbers = [10, 102, 203, 45, 566, 354]
console.log(...numbers);

console.log(typeof (numbers));

// =>Rest 
const fruits = ["apple", "Bnanana"]


// ES6 + FEATURES
// ECMMA Script 2015 js was updated and gives powerful things in it .
// 1.let let name="hamamd";
// 2.const age =23;
// 3.Arrow Functions const greet = (name)=>{return "Hello" + name}
// 4.Template Literals
// 5.console.log(`Hammad ${name}`)
// 6.Destruturing const user={name:"Hammad",age=23} =>const {name,age}=user; => values directly
//7. ✅ Spread & Rest: spread used for expanding and the rest is using to collect data into arrays and objects.
// 8.Default Parameters => function greet(name="Guest"){ return name}
// 9.Export / Import => Expo-->i want to share this function with other files.
