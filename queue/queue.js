class Queue {
    constructor() {
        this.data = [];
    }

    add(n) {
        this.data.unshift(n);
    }

    remove() {
        return this.data.pop();
    }

}

const queue = new Queue();
queue.add(5);
queue.add(7);
queue.add(2);
console.log(queue.remove());

module.exports = Queue;
