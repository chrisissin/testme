/**
Input: matrix = [
[1,2,3],
[4,5,6],
[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Input: matrix = [
[5,1,9,11],
[2,4,8,10],
[13,3,6,7],
[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    //for(var i = 0, j = matrix.length-1; i < matrix.length/2; j--, i++){
	for (var i = 0; i < (matrix.length + 1) / 2; i ++) {
        for (var j = 0; j < matrix.length / 2; j++) {  	
        	
        	console.log(i, j,
        			matrix[i][j],
        			matrix[i][matrix.length-1-j],
        			matrix[matrix.length-1-i][matrix.length-1-j],
        			matrix[matrix.length-1-i][j],
        	);
        	let tmp = matrix[i][j];
        	matrix[i][j] = matrix[matrix.length-1-i][j];
        	matrix[matrix.length-1-i][j] = matrix[matrix.length-1-i][matrix.length-1-j];
        	matrix[matrix.length-1-i][matrix.length-1-j] = matrix[i][matrix.length-1-j];
        	matrix[i][matrix.length-1-j] = tmp;
        	
        	
    	}
	}
	return matrix;
};

console.log(
	rotate(
[[5,1,9,11],
[2,4,8,10],
[13,3,6,7],
[15,14,12,16]]
/*[
[1,2,3],
[4,5,6],
[7,8,9]]
*/
		));
/*
0 0 5 11 15 16
0 1 1 9 14 12
1 0 2 10 13 7
1 1 4 8 3 6
2 0 13 7 2 10
2 1 3 6 4 8

///////

0 0 1 3 7 9
0 1 2 2 8 8
1 0 4 6 4 6
1 1 5 5 5 5

*/