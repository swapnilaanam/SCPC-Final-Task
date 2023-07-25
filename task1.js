// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseTheString(str1) {
    let arr = str1.split('');

    let reverseArr = [];
    for (let x = arr.length - 1; x >= 0; x--) {
        reverseArr.push(arr[x]);
    }

    let reverseString = reverseArr.join('');

    return reverseString;
}

// Example Input Test
console.log(reverseTheString('hello world'));


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


