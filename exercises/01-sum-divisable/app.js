let sum = 0;

// TODO: Write your solution here.
// Sum all numbers below 1000 that are divisible by 3 or 5.

for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0 ) {

        sum += i
    }
}

// Use console.log to print the result
console.log(sum);
