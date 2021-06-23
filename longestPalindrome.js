/** http://leetcode.com/problems/longest-palindromic-substring/
 * babab
loop through all character as starting point
    loop through rest of charc and
        find pal 
            find mid, then compare two side
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longestcount = 0;
    let longest = '';
    let hash = {};
    for(let i = 0; i < s.length; i++){
        for(let y = 1; y <= s.length; y++){
            //console.log(i,y,s.substring(i,y) ,longest);
            if(findPalindrome(s.substring(i,y),hash)){
                if(y-i>longestcount){
                    longestcount = y-i;
                    longest = s.substring(i,y);
                }
            }
        }
    }
    return longest;
};

var findPalindrome = function(s, hash){
    if(hash[s]) return false;
    hash[s] = true;
    let mid = Math.floor(s.length/2);
    for(let i = 0; i < mid; i++){
        if(s[i] !== s[s.length-1-i]) return false;
    }
    return true;
};
console.time('doSomething')
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
console.timeEnd('doSomething')