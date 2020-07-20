// 1512. 好数对的数目
// 给你一个整数数组 nums 。
// 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
// 返回好数对的数目。

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let arr = [], len = nums.length;
    for(let i = 0;i < len;i++) {
        for(let j = i+1;j < len;j++) {
            if(nums[i] == nums[j]) {
                arr.push([i,j]);
            }
        }
    }
    console.log(arr)
    return arr.length
};
numIdenticalPairs([1,2,3,1,1,3])