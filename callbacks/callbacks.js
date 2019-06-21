function logSumInfo(num1, num2, successHandler, errorHandler) {
    let sum = num1 + num2;
    if (sum > 10) {
        errorHandler(sum + ' > 10');
    } else if (sum < 10) {
        errorHandler(sum + ' < 10');
    } else {
        successHandler(sum + ' === 10');
    }
}

function logger(data) {
    console.log(data);
}

function coolLogger(data) {
    console.log('COOL ' + data);
}

logSumInfo(3, 5, coolLogger, logger);
logSumInfo(9, 5, coolLogger, logger);
logSumInfo(5, 5, coolLogger, logger);