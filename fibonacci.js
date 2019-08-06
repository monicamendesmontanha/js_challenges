// Fibonacci:
// The Fibonacci sequence begins with  and  as its first and second terms.
// After these first two elements, each subsequent element is equal to the sum of the previous two elements.
// Fibonacci sequence are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...

const fibonacci = num => {
  // store the Fibonacci sequence you're going to generate inside an array and
  // initialize the array with the first two numbers of the sequence
  const result = [0, 1]

  for(let i = 2; i <= num; i++) {
    // push the sum of the two numbers
    // preceding the position of i in the result array
    // at the end of the result array
    const prevNum1 = result[i - 1]
    const prevNum2 = result[i - 2]
    result.push(prevNum1 + prevNum2)
  }
  // return the last value in the result array
  return result[num]
  // OR
  // return the Fibonacci sequence in result array
  // return result
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

