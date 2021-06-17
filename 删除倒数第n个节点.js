/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const nodeStack = [];
  let temp = head;
  while(temp) {
      nodeStack.push(temp);
      temp = temp.next;
  }
  const len = nodeStack.length;
  if (len === n) {
      return nodeStack[1] || null;
  } else {
      nodeStack[len - n-1].next = nodeStack[len-n].next;
      return nodeStack[0];
  }
  
};