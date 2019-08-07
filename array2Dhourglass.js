// 2D Array - DS (Hourglass)
// There are 16 hourglasses in array, and an hourglass sum is the sum of an hourglass' values.
// Calculate the hourglass sum for every hourglass in array, then print the maximum hourglass sum.

// Given the 2D array:

// -9 -9 -9  1 1 1
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0

// We calculate the following  hourglass values:

// -63, -34, -9, 12,
// -10, 0, 28, 23,
// -27, -11, -2, 10,
// 9, 17, 25, 18

// The hourglass with the maximum sum (28) is:

// 0 4 3
//   1
// 8 6 6

const hourglass = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

const hourglassSum = array => {

  let sums = []

  for(let row = 0; row < 6; row++ ) {
    for(let col = 0; col < 6; col++) {

      if (row + 2 < 6 && col + 2 < 6) {

        const firstLine =
        array[row][col] +           // top left
        array[row][col + 1] +       // top middle
        array[row][col + 2]         // top right

        const secondLine =
        array[row + 1][col + 1]     // middle middle

        const thirdLine =
        array[row + 2][col] +       // bottom left
        array[row + 2][col + 1] +   // bottom middle
        array[row + 2][col + 2]     // bottom right

        const value = firstLine + secondLine + thirdLine

        sums.push(value);
      }
    }
  }
  const allValues = sums
  // console.log(`All hourglass sum: ${allValues}`)
  const maximum = Math.max(...allValues)
  return `The maximum hourglass sum is ${maximum}`;
}

console.log(hourglassSum(hourglass));