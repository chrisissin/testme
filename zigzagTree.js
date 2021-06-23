/** https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/787/
recusive functin takes in node and level
if level is odd left right
if level is even right left

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    var out =[];
    if(root){
        out.push([root.val]);
        recus(out, root, 1);
        console.log(out);
    }
    return out;
};

var recus = function(out, node, level){
    if(level%2 !==0){
        var putR=[];
        if(node.right){
            putR.push(node.right.val)
        }
        if(node.left){
            putR.push(node.left.val)
        }
        if(putR.length)
         out.push(putR);
    }else{
        var putR=[];
        if(node.left){
            putR.push(node.left.val)
        }
        if(node.right){
            putR.push(node.right.val)
        }
        if(putR.length)
            out.push(putR);
    }
    if(node.left)
        recus(out, node.left, level+1);
    if(node.right)
        recus(out, node.right, level+1);
};