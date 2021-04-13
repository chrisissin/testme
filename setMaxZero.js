/** https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/777/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var cols = [];
    var rows = [];
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix[i].length; j++){
            if(matrix[i][j]===0){
                cols.push(i);
                rows.push(j);
            }
        }
    }
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix[i].length; j++){
            if(cols.includes(i) || rows.includes(j) ){
                matrix[i][j] = 0;
            }
        }
    }
    console.log(rows, cols);       
};