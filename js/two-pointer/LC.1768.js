// 1768. Merge Strings Alternately
// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

var mergeAlternately = function (word1, word2) {
  let result = "";
  let i = 0;

  while (i < word1.length || i < word2.length) {
    if (i < word1.length) {
      result += word1[i];
    }

    if (i < word2.length) {
      result += word2[i];
    }

    i++;
  }

  return result;
};


// Test cases
console.log(mergeAlternately("abc", "pqr"));    // "apbqcr"
console.log(mergeAlternately("ab", "pqrs"));    // "apbqrs"
console.log(mergeAlternately("abcd", "pq"));    // "apbqcd"