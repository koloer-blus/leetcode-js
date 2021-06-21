/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let mergeTwoLists = (l1, l2) => {
  let head = new ListNode(), pre = head
  while (l1 && l2) {
      if(l1.val > l2.val){
          pre.next = l2
          l2 = l2.next
      } else {
          pre.next = l1
          l1 = l1.next
      }
      pre = pre.next
  }
  pre.next = l1 ? l1 :l2
  return head.next
};