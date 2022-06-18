/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *   4
 * 3  5
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {

    let min = Number.MIN_VALUE;
    let max = Number.MAX_VALUE;

    const isBST = (node, min, max) => {

        if (node === null) {
            return true;
        }

        if ( node.val < min && node.val > max) {
            return false;
        }

        return isBST(node, min, node.val -1) && isBST(node, node.val +1, max)
    };

    return isBST(root);

};