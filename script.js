
let task1 = "The quick brown fox jumped over the lazy dog";
let task1Arr = task1.split(" ");

let longestWord = task1Arr.reduce((longest, currentWord) => 
  currentWord.length > longest.length ? currentWord : longest, ""
);

console.log(longestWord);

let arr = ["short", "medium", "longest", "tiny"];
let arr1 = arr.sort((a, b) => a.length - b.length);

console.log(arr1);
