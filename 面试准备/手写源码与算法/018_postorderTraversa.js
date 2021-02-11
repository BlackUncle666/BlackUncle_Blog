function pos(root) {
    if (root) {
      let stack1 = [];
      let stack2 = [];
      // 后序遍历是先左再右最后根
      // 所以对于一个栈来说，应该先 push 根节点
      // 然后 push 右节点，最后 push 左节点
      stack1.push(root);
      while (stack1.length > 0) {
        root = stack1.pop();
        stack2.push(root);
        if (root.left) {
          stack1.push(root.left);
        }
        if (root.right) {
          stack1.push(root.right);
        }
      }
      while (stack2.length > 0) {
        console.log(s2.pop());
      }
    }
  }