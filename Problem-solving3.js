// 5. Flatten a Nested Array
// An API returns category IDs as arbitrarily nested arrays. Write flatten(arr) that produces a single flat array.

const array = [1, [2, 3], 4];
let finalArr = []
for (const arr of array) {
    if (Array.isArray(arr)) {
        for (const num of arr) {
            finalArr.push(num)
        }
    } else {
        finalArr.push(arr)
    }
}
console.log(finalArr);



// Medium 
const arr2 = [1, [2, 3], [4, [5]]];

let finalArray = []
for (const arr of arr2) {
    if (Array.isArray(arr)) {
        for (const num of arr) {
            if (Array.isArray(num)) {
                for (const f of num) {
                    if (Array.isArray(f)) {
                        finalArray.push(f)
                    }
                    else {
                        finalArray.push(num)
                    }
                }
            }
        }
    }
    else {
        finalArray.push(arr)
    }
}

console.log(finalArray);



// Problem 5 
// 5. Flatten a Nested Array
// flatten([1, [2, 3], [4, [5, [6]]]]); // [1, 2, 3, 4, 5, 6]

const flatten = (items) => {
    return items.reduce((flater, item) => { return flater.concat(Array.isArray(item) ? flatten(item) : item) }, [])
}
console.log(flatten([1, [2, 3], [4, [5, [6]]]]));


// const flatten=(items)=>{
//     let result=[];
//     for(const item of items ){
//         if(Array.isArray(item)){
//             result=result.concat(flatten(item))
//         }
//         else{
//             result.push(item)
//         }
//     }
//     return result;
// }
// console.log(flatten([1, [2, 3], [4, [5, [6]]]]));



// 6. Sort Products by Price, Then Name

const products = [
    { name: "Laptop Stand", price: 4500 },
    { name: "Wireless Mouse", price: 1200 },
    { name: "Monitor", price: 32000 },
    { name: "Keyboard", price: 1200 },
];

const productsPrice = (products) => [...products].sort((a, b) => a.price - b.price || a.name.localeCompare(b.name))
console.log(productsPrice(products));


7// Problem
const users = [
    { id: 101, name: "Rizwan", role: "admin" },
    { id: 102, name: "Hafsa", role: "editor" },
    { id: 103, name: "Ibrahim", role: "viewer" },
];

// const byId = indexById(users);
// byId[102].name; // "Hafsa"

const indexById = (users) => Object.fromEntries(users.map((user) => [user.id, user]))
console.log(indexById(users));


//8 Problem : 

const results = [
    { name: "Rizwan", marks: 91 },
    { name: "Ayesha", marks: 45 },
    { name: "Zakariya", marks: 78 },
    { name: "Hafsa", marks: 85 },
];

// rankPassing(results); // ["Rizwan", "Hafsa", "Zakariya"]

const rankPassing=(results) =>
    results
        .filter((student) => student.marks >= 50)
        .sort((a,b)=>b.price - a.price)
        .map((student)=>student.name)

        console.log(rankPassing(results));
        