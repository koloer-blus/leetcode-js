/**
 * @param {number[]} height
 * @return {number}
 * https://leetcode-cn.com/problems/container-with-most-water/submissions/
 */
var maxArea = function (height) {
  let max = 0;
  const len = height.length;
  for (let left = 0, right = len - 1; left < right;) {
      const minH = height[left] < height[right] ? height[left++] : height[right--];
      const area = minH * (right-left +1);
      max= Math.max(area, max);
  }
  return max;

};