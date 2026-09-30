// Singly Linked List
//
// Node:
// [value | next]
//
// List:
// head → 10 → 20 → 30 → null
//
// Target complexities:
// append      O(n)   // we'll optimize with tail later
// prepend     O(1)
// removeFirst O(1)
// removeLast  O(n)
// find        O(n)
// contains    O(n)
// insertAt    O(n)
// removeAt    O(n)
// reverse     O(n)
// print       O(n)
// size        O(1)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head = null;
    size = 0;

    // Add to the end
    append(value) {
        this.size++;

        if (this.head === null) {
            this.head = new Node(value);
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(value);
    }

    // Add to the beginning
    prepend(value) {
        const newHead = new Node(value);
        newHead.next = this.head;
        this.head = newHead;
        this.size++;
    }

    // Remove first node
    removeFirst() {
        if (this.head === null) {
            return;
        }

        this.head = this.head.next;
        this.size--;
    }

    // Remove last node
    removeLast() {
        let current = this.head;

        // 0 or 1 size LL
        if (current === null) {
            return null;
        }
        // 1 size
        if (current.next === null) {
            this.size--;
            this.head = null;
        }

        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
        this.size--;
    }

    // Get value at index
    get(index) {
        let cnt = 0;
        let current = this.head;
        while (current) {
            if (cnt === index) {
                return current.value;
            }
            current = current.next;
            cnt++;
        }

        return -1;
    }

    // Insert value at index
    insertAt(index, value) {
        if (index === 0) {
            this.prepend(value);
            return;
        }
        let cnt = 0;
        let current = this.head;
        while (current) {
            if (cnt === index) {
                break;
            }
            current = current.next;
            cnt++;
        }

        const next = current.next;
        current.next = new Node(value);
        current.next.next = next;

        this.size++;
    }

    // Remove node at index
    removeAt(index) {
        let cnt = 0;
        let current = this.head;
        while (current.next) {
            if (cnt === index) {
                break;
            }
            current = current.next;
            cnt++;
        }
        current = current.next;
        this.size--;
    }

    // Find first node containing value
    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }

        return null;
    }

    // Check whether value exists
    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    // Reverse the linked list
    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    // Return array representation
    toArray() {
        const res = [];
        let current = this.head;
        while (current) {
            res.push(current.value);
            current = current.next;
        }

        return res;
    }

    // Print linked list
    print() {
        console.log(this.toArray().join(' -> '))
    }

    // Check if empty
    isEmpty() {
        return this.head === null;
    }
}
