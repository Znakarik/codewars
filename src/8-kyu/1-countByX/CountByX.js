function countBy(x, n) {
    let result = [];
    const startNumber = x;
    result.push(x);
    while (x !== startNumber * n) {
        result.push(x + startNumber);
        x = x + startNumber;
    }
    return result;
}

module.exports = {countBy};