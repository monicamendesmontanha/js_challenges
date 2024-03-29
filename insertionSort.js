// Loop through each element

// store the current item value so it can be placed correctly
// in the sorted portion of the array

// Loop backward through the sorted portion of the array
// and scoot everything over until you find the right place to
// insert the value you're working with

// Copy each item to the next slot over, as long as the value is smaller
// than the item in the sorted array we're looking at (items[j] > value)

// We can now insert the item in its sorted location

// Remember to return the list!

const insertionSort = (items) => {

  for (let i = 0; i < items.length; i ++) {
    const item = items[i];
    // console.log(`i: item[${i}] = ${item}`)

    for (var j = i-1; j >= 0 && items[j] > item; j--) {
      items[j + 1] = items[j];
      // console.log(`>>>>>>> j: item[${j}] = ${items[j + 1]}`)
    }

    items[j + 1] = item;
  }
  return items;
}

console.log(insertionSort([5,3,4,1,2]))