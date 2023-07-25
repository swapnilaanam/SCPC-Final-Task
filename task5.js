// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const simpleCalculator = (num1, num2, operator) => {
    if (operator === '+') {
        return num1 + num2;
    }
    if (operator === '-') {
        return num1 - num2;
    }
    if (operator === '*') {
        return num1 * num2;
    }
    if (operator === '/') {
        return num1 / num2;
    }
}

console.log(simpleCalculator(5, 3, '*'));
// console.log(simpleCalculator(15, 10, '+'));