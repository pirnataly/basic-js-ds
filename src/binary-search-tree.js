const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/




class BinarySearchTree {
  constructor() {
    this.base = null;
  }

  root() {
      return this.base;
    // remove line with error and write your code here
  }

  add(data) {
    this.base = addWithin(this.base, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }





  remove(value) {
    this.root = removeNode(this.base, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        // equal - should remove this item
        if (!node.left && !node.right) {
          // put null instead of item
          return null;
        }
        if (!node.left) {
          // set right child instead of item
          node = node.right;
          return node;
        }

        if (!node.right) {
          // set left child instead of item
          node = node.left;
          return node;
        }

        // both children exists for this item
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  has(value) {
    return searchWithin(this.base, value);

    function searchWithin(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      return value < node.data ?
          searchWithin(node.left, value) :
          searchWithin(node.right, value);
    }
  }









  min() {
    if (!this.base) {
      return;
    }

    let node = this.base;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }



  find(value) {
    return search(this.base, value);

    function search(node, value) {
      if (!node) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      return value < node.data ?
          search(node.left, value) :
          search(node.right, value);
    }
  }
  max() {
    if (!this.base) {
      return;
    }

    let node = this.base;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

}

module.exports = {
  BinarySearchTree
};
