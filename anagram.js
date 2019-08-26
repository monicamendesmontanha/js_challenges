let anagrams = [];

const customSort = function(word) {
  word = word.split("").sort().join("");

  return word
}

const checkForAnagram = function(word, candidateWords) {

  let sortedWord = customSort(word)

  for ( let i = 0; i < candidateWords.length; i++ ) {
    let candidate = customSort(candidateWords[ i ]);

    if (sortedWord === candidate) {
      anagrams.push(candidateWords[i])
    }
  } //for

  console.log(`The anagram of ${word} is ${anagrams}`);
}; //chekcForAnagram

checkForAnagram("listen", ["enlists", "google", "inlets", "banana"]);
