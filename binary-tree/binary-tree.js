class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root = null;

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let current = this.root;

        while (true) {
            if (current.value > value) {
                // Left me daalo
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    find(value) {
        // BFS
        if (this.root === null) return null;
        const queue = [this.root];

        while (queue.length > 0) {
            const node = queue.shift();

            if (node.value === value) {
                return node;
            }

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        return null;
    }

    preorder() {
        const result = [];

        const dfs = (node) => {
            if (!node) return;

            result.push(node.value);   // Root
            dfs(node.left);       // Left
            dfs(node.right);      // Right
        };

        dfs(this.root);

        return result;
    }

    // TODO
    inorder() {

        const result = [];

        const dfs = (node) => {
            if (!node) return;

            dfs(node.left);       // Left
            result.push(node.value);   // Root
            dfs(node.right);      // Right
        };

        dfs(this.root);

        return result;
    }

    // TODO
    postorder() {

        const result = [];

        const dfs = (node) => {
            if (!node) return;

            dfs(node.left);       // Left
            dfs(node.right);      // Right
            result.push(node.value);   // Root
        };

        dfs(this.root);

        return result;
    }

    levelOrder() {
        const results = [];
        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();

            if (!node) {
                continue;
            }

            results.push(node.value);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return results;
    }

    // TODO
    height() {
        if (!this.root) {
            return 0;
        }
        const stack = [[this.root, 0]];
        let maxHeight = 0;

        while (stack.length > 0) {
            const [node, depth] = stack.pop();

            maxHeight = Math.max(maxHeight, depth)

            if (node.left) stack.push([node.left, depth + 1]);
            if (node.right) stack.push([node.right, depth + 1]);
        }

        return maxHeight;
    }

    // TODO
    size() {
        if (!this.root) {
            return 0;
        }

        let count = 0;
        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();
            count++;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return count;
    }

    print() {
        if (!this.root) {
            console.log('Empty tree');
            return;
        }

        const queue = [this.root];

        while (queue.length > 0) {
            const levelSize = queue.length;
            const level = [];

            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();

                level.push(node.value);

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            console.log(level.join('   '));
        }
    }
}




function test(name, condition) {
    console.log(`${condition ? 'PASS' : 'FAIL'} - ${name}`);
}

function arraysEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}


//        10
//       /  \
//      20   5
//     / \
//    30  2

const tree = new BinaryTree();

tree.root = new TreeNode(10);
tree.root.left = new TreeNode(20);
tree.root.right = new TreeNode(5);
tree.root.left.left = new TreeNode(30);
tree.root.left.right = new TreeNode(2);


// Empty tree
const emptyTree = new BinaryTree();

test(
    'empty tree preorder',
    arraysEqual(emptyTree.preorder(), [])
);

test(
    'empty tree inorder',
    arraysEqual(emptyTree.inorder(), [])
);

test(
    'empty tree postorder',
    arraysEqual(emptyTree.postorder(), [])
);

test(
    'empty tree level order',
    arraysEqual(emptyTree.levelOrder(), [])
);


// Traversals

test(
    'preorder traversal',
    arraysEqual(tree.preorder(), [10, 20, 30, 2, 5])
);

test(
    'inorder traversal',
    arraysEqual(tree.inorder(), [30, 20, 2, 10, 5])
);

test(
    'postorder traversal',
    arraysEqual(tree.postorder(), [30, 2, 20, 5, 10])
);

test(
    'level order traversal',
    arraysEqual(tree.levelOrder(), [10, 20, 5, 30, 2])
);


// Single node

const single = new BinaryTree();
single.root = new TreeNode(42);

test(
    'single node preorder',
    arraysEqual(single.preorder(), [42])
);

test(
    'single node inorder',
    arraysEqual(single.inorder(), [42])
);

test(
    'single node postorder',
    arraysEqual(single.postorder(), [42])
);

test(
    'single node level order',
    arraysEqual(single.levelOrder(), [42])
);