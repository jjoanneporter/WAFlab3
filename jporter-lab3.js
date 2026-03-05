// Joanne Porter
// ITMD 441-01

// Exercise #1
function minMaxAverage(arr) {

    let totalNumbers = arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    let sum = 0;
    for (let num of arr) {
        sum += num;
    }

    let average = sum / totalNumbers;

    console.log("Total Numbers:", totalNumbers);
    console.log("Min Value:", min);
    console.log("Max Value:", max);
    console.log("Average:", average);
}

// TEST CASES for Exercise 1
minMaxAverage([2,5,23,6,9,4,30,1]);
minMaxAverage([1,55,13,15,13,12,18,16]);
minMaxAverage([15,40,30,45,55]);


// Exercise 2
function countVowels(str) {

    let vowels = "aeiou";
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    console.log(str + ": " + count + " vowels");
}

// Test cases for Exercise 2
countVowels("Happy");
countVowels("Bumblebee");
countVowels("Soccer");

// Exercise 3
function sortNumbers(arr) {

    let sorted = [...arr].sort(function(a, b) {
        return a - b;
    });

    console.log("Original Array:", arr);
    console.log("Sorted Array:", sorted);
}

// Test cases for Exercise 3
sortNumbers([9, 4, 6, 2]);
sortNumbers([10, 3, 8, 1]);
sortNumbers([20, 15, 5, 30]);
