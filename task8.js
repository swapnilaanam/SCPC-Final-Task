// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallestNumber(arr1) {
    let smallestNumber = arr1[0];
    let secondSmallestNumber = arr1[0];

    for (let x of arr1) {
        if (x < smallestNumber) {
            smallestNumber = x;
        }

        if (x < secondSmallestNumber && x > smallestNumber) {
            secondSmallestNumber = x;
        }
    }

    return secondSmallestNumber;
}

console.log(findSecondSmallestNumber([7, 2, 5, 3, 15, 10]));
// console.log(findSecondSmallestNumber([87, 24, 48, 36, 25, 75]));