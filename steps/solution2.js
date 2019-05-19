function steps(n) {
    let pounds = '#';
    let spaces = '';
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            spaces += ' ';
        }
        console.log(pounds + spaces);
        spaces = '';
        pounds += '#';
    }
}