/*
90. Subsets II

Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

input : [1,2,2]
output :
[[1],[2],[1,2],[2,2],[1,2,2]]
constrain : no duplicate output

[]
[1][12][122]
[2][22]
[2]
*/

var subsetDuplicate = function(nums){
  var result = [];
  recursive(nums.sort(), result, [], 0);
  return result;
}
var recursive = function(nums, result, cur, index){
  result.push(cur.concat());
  for(var i = 0; i < nums.length; i++){
    //cur.splice(0,0,nums[i]);
    if(nums[i] == nums[i-1])continue;
    console.log("b",cur, nums, i)
    cur.push(nums[i]);
    console.log(cur, i)
    recursive(nums.slice(i+1),result, cur, index+1);
    cur.pop();
    
    //cur.splice(0,1);
  }
}
console.log(subsetDuplicate([1,2,2]));  
