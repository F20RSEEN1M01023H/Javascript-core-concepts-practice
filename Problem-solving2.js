// *********************************Arrays and objects Problems ******************************************
// 1. Cart Total with Discount
// Rizwan's e-commerce store gives a 10% discount when the cart total exceeds Rs 5000. Write checkout(items) that returns the final amount to pay.

const cart = [
    { name: "Mechanical Keyboard", price: 3500, quantity: 1 },
    { name: "Wireless Mouse", price: 100, quantity: 2 },
    { name: "USB-C Cable", price: 450, quantity: 2 },
];

// checkout(cart); // 6120

const checkoutCart = (cart) => {
    let total = 0;
    const cartCost = cart.reduce((acc, curr) => (curr.price * curr.quantity) + acc, 0)
    const discount = cartCost * 0.10
    if (cartCost > 5000) {
        total += cartCost - discount
    }
    else {
        total = cartCost
    }
    return total;
}
console.log(checkoutCart(cart));



// 2. Group Students by Grade 
// Given an array of students, group their names by grade into an object.

const students = [
    { name: "Rizwan", grade: "A" },
    { name: "Hafsa", grade: "A" },
    { name: "Ibrahim", grade: "B" },
    { name: "Zakariya", grade: "C" },
    { name: "Ayesha", grade: "B" },
];

// groupByGrade(students);
// { A: ["Rizwan", "Hafsa"], B: ["Ibrahim", "Ayesha"], C: ["Zakariya"] }

const groupByGrade = (students) =>
    students.reduce((groups, student) => {
        (groups[student.grade] ??= []).push(student.name);
        return groups;
    }, {});

console.log(groupByGrade(students));


// 3. Word Frequency Count
// Given an array of tags from blog posts, count how many times each tag appears.

const tags = ["api", "db", "api", "cache", "db", "api"];

// countTags(tags); // { api: 3, db: 2, cache: 1 }

const countTags = (tags) => tags.reduce((counts, tag) => {
    counts[tag] = (counts[tag] ?? 0) + 1;
    return counts;
},
    {}
)
console.log(countTags(tags));

// 4. Remove Duplicates
// Ayesha's newsletter service accidentally stored subscriber IDs multiple times. Write unique(ids) that removes duplicates while preserving the first-seen order.

const uniuqe = (ids) => [...new Set(ids)]
console.log(uniuqe([3, 7, 3, 1, 7, 9]));







// Problems to solve first 

const cart2 = [
    { name: "Mechanical Keyboard", price: 3500, quantity: 1 },
    { name: "Wireless Mouse", price: 1200, quantity: 2 },
    { name: "USB-C Cable", price: 450, quantity: 2 },
];

const cartTotal = (items) => {
    const cartProd = items.reduce((acc, item) => (item.price * item.quantity) + acc, 0)
    return cartProd > 5000 ? cartProd * 0.9 : cartProd;
}
console.log(cartTotal(cart2));


// 2. Group Students by Grade


