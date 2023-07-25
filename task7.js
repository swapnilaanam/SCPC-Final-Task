// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanValue) {
    const romanMap = new Map();

    romanMap.set('I', 1);
    romanMap.set('V', 5);
    romanMap.set('X', 10);
    romanMap.set('L', 50);
    romanMap.set('C', 100);
    romanMap.set('D', 500);
    romanMap.set('M', 1000);

    let integerValue = 0;

    for (let x = 0; x < romanValue.length; x++) {
        let currentValue = romanMap.get(romanValue[x]);

        if (x + 1 < romanValue.length) {
            let nextValue = romanMap.get(romanValue[x + 1]);

            if (currentValue < nextValue) {
                currentValue = nextValue - currentValue;
            }
            x++;
        }

        integerValue += currentValue;
    }

    return integerValue;
}

// Example Input Test
console.log(romanToInteger("IX"));
console.log(romanToInteger("XXI"));

// console.log(romanToInteger("CM"));
// console.log(romanToInteger("CD"));