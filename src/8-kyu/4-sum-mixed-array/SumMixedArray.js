function sumMix(x) {
    return x.map(number => {
        if (typeof number === 'string') {
            return Number.parseInt(number);
        } else {
            return number
        }
    })
        .reduce((acc, value) => {
            return acc + value
        }, 0);
}

module.exports = {sumMix};