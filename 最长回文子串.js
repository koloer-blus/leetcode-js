/**
 * @param {string} s
 * @return {string}
 * https://leetcode-cn.com/problems/longest-palindromic-substring/submissions/
 */
var longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) return s;
  let res = '';

  const getToSider = (m, n) => {
      let [left, right] = [m, n];
      while (left >= 0 && right < len && s[left] === s[right]) {
          left--;
          right++;
      }
      let temp = s.slice(left + 1, right);
      res = temp.length >= res.length ? temp : res;
  }

  for (let i = 0; i < len; ++i) {
          getToSider(i, i + 1);
          getToSider(i, i);
  }
  return res;
};