/** https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/797/
case senstive?
directional?

 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

/*
["A","B","C","E"]
["S","F","C","S"],
["A","D","E","E"]]
*/
var exist = function(board, word) {
    if(!board || !word){
        return false;
    }
    var result = false;
    for(var i = 0; i < board.length; i++){
        for(var j = i; i < board[i].length; j++){
            recursive(board, word, 1, board[0][0], result, i, j);
        }
    }
    return result;
};

var recursive = function(board, word, indexofword, curstring, result, x, y){
    console.log(indexofword, curstring, result, x, y);
    if(indexofword > word.length ){
        result = false;
        return;
    }
    if(indexofword == word.length){
        result = true;
        return;
    }
console.log("bbb",curstring, word.slice(0, indexofword));
    if(curstring === word.slice(0, indexofword)){
        if(x < board.length){//console.log("äaa",board[x+1][y]);
            recursive(board, word, indexofword++, curstring.concat(board[x+1][y]), result,x+1, y);
        }
        if(y < board[x].length){//"äaa",console.log(board[x][y+1]);
            recursive(board, word, indexofword++, curstring.concat(board[x][y+1]), result,x, y+1);
        }
        if(x > 0){//"äaa",console.log(board[x-1][y]);
            recursive(board, word, indexofword++, curstring.concat(board[x-1][y]), result,x-1, y);
        }
        if(y > 0){//"äaa",console.log(board[x][y-1]);
            recursive(board, word, indexofword++, curstring.concat(board[x][y-1]), result,x, y-1);
        }
    }
};


console.log(exist( [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"))