// *****************************String Methods *****************************
// Strings are the text only.
// ex: like string is a person and the skills of that person are the string methods 
// like walking, running and etc 

// String method 
// 1.length()
const name = "Hammad Ashraf";
console.log(name.length);

// 2.toUpperCase()
console.log(name.toUpperCase());


// .toLowerCase() 
console.log(name.toLowerCase());

// .includes()
const email = "hammadchoudharyy@gmail.com"
console.log(email.includes("@"));

// startsWith 
const url = "https://google.com"
console.log(url.startsWith("https"));

// endsWith()
console.log(url.endsWith("m"));

// indexOf()
console.log(url.indexOf("e"));

// Slice 

console.log(url.slice(1, 6));


// replace 
console.log(name.replace("Hammad", "MAAZ"));

// replaceAll()
const animals = "cat dog cat cow goat"
console.log(animals.replaceAll("cat","Sparrow"));

const trimVar="      UMER AND HAMMAD INTERS    ";
console.log(trimVar.trim());

const skills="HTML5, CSS3, REACT";
console.log(skills.split(","));

// charAt()
console.log(skills.charAt(3));

// concat()
console.log(skills.concat(" ", trimVar));

// repeat()
console.log("JavaScript".repeat(3));





// Problems practice 