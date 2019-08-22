// Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

// 1. Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
// 2. First Element: firstElement, where  is the first element in the sorted array.
// 3. Last Element: lastElement, where  is the last element in the sorted array.
// Hint: To complete this challenge, you must add a variable that keeps a running tally of all swaps that occur during execution.

// For example, given a worst-case but small array to sort:  we go through the following steps:

// swap         a
//   0       [6,4,1]
//   1       [4,6,1]
//   2       [4,1,6]
//   3       [1,4,6]

// - It took  swaps to sort the array. Output would be

// 1. Array is sorted in 3 swaps.
// 2. First Element: 1
// 3. Last Element: 6

// -------------------------------------------------------------------
// Make some sort of loop that keeps happening if there were any swaps
// that happened this turn

// reset swapHappened to false each time so we can detect if a swap
// happened in this specific iteration.

// Make another loop (inside the first one) to go through one
// round of swapping from the start of the list to the end

// Inside inner loop:
// compare each pair of elements near each other
// swap them if the bigger one was at a lower index.

// Make sure to keep track of whether a swap happened!

// After both loops have exited, remember to return the array

const bubbleSort = (array) => {

  let swapped = true; // Assume the worst
  // We don't need to consider elements that have bubbled to the end.
  let end = array.length;

  while (swapped === true) {
    swapped = false;
    for (let i = 0; i < end; i++) {
      if (array[i] > array[i + 1]) {

        // ES6ier with parallel assignment/destructuring:
        // [ array[i], array[i+1] ] = [ array[i+1], array[i] ];

        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;

        swapped = true;
      }
    }
    end--;
  }

  return array;
}

console.log(bubbleSort([6,4,1]));
