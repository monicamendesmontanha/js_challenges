var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join()); // Blue, Humpback, Beluga
console.log('Sorted:', stringArray.sort()); // Beluga,Blue,Humpback

console.log("-----------------------------------------------------")

console.log('numberArray:', numberArray.join()); // 80, 9, 700
console.log('Sorted without a compare function:', numberArray.sort()); // 700, 80, 9
console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers)); // 9, 80, 700

console.log("-----------------------------------------------------")

console.log('numericStringArray:', numericStringArray.join()); // 40, 1, 5, 200
console.log('Sorted without a compare function:', numericStringArray.sort()); // 1, 200, 40, 5
console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers)); // 1, 5, 40, 200

console.log("-----------------------------------------------------")

console.log('mixedNumericArray:', mixedNumericArray.join()); // 80, 9, 700, 40, 1, 5, 200
console.log('Sorted without a compare function:', mixedNumericArray.sort()); // 1, 200, 40, 5, 700, 80, 9
console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers)); // 1, 5, 9, 40, 80, 200, 700