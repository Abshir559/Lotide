const letterPositions = function(sentence) {
  const results = {};
  let string = sentence.split(' ').join('');
  for(let i = 0; i < string.length; i++) {
    const letter = string[i];

    if(results[letter]){
      results[letter].push(i);
    } else {
      results[letter] = [i]
    }
  }
  return results;
};

const assertArraysEqual = function (array1, array2) {
  for (let i = 0; i < array1.length; i++ ) {
    if (array1[i] !== array2[i]) {
      console.log(`The '${array1}' and the '${array2}' are not same ❌`);
      return false; 
  } 
}
console.log(`The '${array1}' and the '${array2}' are the same✅`);
};

const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++ ) {
    if (array1[i] !== array2[i]) {
      return false; 
  } 
}
return true;
};

assertArraysEqual(letterPositions('hello').l, [2, 3]);
console.log(letterPositions('hello'))
