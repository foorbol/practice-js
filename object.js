const obj = {
    str : 'dog',
    func : function() {
        console.log(this);
    }
};
obj.func();

console.log(obj.str);  //dot notation
console.log(obj['str']);  //bracket notation

obj.vel = 'cat';  //assignment
obj.str = 'CatDog'; //replacement value
console.log(obj);

delete obj.vel;

const MYAPP = {
    //properties of the entire application
};