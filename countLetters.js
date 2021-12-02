const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ ✅ ✅   Assertion passed: ${actual} === ${expected}");
  } else {
    console.log("🛑 🛑 🛑  Assertion failed: ${actual} !== ${expected}");
  }
};
  const str = 'The rain is pouring outside'
const countLetters = function(words){
  console.log(words);
  const count = {};
  words = words.replace(/\s/g,'')
  for(const letter of words){
    console.log(letter)
    if (letter in count){
      count[letter]+=1
    }
    else {
      count[letter] = 1
    }

  }
  return count;
}
console.log(countLetters(str)); 

