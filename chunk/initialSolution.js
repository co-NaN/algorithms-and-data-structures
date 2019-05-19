function chunk(array, size) {
    const chunked = [];
    let chunk = [];

    if (array.length <= size) { // optimization
        chunked.push(array);
    } else {
        for (let element of array) {
            if (chunk.length === size) {
                chunked.push(chunk);
                chunk = [];
            }
            chunk.push(element);
        }
        chunked.push(chunk); // add the rest
    }
    return chunked;
}