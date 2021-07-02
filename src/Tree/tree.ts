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

  get height() {
    const calcHeight = (current = this.root): number => {
      if (!current) return 0;
      return 1 + Math.max(calcHeight(current.left), calcHeight(current.right));
    };
    return calcHeight();
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

function nodeAtDistance(from: TreeNode<number>, root: TreeNode<number>, k: number) {
  const nodes: number[] = [];
  function nodeBelow(current = from, distance = k) {
    if (!current || k < 0) return;
    if (distance === 0) {
      nodes.push(current.data);
      return;
    }
    current.left && nodeBelow(current.left, distance - 1);
    current.right && nodeBelow(current.right, distance - 1);
  }
  if (!root) return null;
  if (root === from) {
    nodeBelow();
    return 0;
  }
  nodeBelow();
  console.log(nodes);
}

const tre = new Tree<number>();

[20, 8, 22, 4, 12, 10, 14].forEach((val) => tre.add(val));
nodeAtDistance(tre.root!.left!, tre.root!, 2);
