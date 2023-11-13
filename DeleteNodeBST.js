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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  const deleteBSTNode = (node, value, parent = null) => {
    if (!node) return null;

    if (node.val > value) {
      parent = node;
      node.left = deleteBSTNode(node.left, value);
    } else if (node.val < value) {
      parent = node;
      node.right = deleteBSTNode(node.right, value);
    } else {
      if (node.val === value) {
        if (node.left && node.right) {
          const min = getMinValue(node.right);
          node.val = min;
          deleteBSTNode(node.right, node.val, node);
        } else if (!parent) {
          if (node.left) {
            node.val = node.left.val;
            node.right = node.left.right;
            node.left = node.left.left;
          } else if (node.right) {
            node.val = node.right.val;
            node.left = node.right.left;
            node.right = node.right.right;
          } else {
            return null;
          }
        } else if (parent.left === node) {
          parent.left = node.left || node.right;
        } else if (parent.right === node) {
          parent.right = node.left || node.right;
        }
      }
    }

    return node;
  };

  const getMinValue = (node) => {
    if (!node.left) return node.val;

    return getMinValue(node.left);
  };

  return deleteBSTNode(root, key);
};
