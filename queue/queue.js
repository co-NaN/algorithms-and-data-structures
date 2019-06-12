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

module.exports = Queue;
