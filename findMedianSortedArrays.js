/**
 * Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [];
    let combleng = nums1.length+ nums2.length;
    for(let i = 0; i < combleng; i++){
        if(nums1[0]<nums2[0]){
            merged.push(nums1.shift());
        }else
            merged.push(nums2.shift());
    }
    let med = 0;
    if(!merged.length%2){
        med = merged[Math.floor(merged.length)]+merged[Math.floor(merged.length+1)]/2;
    }else{
        med = merged[merged.length/2];
    }
    return med;
};
//[1,2],[3,4]
console.log(findMedianSortedArrays([1,3][2]));