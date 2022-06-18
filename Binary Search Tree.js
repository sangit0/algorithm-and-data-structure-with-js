class NodeTree {
  value = null;
  left = null;
  right = null;

  constructor(val) {
    this.value = val;
  }
}

class Tree {
  head = null;

  constructor() {}

  insertNewElement(value) {
    const newNode = new NodeTree(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      let rootParent = null;

      while (current !== null) {
        rootParent = current;
        if (current.value > newNode.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }

      if (!rootParent) {
        rootParent = newNode;
      } else if (value > rootParent.value) {
        rootParent.right = newNode;
      } else {
        rootParent.left = newNode;
      }
    }
  }

  insertRecursion(value) {
    const newNode = new NodeTree(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      const recursive = (node) => {
        if (node.value < newNode.value) {
          if (node.right === null) {
            node.right = newNode;
          } else recursive(node.right);
        } else {
          if (node.left === null) {
            node.left = newNode;
          } else recursive(node.left);
        }
      };

      recursive(this.head);
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (node !== null) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }

  maxDepth = function (root) {
    const calc = (node) => {
      if (!node) return 0;
      return Math.max(1 + calc(node.left), 1 + calc(node.right));
    };
    return calc(root);
  };
}

const tree = new Tree();
tree.insertRecursion(5);
tree.insertRecursion(1);
tree.insertRecursion(0);
tree.insertRecursion(4);
tree.insertRecursion(1);
console.log("Max depth:", tree.maxDepth(tree.head));
tree.inOrder(tree.head);
