// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function sumOfPositiveNumbers(arr1) {
    let total = 0;

    for (let x of arr1) {
        if (x >= 0) {
            total += x;
        }
    }

    return total;
}

// Example Input Test
console.log(sumOfPositiveNumbers([2, -5, 10, -3, 7]));