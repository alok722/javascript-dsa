/**
 * INTRODUCTION: TREE -> Binary Tree
 * A Binary Tree because it has max two children
 * In Full Binary tree all nodes have two children or no children
 * A Perfect Binary Tree is a Binary Tree where all levels are completely filled except the last level
 * Parent node has two children -> Left and Right -> Children are siblings.
 * Node that does not have any children is called a leaf node
 */

/**
 * Binary Tree -> Binary Search Tree
 * Binary Search Tree is a Binary Tree where the value of each node is greater than or equal to the value of its left child and less than or equal to the value of its right child.
 * Best Case -> O(log n) -> Logarithmic time complexity; In each step we need to go to the left or right child
 * Worst case -> O(n) -> Linear time complexity -> When node only consists if larger node, we need to iterate through all nodes
 */

// Binary Search Tree

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    // No need to pass in a value, because we will be adding nodes to the tree
    constructor() {
        this.root = null;
    }
    insert(value) {
        /**
         * Create a new node with the value
         * If the tree is empty, make the new node the root
         * let temp = this.root
         * while loop
            * if newNode === temp return undefined 
            * if less then left, if greater then right
            * if null insert newNode else move to next node
         */
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) return undefined;
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }
}

let myTree = new BST();
myTree;