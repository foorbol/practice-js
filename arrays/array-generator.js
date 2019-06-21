const generate = () => {
    const length = Math.floor(Math.random() * 11 + 10);
    const arr = [];
    let i;
    for (i = 0; i < length; i++) {
        arr.push(generateRandomNumber());
    }

    function generateRandomNumber() {
        return Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    }

    return arr;
};

module.exports = {
    generate
};
