/*
Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

If multiple answers are possible, return any of them.

It is guaranteed that the length of the answer string is less than 104 for all the given inputs.


*/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    var ans = numerator / denominator;
    ans = ans.toString();
    ans = ans.split('.')[1];
    var map = new Map();
    for(var i =0; i<ans.length; i++){
    	if(map.get(ans.charAt(i))){
    		ans = '('+ans.substring(0, i)+')';
    		break;
    	}else{
    		map.set(ans.charAt(i),1);
    	}
    }
    return '0.'+ans.toString();
};

console.log(fractionToDecimal(611,4950));