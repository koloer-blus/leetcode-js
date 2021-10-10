/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let res = [];
    nums.forEach((item, index) => {
        const tempIndex = nums.lastIndexOf(target - item);
        if (tempIndex > -1 && tempIndex > index) {
            res = [tempIndex, index]
        }
    });
    return res;
};