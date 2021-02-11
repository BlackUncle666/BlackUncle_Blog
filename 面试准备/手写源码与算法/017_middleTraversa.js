function mid(root) {
    if (root) {
      let stack = [];
      // 中序遍历是先左再根最后右
      // 所以首先应该先把最左边节点遍历到底依次 push 进栈
      // 当左边没有节点时，就打印栈顶元素，然后寻找右节点
      // 对于最左边的叶节点来说，可以把它看成是两个 null 节点的父节点
      // 左边打印不出东西就把父节点拿出来打印，然后再看右节点
      while (stack.length > 0 || root) {
        if (root) {
          stack.push(root);
          root = root.left;
        } else {
          root = stack.pop();
          console.log(root);
          root = root.right;
        }
      }
    }
  }