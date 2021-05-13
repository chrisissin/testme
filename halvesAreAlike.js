/**
https://leetcode.com/explore/challenge/card/april-leetcoding-challenge-2021/593/week-1-april-1st-april-7th/3699/
search from head and tail
compare each charc if contains [vow]
check count
length / 2 = half (loop count)
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    // book 4 2
    let halfcount = s.length / 2;
    let front = 0, back = 0;
    let vow = ['a','e','i','o','u'];
    for(let i = 0, j = s.length-1; i < halfcount;i++, j--){
        //console.log(s[i], s[j]);
        for(let y =0; y<vow.length;y++){
            //console.log(s[i], 
            if(s[j].toLowerCase() ==vow[y])
                back++;
            if(s[i].toLowerCase() ==vow[y])
                front++;
        }
    }
    return front==back;
};

halvesAreAlike('book');

