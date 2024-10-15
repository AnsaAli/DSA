class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNewNode(this.root, newNode);
    }
  }

  insertNewNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNewNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNewNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  //BFS
  levelOrder() {
    if (this.isEmpty()) {
      console.log("Tree is empty");
      return;
    }
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  //find the min value
  minValue(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minValue(root.left);
    }
  }

  //find the max
  maxValue(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.maxValue(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // Node with only one child or no child
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }
        // Node with two children: Get the inorder successor (smallest in the right subtree)
        root.value = this.minValue(root.right);
        // Delete the inorder successor
        root.right = this.deleteNode(root.right, root.value);
      
    }
    return root;
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);
bst.insert(3);

bst.levelOrder();

// console.log(bst.root)
// console.log(bst.search(bst.root, 10))
// console.log(bst.search(bst.root, 50))

console.log("min value", bst.minValue(bst.root));
console.log("max value", bst.maxValue(bst.root));

console.log("-------------------------------------");

bst.delete(5);
bst.levelOrder();


