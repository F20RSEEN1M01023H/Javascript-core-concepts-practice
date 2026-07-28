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

const reverseStr = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]

    }
    return reversed;
}

console.log(reverseStr("My name is hammad!"));


// 7. Sum of Digits
// Write sumDigits(num) that returns the sum of the digits of a positive integer — without converting the number to a string.

const sumDigits = (num) => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10)
    }
    return sum;
}
console.log(sumDigits(5555));


// 8. Find the Largest Number
// Write findMax(numbers) that returns the largest number in an array — without using Math.max().

const findMax = (numbers) => {
    let maxNum = numbers[0];
    for (const num of numbers) {
        if (num > maxNum) {
            maxNum = num;
        }
    }
    return maxNum;
}
console.log(findMax([1, 2, 4, 55, 66, 67, 7888, 9, 9]));


// 9. Character Counter
// Write countChar(str, char) that returns how many times a character appears in a string.

const countChar = (str, char) => {
    let repeatedChar = 0;
    for (const charct of str) {
        if (charct === char) {
            repeatedChar++;
        }
    }
    return repeatedChar;
}

console.log(countChar("Hammad Ashraf", "s"));


// 10. Star Triangle
// Write printTriangle(rows) that prints a left-aligned triangle of stars

const printTriangle = (rows) => {
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i));
    }
}
printTriangle(6)





// Problems to solve by itself 

// Problem 1 (Easy → Medium)
// Password Strength Checker
const passwordStrength = (password) => {

    if (password.length >= 8) {
        return "Strong";
    } if (password.length >= 5 && password.length <= 7) {
        return "Medium";
    } else {
        return "Weak";
    }

}
console.log(passwordStrength("hAMGHJD"));


const countEvens = (numbers) => {
    let count = 0;
    for (const num of numbers) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(countEvens([1, 2, 4, 5, 7, 8, 9, 45, 66, 78, 90]));


const findLongestWord = (sentence) => {
    const words = sentence.split(" ");
    let bigWord = words[0];
    for (const word of words) {
        if (word.length > bigWord.length) {
            bigWord = word
        }
    }
    return bigWord
}
console.log(findLongestWord("I am learning JavaScript every day"));

const removeDuplicates = (numbers) => {
    let actualArray = []
    for (const num of numbers) {
        if (actualArray.includes(num)=== false) {
            actualArray.push(num)
        }

    }
    return actualArray

}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 1]));
