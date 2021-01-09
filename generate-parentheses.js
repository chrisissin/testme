/**
 * @param {number} n
 * @return {string[]}
 ()()
 (())
 */
var generateParenthesis = function(n) {
    var res = [];
    backtrack(res, "",0,0,n);
    return res;
};

var backtrack = function(ans, cur, open, close, n){
     console.log(ans, cur, open, close)
        if (cur.length == n * 2) {
            ans.push(cur);
            return;
        }
       
        if (open < n)
            backtrack(ans, cur+"(", open+1, close, n);
        if (close < open)
            backtrack(ans, cur+")", open, close+1, n);    
}

/*
2
0 < 2 (  
            0 < 1 )
1<2 ((
            1 <2 

*/
/*
class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> ans = new ArrayList();
        backtrack(ans, "", 0, 0, n);
        return ans;
    }

    public void backtrack(List<String> ans, String cur, int open, int close, int max){
        if (cur.length() == max * 2) {
            ans.add(cur);
            return;
        }
System.print(cur + " ")
        if (open < max)
            backtrack(ans, cur+"(", open+1, close, max);
        if (close < open)
            backtrack(ans, cur+")", open, close+1, max);
    }
}*/