// Implementing a stack DS in JS, Imma use Arrays
// All ops are O(1)
// LIFO
// Add to the array and remove from its right end
// [1, 2, 3, 4, 5]
class Stack {
    store = [];

    push(x) {
        this.store.push(x)
    }
    pop() {
        return this.store.pop() ?? null;
    }
    peek() {
        return this.store[this.store.length - 1] ?? null;
    }
    isEmpty() {
        return this.store.length === 0;
    }
    size() {
        return this.store.length;
    }
}

const st = new Stack();

st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.push(5);

const sizeOfStack = st.size();

for (let i = 0; i < sizeOfStack; i++) {
    console.log(st.pop());
}

/*
1. Reverse a string using a stack

Input: 'hello' → Output: 'olleh'

2. Check balanced parentheses

Input: '({[]})' → true; '({[})' → false

3. Implement a stack that returns the minimum element in O(1)

Operations: push, pop, top, getMin
*/

// 1. Lets fucking reverse a string like retards
const st1 = new Stack();
st1.push('h');
st1.push('e');
st1.push('l');
st1.push('l');
st1.push('o');

const size1 = st1.size();
let ans = '';
for (let i = 0; i < size1; i++) {
    ans += st1.pop();
}

console.log('Reversed string ->', ans);

// 2. Check balanced parentheses
function isBalancedParantheses(s) {
    const st = new Stack();

    for (const ch of s) {
        if (
            ch === '(' ||
            ch === '{' ||
            ch === '['
        ) {
            st.push(ch);
        } else {
            const popper = st.pop();
            if (
                ch === ')' && popper !== '(' ||
                ch === '}' && popper !== '{' ||
                ch === ']' && popper !== '['
            ) {
                return false;
            }
        }
    }

    return true;
}

console.log('isBalancedParantheses [{()}] -> ', isBalancedParantheses('[{()}]'));
console.log('isBalancedParantheses {[{(})}] -> ', isBalancedParantheses('{[{(})}]'));


// 3. Implement a stack that returns the minimum element in O(1)
// Chalo time to create a minstack

class MinStack {
    stack = [];
    minStack = [];

    push(x) {
        this.stack.push(x);
        if (
            this.minStack.length === 0 ||
            x <= this.minStack[this.minStack.length - 1]
        ) {
            this.minStack.push(x);
        }
    }
    pop() {
        if (this.stack.length === 0) {
            return null;
        }
        const value = this.stack.pop();

        if (value === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return value ?? null;
    }
    peek() {
        return this.stack[this.stack.length - 1] ?? null;
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    size() {
        return this.stack.length;
    }

    min(){
        return this.minStack[this.minStack.length - 1] ?? null;
    }

    debug(){
        console.log('stack', this.stack);
        console.log('minStack', this.minStack);
        
    }
}

const stck3 = new MinStack();

[-210, 10, 56, 34, 21, 99, 54, 5, 77, 83, 2, 12, -310, 25434].forEach((val) => {
    stck3.push(val);
})

console.log('O(1) MinStack, minimum elem =>', stck3.min()) // -310

stck3.pop();
stck3.pop();

console.log('O(1) MinStack, minimum elem =>', stck3.min()) // -210

