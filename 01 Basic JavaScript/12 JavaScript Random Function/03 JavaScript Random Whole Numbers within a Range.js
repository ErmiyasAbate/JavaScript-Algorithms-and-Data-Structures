function randomRange(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

console.log(randomRange(8, 14));