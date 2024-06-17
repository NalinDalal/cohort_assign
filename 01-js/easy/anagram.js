/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.replace(/\s/g,' ').toLowerCase();    //REMOVE SPACE;LOWERCASE ALL 
  str2=str2.replace(/\s/g,' ').toLowerCase();

  function countCharacters(s){
      const charCount={};
      for(const char of s){
          charCount[char]=(charCount[char]||0)+1;
      }
      return charCount;
  }

  const charCount1=countCharacters(str1);
  const charCount2=countCharacters(str2);

  for(const char in charCount1){
      if(charCount1[char] !== charCount2[char]){
          return false;
      }
  }

  for(const char in charCount2){
      if(!(char in charCount1)){
          return false;
      }
  }
  return true;
}

const str1="spar";
const str2="rasp";

const result=isAnagram(str1,str2);

console.log(result);

module.exports = isAnagram;
