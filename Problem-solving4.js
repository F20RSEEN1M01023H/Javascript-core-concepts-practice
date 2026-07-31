// Functions and Closures Problems 
// 1=> Counter Factory 

const createCounter = (start = 0) => {
    let count = start;
    return {

        increment() { return count++ },
        decrement() { return count-- },
        value() { return count }
    }
}
const counter = createCounter(10);
counter.increment()
counter.decrement()
counter.value()

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.value());



// 2. Run It Only Once
// Payment handlers must never charge twice, even if a button is double-clicked. Write once(fn) that lets fn run a single time; every later call returns the first result without running fn again.

const onceRun = (fn) => {
    let called = false;
    let result;
    return (...args) => {
        if (!called) {
            called = true;
            result = fn(...args)
        }
        return result
    }
}

const initPayment = onceRun((amount) => {
    console.log(`Charging Rs ${amount}`);
    return `TXN-${amount}`;
});
console.log(initPayment(3500));


// 3. Memoize
const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (!cache.has(key)) {
            cache.set(key, fn(...args));
        }
        return cache.get(key)
    }
}


// 4.Debounce
const debounce = (fn, delay) => {
    let timerId;
    return (...args) => {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            fn(...args)
        }, delay);
    }
}
const search = debounce((query) => {
    console.log(`Searching for the : ${query}`);
}, 300)


search("A");
search("Ay");
search("Ayesha");


// 5. The Lost this
// Rizwan wrote a user object with a greet method, but passing the method to setTimeout breaks it. Explain why the broken version fails and fix it.

const user = {
    name: "Hammad",
    greet() {
        console.log(`Hello ${this.name}`);

    }
}

user.greet()
setTimeout(() => user.greet(), 100);
setTimeout(user.greet.bind(user), 100);
setTimeout(user.greet, 100);


// 6. Build a Pipe
// Write pipe(...fns) that composes functions left to right: the output of one becomes the input of the next. Use it to compute a final product price: apply 17% tax, add Rs 200 shipping, then round.



const pipe = (...fns) => {
    return (input) =>  fns.reduce((value, fn) => fn(value) , input)

}

const addTax = (amount) => amount * 1.17;
const shipping = (amount) => amount + 200;

const finalPrice = pipe(addTax, shipping, Math.round)

console.log(finalPrice(6500));




//************************************************** */ Async Problems***************************

// 1. Build a delay Function
// Write delay(ms) that returns a promise which resolves after ms milliseconds, then use it to pause between two log statements.

const delay=(ms)=>new Promise((resolve)=> setTimeout(resolve,ms));

const confirmOrder= async()=>{ console.log("order Placed");
    await delay(1000);
    console.log("Order Confirmed");

    
}
confirmOrder()


// 2. Sequential vs Parallel 

const loadSequential = async () => {
  console.time("sequential");
  const user = await fetchUser();
  const orders = await fetchOrders();
  console.timeEnd("sequential"); // sequential: ~2000ms
  return { user, orders };
};

const loadParallel = async () => {
  console.time("parallel");
  const [user, orders] = await Promise.all([fetchUser(), fetchOrders()]);
  console.timeEnd("parallel"); // parallel: ~1000ms
  return { user, orders };
};

const fetchUser = () => delay(1000).then(() => ({ name: "Rizwan" }));
const fetchOrders = () => delay(1000).then(() => [{ id: 1, total: 6120 }]);

// sequential: ~2000ms
// parallel:   ~1000ms
 console.log( fetchUser(1000));
   
