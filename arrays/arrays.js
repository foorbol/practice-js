const arrayGenerator = require('./array-generator');
const initialArray = arrayGenerator.generate();
console.log(`INITIAL ARRAY: ${initialArray}`);

/**
 * YOUR CODE GOES BELOW
 */

const evenNumbers = [];
const oddNumbers = [];
console.log(`Array length ${initialArray.length}`);
console.log(`Array first element ${initialArray[0]}`);
console.log(`Array last element ${initialArray[initialArray.length - 1]}`);
let i;
for (i = 0; i < initialArray.length; i++) {
    if (initialArray[i] % 2 === 0) {
        evenNumbers.push(initialArray[i]);
    } else {
        oddNumbers.push(initialArray[i]);
    }
}

const isAllArrayElementsUsed = initialArray.length === (evenNumbers.length + oddNumbers.length);

console.log(`initialArray ${initialArray}`);
console.log(`evenNumbers ${evenNumbers}`);
console.log(`oddNumbers ${oddNumbers}`);
console.log(`lengths are equal ${isAllArrayElementsUsed}`);

