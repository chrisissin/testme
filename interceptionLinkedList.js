/** https://leetcode.com/explore/interview/card/top-interview-questions-medium/107/linked-list/785/
Traverse the first list to the last while traversing store each note does note and traverse and the next list if any note has already happened in the last that’s 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var currA = headA;
    while(currA.next !== null){
        //console.log(currA.next);
        currA.next.last = currA.val;
        //console.log(currA.next.last);
        currA = currA.next;
    }
    var currB = headB;
    //var ret = null;
    while(currB.next !== null){
        //console.log(currB, currB.last);
        if(currB.last)
        {
            console.log(currB.val)
            return currB;
        }
        currB = currB.next;
    }
    return null;
};