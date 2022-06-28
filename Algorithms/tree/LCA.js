/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let lca = null;
  const hasCommonPath = (node) => {
    if (!node) return false;

    const isLeft = hasCommonPath(node.left);
    const isRight = hasCommonPath(node.right);

    const isMid = node == p || node == q;

    if ((isLeft && isMid) || (isRight && isMid) || (isLeft && isRight)) {
      lca = node;
    }
    return isLeft || isRight || isMid;
  };

  hasCommonPath(root);
  return lca;
};
