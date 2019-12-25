/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    //Base case
    if (root == null) {
        return [];
    }
    let result = [];
    helper(root, 0, result);
    return result.reverse();
};
function helper(root, depth, tracker) {
    if (root === null) {
        return;
    }
    
    tracker[depth] = tracker[depth] || [];
    tracker[depth].push(root.val);
    
    helper(root.left, depth + 1, tracker);
    helper(root.right, depth + 1, tracker);
}