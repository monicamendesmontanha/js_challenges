// Fibonacci:
// The Fibonacci sequence begins with  and  as its first and second terms.
// After these first two elements, each subsequent element is equal to the sum of the previous two elements.
// Fibonacci sequence are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...

// PT
// 1. Criar um array com os 2 primeiros números da sequência;
// 2. Descobrir o próximo número da sequência (let nextNumber = array[i - 1] + array[1 - 2]);
// 3. Empurrar o próximo número descoberto para dentro do array de sequências. (array.push(nextNumber))
// 4. Criar um loop para interagir a partir da segunda posicão do array até a quantidade de vezes solicitada pelo programa;
// 5. Um vez que saiu do loop, retornar o último número da sequência (array[number]) ou todo o array (array);


// EN
// 1. Create an array with the first 2 numbers of the sequence;
// 2. Find out the next sequence number (let nextNumber = array [i - 1] + array [1 - 2]);
// 3. Push the next discovered number into the sequence array. (array.push (nextNumber))
// 4. Create a loop to interact from the second position of the array until the number of times requested by the program;
// 5. Once out of the loop, return the last sequence number (array [number]) or the entire array (array);

const fibonacci = number => {

  const array = [0, 1]

  for(let i = 2; i <= number; i++) {

    const nextNumber = array[i - 1] + array[i - 2]
    array.push(nextNumber)
  }

  return array[number]

}

console.log(fibonacci(9))



// RECURSIVE approach:

const fibonacciRecursiveVersion = num => {
  // if num is either 0 or 1 return num
  if(num < 2) {
    return num
  }
  // recursion here
  return fibonacciRecursiveVersion(num - 1) + fibonacciRecursiveVersion(num - 2)
}

console.log(fibonacciRecursiveVersion(9))

