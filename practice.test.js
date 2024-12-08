import { calculator } from "./practice.js";
import { capitalize } from "./practice.js";
import { sum } from "./practice.js";
import { subtract } from "./practice.js";
import { divide } from "./practice.js";
import { multiply } from "./practice.js";
import { caesarCipher } from "./practice.js";
import { analyzeArray } from "./practice.js";

test("capitalize hello to equal Hello", () => {
    expect(capitalize("hello")).toBe("Hello");
});


test("object assignment", () => {
    expect(calculator)
    .toEqual({sum: sum, subtract: subtract, divide: divide, multiply: multiply,});
});

test("calculator sum", () => {
    const a = 5;
    const b = 6;
    expect(calculator.sum(a,b)).toBe(a + b);
});

test("calculator subtract", () => {
    const a = 5;
    const b = 6;
    expect(calculator.subtract(a,b)).toBe(a - b);
});

test("calculator divide", () => {
    const a = 5;
    const b = 6;
    expect(calculator.divide(a,b)).toBe(a / b);
});

test("calculator multiply", () => {
    const a = 5;
    const b = 6;
    expect(calculator.multiply(a,b)).toBe(a * b);
});

test("caesarCipher test", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
});

test("analyzeArray object assignement", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4,min: 1,max: 8,length: 6});
});