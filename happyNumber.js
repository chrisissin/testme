/** https://leetcode.com/explore/interview/card/top-interview-questions-medium/113/math/815/

 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n === 1) return true;
    if(n/10<1) return false;
    return recurs(n);
};

var recurs = function(n){
    var out = n.toString();
    out = out.split('');
    var sum = 0;
    for(var i = 0; i < out.length; i++){
        var sq =  Math.pow(parseInt(out[i]),2);
        //console.log(sq, sum)
        sum += sq;
    }
    console.log(sum);
    if(sum === 1) return true;
    else return recurs(sum);
}