// Problem:
// John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Solution:
//Sort the array, compare each item side by side to find a pair and total the number of pairs we find.

// step 1:
// create a variable to hold the sorted array and use the built-in sort method the sort method can take a compare function as an argument.
// The passed-in compare function will ensure that items are sorted in ascending order

// step 2:
// create a pairs variable which will hold the final count, we default it to 0

// step 3:
// set up a for loop. We naturally start at index 0 but since we are going to compare items side by side we make a full stop at last index.

// step 4:
// compare each item of the array with its direct sibling to Find a pair

// step 5:
// increment the pair's value if we find a match.
// also increment "i" by 1 to skip the next item since we have already checked it


const sockMerchant = (pileOfSocks) => {

  let sortedPileOfSocks = pileOfSocks.sort( (a, b) => a - b )
  // sorted in ascending order: [10, 10, 10, 20, 20, 20, 30, 30, 30]
  let pairs = 0;

  for(let i = 0; i < pileOfSocks.length - 1; i++) {
    if (sortedPileOfSocks[i] === sortedPileOfSocks[i +1]) {
      pairs++;
      i = i + 1;
    }
  }

  return pairs;

}

const array = [10, 10, 20, 30, 10, 20, 30, 20, 30]

console.log(`Total: ${sockMerchant(array)} pairs`);