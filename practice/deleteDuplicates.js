/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // Edge case, null input
    if (head == null) {
        return head;
    }
    let node = head;
    // Iterate through all nodes
    while (node.next != null) {
        let value = node.val;
        // Duplicate values found
        if (value == node.next.val) {
            // Duplicate is end of list
            node.next = node.next.next == null ? null : node.next.next;    
        } else {
            node = node.next;
        }
    }
    return head;
};
console.log(deleteDuplicates([1,1,2]));
/*

var deleteDuplicates = function(head) {
    const dedupe = (root) => {
        if (!root) return;
        if (root.next && root.next.val === root.val) {
            root.next = root.next.next;
            dedupe(root);
        } else {
            dedupe(root.next)
        }
    }
    
    dedupe(head);
    return head;
};
*/