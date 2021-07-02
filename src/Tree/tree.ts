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
          callback(node.data);
          node.left && _traverse(node.left);
          node.right && _traverse(node.right);
          return;
        }
        case 'POSTORDER': {
          node.left && _traverse(node.left);
          node.right && _traverse(node.right);
          callback(node.data);
          return;
        }
      }
    };
    _traverse(this.root);
  }

  add(data: T) {
    const node = new TreeNode(data);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (current) {
      if (data <= current.data) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }

  static buildTree(preOrder: string, inOrder: string) {
    const tree = new Tree<string>();
    let preIndex = 0;

    const build = (inLeftIndex = 0, inRightIndex = inOrder.length - 1) => {
      if (inLeftIndex > inRightIndex) return null;
      const root = new TreeNode(preOrder[preIndex]);
      preIndex++;

      if (inRightIndex === inLeftIndex) return root;

      let i = inLeftIndex;
      for (; i <= inRightIndex; i++) if (root.data === inOrder[i]) break;

      root.left = build(inLeftIndex, i - 1);
      root.right = build(i + 1, inRightIndex);

      return root;
    };

    tree.root = build();
    return tree;
  }
}

function maxNode(root: TreeNode<number>): number | undefined {
  if (!root) return;

  const leftTreeMax = root.left ? maxNode(root.left)! : root.data;
  const rightTreeMax = root.right ? maxNode(root.right)! : root.data;

  return Math.max(root.data, leftTreeMax, rightTreeMax);
}
const tre = new Tree<number>();

tre.add(2);
tre.add(1);
tre.add(3);
tre.add(4);
tre.add(0);
tre.add(2);
tre.add(3);
// tre.traverse(console.log);
Tree.buildTree('12435', '42153').traverse(console.log);
