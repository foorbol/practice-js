let one = 1; //global variable
function func() {
    let two = 2; //local variable
}

//цепочка областей видимости
let k = 4;
let outerScope = function () {
    let k = 8;
    console.log(k);

    console.log(k);
    let innerScope = function () {
        let k = 12;
        console.log(k);
    };

    innerScope();
    console.log(k);
};

outerScope();
