/*
https://leetcode.com/problems/valid-sudoku/

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 
 input array of arrays 
 output bool
 constrain 
  each row / array no duplicate
  each colunm array[i][1] no duplicate
  3x3 sub box no duplicate array[i+2][j+2]
  
  //O[nm]
check row
  loop through all arrays, 
    loop each array find duplicates  read into set
      if duplicate 
        return false
    
if all column are the same length    
check column 
  loop through all column j< array[1].lenght 
    loop each row array[i][j] read into set
      if duplicate 
        return false
  
check subbox
for each 3 rows
  for each 3 columns
    helper function to check each sub box
      input subox
      loop xy to read into set
        if duplicate 
          return false
*/