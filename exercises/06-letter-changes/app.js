function LetterChanges(str) {
  // TODO: implement the algorithm described in the README.

 let nuevaCadena = str.replace(/[a-zA-Z]/g, (char) => {
    if (char === 'z') return 'a';
    if (char === 'Z') return 'A';
    return String.fromCharCode(char.charCodeAt(0) + 1);
  });
   return nuevaCadena.replace(/[aeiou]/g, (vocal) => vocal.toUpperCase());
}

// IGNORE BELOW THIS LINE
// keep this function call here
const inputText = prompt("Write a sentence here");
console.log(LetterChanges(inputText));
