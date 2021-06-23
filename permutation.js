/*
https://leetcode.com/problems/permutations/discuss/293217/javascript-backtracking-with-explanation-beats-99

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.

input : array of numbers
output : array of arrays of permutaion of input
constrain: 
1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.

            [123]
    [1][23]       [2][13]     [3][12]
[12][3]  [13][2]
[123][]  [132][]

*/

var permutation = function(nums){
  var result = [];
  //var remainder = Array.from(nums);
  findPermutation( result, nums, []);
  return result;
}

var findPermutation = function(result,remainder,current){
  //if(current.length>3)return;
  //console.log(result, current, remainder);
  if(!remainder.length){
    result.push(current.concat());//current.concat()
    return;
  }
  //var re = Array.from(remainder);
  for(var i = 0; i < remainder.length; i++){
    var tmp = remainder[i];
    remainder.splice(i,1);
    current.push(tmp);
    console.log("b ", i, remainder,tmp);
    findPermutation( result, remainder, current);
    current.pop();
    remainder.splice(i,0,tmp);
    console.log("a ", i, remainder,tmp);
  }
  
}
console.log(permutation([1,1,3]));