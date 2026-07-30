// Functions and Closures Problems 
// 1=> Counter Factory 

const createCounter=(start=0)=>{
    let count = start;
    return {
    
        increment() { count++} ,
        decrement(){count--},
        value(){ return count}
}}
const counter = createCounter(10);
counter.increment()
counter.decrement()
counter.value()

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.value());
