/**
https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/798/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if(nums.length<=1)return nums;
    let one = 0, zero = 0, two = 0;
    for(var i = 0; i < nums.length; i ++ ){
        if(nums[i] === 1) one++;
        if(nums[i] === 2) two++;
        if(nums[i] === 0) zero++;
    }
    console.log(one, two, zero);
    for(var i = 0; i < two; i++){
        nums.pop();
        nums.unshift(2);
    }
    for(var i = 0; i < one; i++){
        nums.pop();
        nums.unshift(1);
    }
    for(var i = 0; i < zero; i++){
        nums.pop();
        nums.unshift(0);
    }
    
};