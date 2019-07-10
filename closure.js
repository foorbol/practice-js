let firstFunc = function () {
    let index = 5;

    return function () {
        return index;
    };
};

let secondFunc = function () {
    let index = 15;
    console.log(firstFunc()());
};
secondFunc();

//замыкание позволяет сохранять промежуточные данные
//инкапсуляция данных