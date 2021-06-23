/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let numstring = num.toString();
    for(let i = 0; i < numstring.length; i++){
    	if(numstring[i] == '6'){
    		return numstring.substr(0,i)+'9'+numstring.substr(i+1,numstring.length-1);
    	}
    }
    return numstring;
};

console.log(maximum69Number(966));