// The sort() method sorts the elements of an array in place and returns the sorted array.
// The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.


// CLASSIC EXAMPLE:
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log("----------------------------")


var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join()); // Blue, Humpback, Beluga
console.log('Sorted:', stringArray.sort()); // Beluga,Blue,Humpback

console.log("----------------------------")

console.log('numberArray:', numberArray.join()); // 80, 9, 700
console.log('Sorted without a compare function:', numberArray.sort()); // 700, 80, 9
console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers)); // 9, 80, 700

console.log("----------------------------")

console.log('numericStringArray:', numericStringArray.join()); // 40, 1, 5, 200
console.log('Sorted without a compare function:', numericStringArray.sort()); // 1, 200, 40, 5
console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers)); // 1, 5, 40, 200

console.log("----------------------------")

console.log('mixedNumericArray:', mixedNumericArray.join()); // 80, 9, 700, 40, 1, 5, 200
console.log('Sorted without a compare function:', mixedNumericArray.sort()); // 1, 200, 40, 5, 700, 80, 9
console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers)); // 1, 5, 9, 40, 80, 200, 700

console.log("----------------------------")





// Objects can be sorted (by value or by name):

var items = [
  { name: 'Monica', value: 32 },
  { name: 'Thai', value: 24 },
  { name: 'Ray', value: 59 },
  { name: 'Lou', value: 54 },
  { name: 'Bernardo', value: 2 },
  { name: 'Be', value: 31 }
];

// sort by value
const sortByValue = items.sort( (a, b) => a.value - b.value );

console.log('Sort by value:', sortByValue);
console.log("----------------------------")



// sort by name
const sortByName = items.sort( (a, b) => {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

console.log('Sort by name:', sortByName)
console.log("----------------------------")



