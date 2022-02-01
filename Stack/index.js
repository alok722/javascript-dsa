/**
 * Implementing Stack using Linked List
 * First decide which end of the list to use as the stack
 * With front push and pop both is O(1) whereas back push and pop are O(1) & O(n)
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }
    // Similar to unshift in LL
    push(value) {
        // Create new node
        let newNode = new Node(value);
        // If there is no head, make new node the head and tail
        if (this.length === 0) {
            this.top = newNode;
        } else {
            // Otherwise, insert new node at the beginning
            newNode.next = this.top;
            this.top = newNode;
        }
        // Increment length
        this.length++;
        return this;
    }
    // Similar to shift in LL
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.top;
        this.top = this.head.next;
        temp.top = null; // remove the reference to the next node
        this.length--;
        return temp;
    }
}