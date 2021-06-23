/**
valid
["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"], 
while the following are not valid numbers: ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"].
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    // index of anything other than e/E
    // index of - / + not 0 or not behind e/E
    // index of . after e/E
    for(var n = 0; n < 26; n++){
        var chrCap = String.fromCharCode(65 + n);
        var chr = String.fromCharCode(97 + n);
        if(n != 4  && (s.indexOf(chr) || s.indexOf(chrCap))){
            return false
        }
        else if (n==4){
            var firste = s.indexOf(chr) || s.indexOf(chrCap);
            if(firste){
                if(firste != s.LastIndexOf(chr) || s.LastIndexOf(chrCap))
                    return false;
            }
        }
        //console.log(chrCap, chr, n);
    }
    return true;
};

console.log(isNumber("1E1"));