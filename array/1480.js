// 1480. 一维数组的动态和
// 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
// 请返回 nums 的动态和。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nums = [1,2,3,4,5,6,7,8,9,10]
var runningSum = function(nums) {
    var arr = [];
    for(var i = 0;i < nums.length;i++) {
        if(i < 1) {
            arr.push(nums[i]);
            continue;
        }
        arr.push(arr[i - 1] + nums[i]);
    }
    return arr;
};
// var runningSum = function(nums) {
//     // reduce 初始值为0
//     // 0 + 1 1
//     // 1 + 2 3
//     // 3 + 3 6
//     // 6 + 4 10
//     nums.reduce((prev,curr,index) => {
//         nums[index] = prev + curr
//         return nums[index]
//     },0)
//     return nums
// }

console.log(runningSum(nums))
