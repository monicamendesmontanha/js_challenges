// Problem:
// John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// E.g const array = [10, 10, 20, 30, 10, 20, 30, 20, 30]

// Solution:
// Sort the array, compare each item side by side to find a pair and total the number of pairs we find.

// PT
// 1. Ordernar o array usando "sort" com "compare" function ( array.sort((a-b) => a - b) );
// 2. Setar uma variável com o numero de pares igual a 0;
// 3. Checar se o elemento[i] do array ordenado(sortedArray) é igual ao próximo elemento[i+1];
// 4. Se for igual, acrescentar 1 a quantidade de números de pares ( pairs++ );
// 5. Criar um loop para envolver a condição verificada e testar a cada interação do array;
// 6. Contar a cada interação até alcançar o último elemento do array (array.length -1) & (i++);


// step 1:
// Sort the array using "sort" with "compare" function ( array.sort ((a-b) => a - b) );

// step 2:
// Set a variable with the number of pairs equal to 0;

// step 3:
// Check if element [i] of sorted array is equal to next element [i + 1];

// step 4:
// If equal, add 1 to the number of pair numbers ( pairs++ );

// step 5:
// Create a loop to wrap the verified condition and test each array interaction

// step 6:
// Count each interaction until you reach the last element of the array ( array.length -1 ) & (i++);


const sockMerchant = (pileOfSocks) => {

  // To compare numbers instead of strings, the compare function can simply subtract b from a.
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