export function sum(a, b) {
    return a + b;
};

export function subtract(a, b) {
    return a - b;
};

export function divide(a, b) {
    return a / b;
};

export function multiply(a, b) {
    return a * b;
};

export function capitalize(string) {
    const newString = string.split("");
    const capitalizeString = newString.map((letter) => letter === newString[0] ? letter.toUpperCase() : letter.toLowerCase())
    .join("");

    return capitalizeString;
}


export const calculator = {
    sum: sum,
    subtract: subtract,
    divide: divide,
    multiply: multiply,
};

export function caesarCipher(string, number) {
    const alphabetLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const newArray = string.split("");
    const cypher = newArray.map((letter) => cipherLetter(letter)).join("");
    return cypher;

    function cipherLetter(letter) {
        if (alphabetLower.includes(letter)) {
            const indexLetter = alphabetLower.indexOf(letter);
            return alphabetLower[(indexLetter + number) % 26];
        };

        if (alphabetUpper.includes(letter)) {
            const indexLetter = alphabetUpper.indexOf(letter);
            return alphabetUpper[(indexLetter + number) % 26];
        };

        return letter
    };
};

export function analyzeArray(array) {
    const length = array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    const average = (array.reduce((total, currentItem) => {
        return total + currentItem;
    }, 0)) / length;

    return {
        average,
        min,
        max,
        length
    };
};
