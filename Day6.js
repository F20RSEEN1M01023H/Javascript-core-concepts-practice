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
console.log(animals.replaceAll("cat", "Sparrow"));

const trimVar = "      UMER AND HAMMAD INTERS    ";
console.log(trimVar.trim());

const skills = "HTML5, CSS3, REACT";
console.log(skills.split(","));

// charAt()
console.log(skills.charAt(3));

// concat()
console.log(skills.concat(" ", trimVar));

// repeat()
console.log("JavaScript".repeat(3));





// Problems practice 

const username = " Hammad Ashraf ";
console.log(username.trim().toUpperCase());

const email2 = "HammadAshraf@GMAIL.COM";
const check = email.toLowerCase().includes("@")
if (check) {
    console.log("Valid Email");

}
else {
    console.log("Invalid Email");
}

const sentence = "HTML,CSS,JavaScript,React";

const convert = sentence.split(",");
for (const c of convert) {
    console.log(c);

}

const fileName = "resume.pdf";
const pdfCheck = fileName.endsWith(".pdf")
if (pdfCheck) {
    console.log("PDF file accepted");

} else {
    console.log("Invalid File");
}
console.log();



// Number Methods 
// 1-toFixed()

const price = 999.4567;
console.log(price.toFixed(2));

// 2. toString()

// Converts a number into a string.

const age = 23;

console.log(typeof (age.toString()), age.toString());

// 9. Math.floor()

// Always rounds down.

console.log(Math.floor(4.9));

// 10. Math.ceil()

// Always rounds up.

console.log(Math.ceil(4.1));

// 11. Math.random()

// Generates a random decimal between 0 and 1.

console.log(Math.random());



// problems to solve 
const price2 = 1999.9876;

console.log(price2.toFixed(2));

const age2 = "23";
const weight = "72.8kg";

console.log(Number(age2) + 5);

console.log(parseFloat(weight));


const number = 8.67;

console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));

const integ = 25.5;
console.log(Number.isInteger(integ));

const random = Math.floor(Math.random() * 6) + 1;
console.log(random);
