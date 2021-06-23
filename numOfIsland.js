/**
https://leetcode.com/problems/number-of-islands/
loop through
if found 1 
    add island count
    go to its neighbor (right and down) change to 0
    
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j <grid[i].length; j++){
            let cur = 1;
            if(i+1 < grid.length && grid[i][j] ==1){
                if(grid[i+1][j]==1){
                    grid[i+1][j]=0;
                    cur++;
                } 
                if(grid[i][j+1]==1){
                    grid[i][j+1]=0;
                    cur++;
                }
            }
            max = Math.max(max, cur);
        }
    }
    return max;
};
let grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];
console.log(maxAreaOfIsland(grid));