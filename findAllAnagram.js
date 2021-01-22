/*
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

*/

function findAllAnagrams(s, p){
	var result = [];
	var hashp = [];

	for(var j = 0; j < p.length ; j++){
		//console.log(p.charAt(j))
		if(!hashp[p.charAt(j)])
			hashp[p.charAt(j)]=1;
		else
			hashp[p.charAt(j)]++;
	}
	console.log("hashp ", hashp);
	if(s.length && p.length){
		for(var i = 0; i < s.length; i++){
			if(isAnagram(s.slice(i,i+p.length),hashp,p.length))
			{
				result.push(i);
			}
		}
	}
	return result;
}

function isAnagram(s, hashp,rem){
	var result = false;
	var p = [];
	Object.assign(p, hashp);//[...hashp];
	if(s.length != rem)
		return result;
	console.log(`s `, s, `p `, p,`re `,rem);
	for(var i = 0; i < s.length; i++){
		console.log(s.charAt(i))
		if(!p[s.charAt(i)])
			return result;
		p[s.charAt(i)]--;
		rem--;
	}
	console.log(`s `, s, `p `, p,`re `,rem);

	if(rem == 0)
		result = true;
	return result;
}

var findAnagrams = function(s, p) {
    var mapofp = [];
    var res = [];
    for(var i = 0; i < p.length; i++){
        if(!mapofp[p[i]])
            mapofp[p[i]]=1;
        mapofp[p[i]]++;
    }
    for(var i = 0, j = p.length;j < s.length; i++, j++ ){
        var rem = p.length;
        for(var k = i; k < j ; k++){
            if(mapofp[s[k]]-- > 0){
                rem--;
            }
            console.log(i, j,k,s[k],rem );
        }
        if(rem == 0){
            console.log(mapofp)
            res.push(i);
        }
        if(mapofp[i]++ >= 0) rem++;
    }
    return res;
};
console.log(findAllAnagrams("abab","ab"))
//console.log(findAllAnagrams("cbaebabacd", "abc" ))
//console.log(findAnagrams("cbaebabacd", "abc" ))
//cba abc
//bae 