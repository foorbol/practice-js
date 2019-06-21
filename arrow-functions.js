/**
 * Arrow functions
 */

function example() {
    console.log('OK');
}

example();

const exampleArrow_1 = () => {
    return 'FUCK';
};

const exampleArrow_2 = () => 'FUCK';

console.log(exampleArrow_1());
console.log(exampleArrow_2());

/**
 * Callbacks (regular functions)
 */

function authorize(password, onSuccess, onError) {
    console.log('typeof onSuccess', typeof onSuccess);
    console.log('onSuccess', onSuccess);
    console.log('typeof onError', typeof onError);
    console.log('onError', onError);
    const validPassword = '12345';
    password === validPassword ? onSuccess() : onError();
}

function logSuccess() {
    console.log('SUCCESS');
    return false;
}

function logError() {
    console.log('ERROR');
}

authorize('123', logSuccess, logError);
authorize('12345', logSuccess, logError);






