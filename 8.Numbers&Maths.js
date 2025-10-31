const score = 500;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); // coverts number to string and then counts length
console.log(balance.toFixed(2)); // converts number to string with 2 decimal places


const otherNumber = 123.123456;
console.log(otherNumber.toPrecision(5)); // converts number to string with specified length

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // converts number to string with locale formatting