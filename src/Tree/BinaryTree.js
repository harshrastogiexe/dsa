class Block {
  left = null;
  right = null;

  constructor(data) {
    this.data = data;
  }

  get isLeaf() {
    return this.left === null && this.right === null;
  }

  get childCount() {
    const count = 0;
    if (this.left) count++;
    if (this.right) count++;
    return count;
  }
}

class BinaryTree {
  root = null;

  traverse(root = this.root) {
    if (!root) return;

    root.left && this.traverse(root.left);
    console.log(root.data);
    root.right && this.traverse(root.right);
  }

  add(data) {
    const node = new Block(data);
    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (current) {
      if (data <= current.data) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  _getSuccessor(root) {
    let current = root.right;
    while (current && current.left) current = current.left;
    return current;
  }

  delete(data, root = this.root) {
    if (!root) return null;

    if (data < root.data) root.left = this.delete(data, root.left);
    else if (data > root.data) root.right = this.delete(data, root.right);
    else {
      if (!root.left) return root.right;
      else if (!root.right) return root.left;
      else {
        const node = this._getSuccessor(root);
        console.log(node);
        root.data = node.data;
        root.right = this.delete(node.data, root.right);
      }
    }
    return root;
  }

  search(data) {
    if (!this.root) return null;
    let current = this.root;
    while (current) {
      if (data === current.data) return current;
      if (data < current.data) current = current.left;
      else current = current.right;
    }
    return null;
  }
}

//////////////////////////////////////////////
const tree = new BinaryTree();
[8, 3, 1, 6, 4, 7, 10, 14, 13].forEach((val) => tree.add(val));
const result = tree.search(14);
tree.delete(8);
tree.traverse();
// console.log(result);
