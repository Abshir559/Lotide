const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`The '${actual}' and the '${expected}' are the same✅`);
  } else console.assert(actual === expected, "❌");
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)
  if(keys1.length = keys2.length){
    for(key of keys1){
      
      if(Array.isArray(object1[key]) || Array.isArray(object2[key])) {
        if(object1[key].length === object2[key].length){
          eqArrays(object1[key], object2[key]);
        } else {
          return false;
      } 
        
      } else{
        if(object1[key] === object2[key]){
      } else return false;
      }  
  }
  } else return false;
  return true;
}
const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++ ) {
    if (array1[i] !== array2[i]) {
      return false; 
  } 
}
return true;
}; 