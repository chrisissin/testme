/**
 * https://leetcode.com/problems/delete-operation-for-two-strings/solution/
see which is shorter 
index of short string in long string
then we have 0, index,short length, long length
step = index - 0 + long length - short length
consider mutiple shor
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if(word1.length == word2.length){
         for(let i = 1; i < word1.length; i++){
            if(word1.substring(0,i)==word2.substring(0,i) 
              || word1.substring(word1.length-1-i,word1.length-1)==word2.substring(word1.length-1-i,word1.length-1) 
              ){//console.log(word1.substring(word1.length-1-i,word1.length-1), word2.substring(word1.length-1-i,word1.length-1))
                return i;
            }else if( word1.substring(0,i)==word2.substring(word1.length-1-i,word1.length-1) 
               || word1.substring(word1.length-1-i,word1.length-1)==word2.substring(0,i) )
                {
                    return i+1;
                }
             
         }   
    }
    
    let shortword = word1;
    let longword = word2;
    if(word1.length > word2.length){
        shortword = word2;
        longword = word1;
    }
    let shortstart = longword.indexOf(shortword);
    //console.log(shortstart, longword, shortword)
    return shortstart-0+longword.length-shortword.length;
};