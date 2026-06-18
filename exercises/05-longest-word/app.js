function LongestWord(sen) {
  // TODO: return the longest word in `sen`.
  // If there is a tie, return the first longest word.
  // Ignore punctuation.
  const palabraMasLarga = sen.match(/[a-zA-Z0-9]+/g) || [];
        palabraMasLarga.sort((a, b) => b.length - a.length);

        return palabraMasLarga[0] || "";
}

console.log(LongestWord("Hello world123 567"));

// IGNORE BELOW THIS LINE
// keep this function call here
let inputText = prompt("Write a sentence here");
console.log(LongestWord(inputText));
