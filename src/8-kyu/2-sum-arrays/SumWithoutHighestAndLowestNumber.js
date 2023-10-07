function sumArray(array) {
    if (array === null || array === undefined || array.length < 3) {
        return 0;
    }
    const compareFunc = (left, right) => left > right ? 1 : -1;

    let sorted = array.sort(compareFunc);
    let exceptMinMax = sorted.slice(1, sorted.length - 1);
    return exceptMinMax.reduce((acc, value) => {
            return acc + value;
        }, 0);
}

module.exports = {sumArray}