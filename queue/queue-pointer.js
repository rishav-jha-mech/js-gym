// Queue = FIFO
// First In, First Out
//
// enqueue -> O(1)
// dequeue -> O(1)
// peek    -> O(1)
// isEmpty -> O(1)
// size    -> O(1)

/* 
    Bruh why does this exists ?
    Yeah you get O(1) ops, but what about the increasing size of the Queue ?
    Yeah cunt what happens when we add queue million elems ?
    RAMs are expensive these days, thanks to cunts like Sam and Dario
    We cant practically use this in production system
*/

class Queue {
    store = [];
    front = 0;

    enqueue(x) {
        this.store.push(x)
    }

    dequeue() {
        if (this.isEmpty()) return null;

        return this.store[this.front++];
    }

    peek() {
        if (this.isEmpty()) return null;

        return this.store[this.front];
    }

    isEmpty() {
        return (this.store.length - this.front) === 0;
    }

    size() {
        return this.store.length - this.front;
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