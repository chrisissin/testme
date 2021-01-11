/*
https://leetcode.com/problems/sudoku-solver/

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

Input: board = 
[
["5","3",".[124]",".[2]","7",".[2468]",".[189]",".[1249]",".[248]"],
["6",".",".","1","9","5",".",".","."],
[".[1,2,4],","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".[1,3,9]","6",".",".",".",".","2","8","."],
[".[2,3]",".",".","4","1","9",".",".","5"],
[".[1,2,3]",".",".",".","8",".",".","7","9"]]
Output: 
[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit or '.'.
It is guaranteed that the input board has only one solution.

input array of arrays
out array of arrays
constrain
  board.lenght = 9
  board[i].length = 9
  only one solution
  
read in all row and column
 as read in put into 
  row[1:[5,3,7],2:[6,1,9,5]]
  column[1:[5,6,8,7],2:[]]
  subbox[1:[536],2:[]]

loop row / column
  as at each box find all possible answer for each box by 
  deduct 1-9 from it's row, column and subbox

loop row / column
  as at each box with list find uniq 
  
loop row / column
  as at each box with list find uniq 
  
*/