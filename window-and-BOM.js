let foo = 'str';
console.log(window.foo);

console.log(navigator.userAgent);
console.log(navigator.platform);
console.log(screen.width, screen.height);
console.log(locatoin.tuString()); //положение страницы
console.log(frames); //содержить коллекцию всех дочерних объектов
console.log(history); //позволяет перемещаться по истории переходов страницы, без перезагрузки меняет страницы браузера

window.confirm('BOM');
window.prompt();

let bar = window.prompt();
if (bar === 'hi!') {
    alert('Hi Cat!')
} else {
    alert('goodbye dog');
}