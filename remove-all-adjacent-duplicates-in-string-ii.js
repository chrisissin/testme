/**
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"

 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    
};

console.log(removeDuplicates("deeedbbcccbdaa", 3))