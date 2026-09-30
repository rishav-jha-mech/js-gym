/*
Implement a Stack using a Linked List

Operations:
- push
- pop
- peek
- isEmpty
- size

All operations should be O(1)
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    head = null;
    length = 0;

    push(x) {
        // Create a new head, and head.next points to current head
        const newHead = new Node(x);
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
    }

    pop() {
        if (this.head === null) {
            return null;
        }
        const val = this.head.value;
        // Delete head node
        this.head = this.head.next;
        this.length--;

        return val;
    }

    peek() {
        return this.head?.value ?? null;
    }

    isEmpty() {
        return this.head === null;
    }

    size() {
        return this.length;
    }
}


// Test
const st = new Stack();

st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.push(5);

console.log(st.peek());    // 5
console.log(st.size());    // 5

console.log(st.pop());     // 5
console.log(st.peek());    // 4

st.pop();
st.pop();
st.pop();
st.pop();

console.log(st.peek());    // null
console.log(st.isEmpty()); // true
console.log(st.size());    // 0