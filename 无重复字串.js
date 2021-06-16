/**
 * @param {string} s
 * @return {number}
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */
var lengthOfLongestSubstring = function (s) {
  const tempArr = [];
  let len = 0;
  for (let i = 0; i < s.length; ++i) {
    const temp = tempArr.indexOf(s[i]);
    if (temp > -1) {
      tempArr.splice(0, temp + 1)
    }
    tempArr.push(s[i]);
    len = len > tempArr.length ? len : tempArr.length;
  }
  return len;
};