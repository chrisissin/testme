/** 
https://leetcode.com/problems/deepest-leaves-sum/
traverse tree and store sum in each level in seperte hash
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let sums = [];
    traverse(root, 0, sums);
    
    return sums.pop();
};
var traverse = function(cur, level, sums){
    //console.log(sums,level,cur.val)
    if(cur.val){
        if(!sums[level])
            sums[level]=0;
        sums[level]+=cur.val;
    }
    if(cur.left)
        traverse(cur.left,level+1,sums);
    if(cur.right)
        traverse(cur.right,level+1,sums);
}
