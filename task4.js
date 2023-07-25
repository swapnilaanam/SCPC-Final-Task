// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function matchTheTarget(arr1, target) {

    for (let x = 0; x < arr1.length; x++) {
        for (let y = x + 1; y < arr1.length; y++) {
            if ((arr1[x] + arr1[y]) === target) {
                return [x, y];
            }
        }
    }
    return [];
}

console.log(matchTheTarget([1, 3, 6, 8, 11, 15], 9));