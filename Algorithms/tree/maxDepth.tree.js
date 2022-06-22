/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    
    const countLevel  = (node, level = 0) =>{

        if (node === null) {
            return level;
        }

       return  Math.max(countLevel(node.left , level+1, countLevel(node.right , level+1))) 
    };
};

