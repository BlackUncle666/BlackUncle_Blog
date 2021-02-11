/**
 * @param {string}
 * @return {string}
 */
let reverseWords = function (s) {
  return s.split('').reverse().join('').split(/\s+/).reverse().join(' ')
};
let str = "Let's take LeetCode contest";
reverseWords(str)