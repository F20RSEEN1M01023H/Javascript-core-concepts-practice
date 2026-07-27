// 1. Ping-Pong (FizzBuzz Variant) 

// Print the numbers from 1 to 20. For multiples of 3, print Ping instead of the number. For multiples of 5, print Pong. For multiples of both, print PingPong.
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("PingPong");

    }
    else if (i % 3 === 0) {
        console.log("Ping");
    }
    else if (i % 5 === 0) {
        console.log("Pong");
    }
    else {
        console.log(i);

    }

}

for (let i = 1; i <= 20; i++) {
    let output = "";
    if (i % 3 === 0) { output += "Ping" }
    if (i % 5 === 0) { output += "Pong" }
    console.log(output || i);

}

// 2. Palindrome Check
// Write a function isPalindrome(str) that returns true if a string reads the same forwards and backwards, ignoring case and spaces.

const isPalindrome = (str) => {
    const cleaned = str.toLowerCase().replaceAll(" ", "");
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;

}

console.log(isPalindrome("Hammad"));


// 3. Vowel Counter
// Write a function countVowels(str) that returns how many vowels (a, e, i, o, u) a string contains, regardless of case.

const countVowels = (str) => {
    let count = 0;
    for (const char of str.toLowerCase()) {
        if ("aeiou".includes(char)) count++;
    }
    return count;
}

console.log("Hammad is here and i am software engineer")

// 4. Grade Calculator
// Hafsa's school converts marks to letter grades: 90 and above is A, 80 to 89 is B, 70 to 79 is C, 60 to 69 is D, and anything below 60 is F. Write getGrade(marks).

const gradCalc = (marks) => {
    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    return "F";
}
console.log(gradCalc(56))


// 5. Multiplication Table
// Write a function printTable(n) that prints the multiplication table of n from 1 to 10.

const MultiTable = (n) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
};

MultiTable(7);




// 6. Reverse a String Without .reverse()
// Write reverseString(str) without using the built-in Array.prototype.reverse() method.

const reverseStr=(str)=>{
    let reversed="";
    for(let i=str.length-1; i>=0; i--){
        reversed+=str[i]
        
    }
    return reversed;
}

console.log(reverseStr("My name is hammad!"));
