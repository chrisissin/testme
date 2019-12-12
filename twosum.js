/** https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    for(let i = 0; i < nums.length; i++){
        let compl = target - nums[i]; 
        console.log(i, nums[i], map,compl);
        if(map[compl]>= 0){ // if(map[compl]){
            return [map[compl],i ];
        }
        /*for(var j = 0; j < nums.length; j++){
            if(i!=j){
                if(nums[i] + nums[j] == target)
                    return [i, j];
            }
        }*/
        map[nums[i]] = i;
    }
    //return [0,1];
};