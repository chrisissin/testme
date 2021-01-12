/*
https://leetcode.com/problems/subsets/
78. Subsets

Given an integer array nums, return all possible subsets (the power set).

The solution set must not contain duplicate subsets.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.

input: [1,2,3]
output: [[], [1], [1,2], [3,2] [1,2,3]]
constrain : no empty input, no duplicate inputs, no duplicate output

result as array

read the input
put in result
while there still things in the input
recurse and take a element out

*/

var findAllSubset = function(nums){
  var result = [];
  //result.push([]);
  recursive([],nums,result);
  //console.log(nums);
  return result;
}
var recursive = function(cur, nums, result){
  //console.log(nums,result);
   if(nums && nums.length >= 0){//&& result.indexOf(nums)<0){
     result.push(cur.concat());
   }
  //console.log( nums, result, "<br>");
  for(var i = 0; i < nums.length; i++){
    var newnum = nums.splice(0,i);
    //console.log(i,nums,newnum)
    recursive(cur.concat(newnum), nums,result);
    //nums.splice(i,0,newnum[0]);
    //console.log(i,nums,newnum)
  }
}
//console.log(findAllSubset([1,2,3]));

function subsets(nums) {
  let res = [];
var lev =0;
  function find(curr, remaining, start) {
    res.push(curr);

    for (let i = start; i < remaining.length; i++) {
      console.log(lev++,"j ",i,start, remaining, " p ", curr, remaining[i], " b ",
        [...curr, remaining[i]]," r ",remaining.slice(0, i),remaining.slice(i + 1), 'k', 
        [...remaining.slice(0, i), ...remaining.slice(i + 1)]
      );
      find(
        [...curr, remaining[i]],
        [...remaining.slice(0, i), ...remaining.slice(i + 1)],
        i
      );

      //start++;
    }
  }

  find([], nums, 0);

  return res;
}
console.log(subsets([1,2,3]));
