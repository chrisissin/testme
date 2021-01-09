/**
https://leetcode.com/problems/number-of-1-bits/
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let y = 0;
    let mask = 1;
    //console.log(typeof n );
    for(let i = 0; i < 32; i++){
        if((n & mask) != 0)
            y++;
        mask <<=1;
    }
    return y;
};