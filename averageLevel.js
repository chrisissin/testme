/*
Given a non-empty binary tree. return the average value of the nodes on each level in the form of an array
example 1:
input :
    3    = 3
   / \
  9  20  (9+20)/2 = 14.5
    / \
   15  7  (15+7)/ 2 = 11
output: [3, 14.5, 11]

1. bfs traversal , put each level in one array
2. sum each level and average it by divid by length

O(n) speed
O(2n) space


 3 9 20
*/
function Node(val, left, right) {
   this.val = val === undefined ? null : val;
   this.left = left === undefined ? null : left;
   this.right = right === undefined ? null : right;
 };
var node4 = new Node(4,null,null);
var node7 = new Node(7,null,null);
var node15 = new Node(15,null,null); 
var node9 = new Node(9,node4,null);
var node20 =  new Node(20,node15,node7);
var node3 = new Node(3,node9,node20);

var averageLevel = function(root){//console.log("root : ", root);
	var result = [];
	var queue = [];
	var level = 0;
	if(!root){
		return result;
	}
	queue.push([root,level]);
	//result.push({0:root.val});
	var cur = queue[0];
	while(queue.length){
		var count = queue.length;
		var sum = 0;
		console.log(queue, count);
		for (var i = 0;i < count; i++) {
			var [node, level] = queue.shift();
			console.log("shifting : ", node.val);
			sum += node.val;
			if(node.left){
				queue.push( [node.left,level+1]);
				//result.push([cur.left.val,level+1]);
			}
			if(node.right){
				queue.push([node.right, level+1]);
				//result.push([cur.right.val,level+1]);
			}
		}
		result.push(sum/count);
	}
	console.log("res : ",result);
	
};
//console.log(node3);
averageLevel(node3);
