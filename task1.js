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