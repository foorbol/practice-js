function funcDec(a, b) {
    return a + b;
}
console.log(funcDec(3, 4));

let funcExp = function(a, b) {
    return a + b;

};
console.log(funcExp(5, 6));

//callback functions
let func = function (collbeak) {
    let name = 'Nike';
    return callback(name);
};
func(function (n) {
    return `Hello ${n}`
});

let func1 = function() {
    return function () {
        console.log('CatDod')
    }
};
func1()()

;(function() {
    console.log('anonymous self-calling function');
})();

let funcArgs = function () { //arguments - позволяет передать любое пол-во параметров
    let i, 
        sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};
console.log(funcArgs(1, 2, 3, 56, 87, 1009));