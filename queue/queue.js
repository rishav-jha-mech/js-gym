// Queue = FIFO
// First In, First Out
//
// enqueue -> O(1)
// dequeue -> O(1)
// peek    -> O(1)
// isEmpty -> O(1)
// size    -> O(1)

class Queue {
    store = [];
    front = 0;

    enqueue(x) {
        this.store.push(x)
    }

    dequeue() {
        return this.store.shift() ?? null;
    }

    peek() {
        return this.store[0];
    }

    isEmpty() {
        return this.store.length === 0;
    }

    size() {
        return this.store.length;
    }
}

const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.peek());     // 10
console.log(q.dequeue()); // 10
console.log(q.dequeue()); // 20

q.enqueue(40);

console.log(q.peek());     // 30
console.log(q.size());     // 2

console.log(q.dequeue()); // 30
console.log(q.dequeue()); // 40

console.log(q.isEmpty()); // true
console.log(q.dequeue()); // null