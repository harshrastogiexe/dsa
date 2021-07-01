class TreeNode<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  data: T;

  constructor(data: T) {
    this.data = data;
  }
}

class Tree<T> {
  root: TreeNode<T> | null = null;

  traverse(
    callback: (val: T) => void,
    direction: 'INORDER' | 'PREORDER' | 'POSTORDER' = 'INORDER'
  ) {
    const _traverse = (node: TreeNode<T> | null = this.root) => {
      if (!node) return;
      switch (direction) {
        case 'INORDER': {
          node.left && _traverse(node.left);
          callback(node.data);
          node.right && _traverse(node.right);
          return;
        }
        case 'PREORDER': {
          node.left && _traverse(node.left);
          node.right && _traverse(node.right);
          callback(node.data);
          return;
        }
        case 'POSTORDER': {
          callback(node.data);
          node.left && _traverse(node.left);
          node.right && _traverse(node.right);
          return;
        }
      }
    };
    _traverse(this.root);
  }
}

const tre = new Tree<number>();

tre.root = new TreeNode(2);
tre.root.left = new TreeNode(1);
tre.root.right = new TreeNode(3);

tre.traverse(console.log, 'PREORDER');
