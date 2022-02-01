class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    // Insert at the end of the list
    push(value) {
        // Create new node
        let newNode = new Node(value);
        // If there is no head, make new node the head and tail
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Otherwise, insert new node at the end
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // Increment length
        this.length++;
        return this;
    }
    // Remove from the end of the list
    pop() {
        // If there is no head, return undefined
        if (!this.head) return undefined
        // We are doing follow operation to set pre tp node just before the tail
        let temp = this.head
        let pre = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        // If the length is 0, set head and tail to null
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }
    // Insert at the beginning of the list
    unshift(value) {
        // Create new node
        let newNode = new Node(value);
        // If there is no head, make new node the head and tail
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Otherwise, insert new node at the beginning
            newNode.next = this.head;
            this.head = newNode;
        }
        // Increment length
        this.length++;
        return this;
    }
    // Remove at the beginning of the list
    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null; // remove the reference to the next node
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }
    // get the node at the index
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let counter = 0;
        let temp = this.head;
        while (counter !== index) {
            temp = temp.next;
            counter++;
        }
        return temp;
    }
    // set the value at the index
    set(index, value) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = value;
            return true;
        }
        return false;
    }
    // insert a node at the index
    insert(index, value) {
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        if (index < 0 || index >= this.length) return false;
        let newNode = new Node(value);
        let tempNode = this.get(index - 1);
        newNode.next = tempNode.next;
        tempNode.next = newNode;
        this.length++;
        return true;
    }
    // remove a node at the index
    remove(index) {
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        if (index < 0 || index >= this.length) return undefined;
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }
    // reverse the list
    reverse() {
        let tempNode = this.head;
        this.head = this.tail;
        this.tail = tempNode;
        // 3 node, prev is null which is before head, temp is at head, next is at head.next
        let prev = null;
        let next = tempNode.next;
        for (let i = 0; i < this.length; i++) {
            next = tempNode.next;
            tempNode.next = prev;
            prev = tempNode;
            tempNode = next;
        }
        return this;
    }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.pop();
myLinkedList.unshift(4);
myLinkedList.shift();
myLinkedList.get(1);
myLinkedList.set(1, 10);
myLinkedList.insert(1, 20);
myLinkedList.remove(1);

let myLinkedList2 = new LinkedList(1);
myLinkedList2.push(2);
myLinkedList2.push(3);
myLinkedList2.reverse();
