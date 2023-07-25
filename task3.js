// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

function findMostFrequentElement(arr1) {
    let mostFrequentElement = arr1[0];
    let maxFrequency = 0;

    for (let x of arr1) {
        let frequency = 0;
        for (let y of arr1) {
            if (x === y) {
                frequency++;
            }
        }
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            mostFrequentElement = x;
        }
    }

    return mostFrequentElement;
}

// Example Input Test
console.log(findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));