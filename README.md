# JavaScript Utility Functions

This project includes a set of utility functions for basic mathematical operations, string manipulation, and array analysis. The functions can be imported and used individually or as part of an object.

## Functions

1. **`sum(a, b)`** - Returns the sum of two numbers.
2. **`subtract(a, b)`** - Returns the result of subtracting `b` from `a`.
3. **`multiply(a, b)`** - Returns the result of multiplying two numbers.
4. **`divide(a, b)`** - Returns the result of dividing `a` by `b`.
5. **`capitalize(string)`** - Capitalizes the first letter of the input string.
6. **`caesarCipher(string, shift)`** - Encrypts the input string using the Caesar cipher with the given shift.
7. **`analyzeArray(array)`** - Analyzes an array of numbers, returning an object with `average`, `min`, `max`, and `length`.

## Example Usage

```javascript
import { calculator, capitalize, caesarCipher, analyzeArray } from "./practice.js";

// Example: Using calculator object
const resultSum = calculator.sum(2, 3);
console.log(resultSum); // 5

// Example: Using capitalize function
const capitalizedString = capitalize("hello");
console.log(capitalizedString); // "Hello"

// Example: Using caesarCipher function
const cipherText = caesarCipher("Hello, World!", 3);
console.log(cipherText); // "Khoor, Zruog!"

// Example: Using analyzeArray function
const arrayAnalysis = analyzeArray([1, 8, 3, 4, 2, 6]);
console.log(arrayAnalysis); // { average: 4, min: 1, max: 8, length: 6 }
```

## Tests

The `practice.test.js` file contains tests for all the functions in the project, ensuring they work as expected. The tests cover:

- **Correct capitalization** using the `capitalize` function.
- **Correct functionality** of the `calculator` object methods: `sum`, `subtract`, `divide`, and `multiply`.
- **Proper encryption** using the `caesarCipher` function.
- **Correct analysis** of an array using the `analyzeArray` function.

## License

This project is licensed under the MIT License.