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

// TEST CASES 
minMaxAverage([2,5,23,6,9,4,30,1]);
minMaxAverage([1,55,13,15,13,12,18,16]);
minMaxAverage([15,40,30,45,55]);
