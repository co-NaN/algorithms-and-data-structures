function count(items, threshold) {
    let counter = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i] > threshold) {
            counter++;
        }
    }
    return counter;
}

console.log(count([1, 2, 48, 49, 233, -1], 45));
