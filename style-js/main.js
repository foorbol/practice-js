/*(function () {

    let div = document.getElementsByClassName('test'),
        style = div[0].style;

    style.color = 'blue';
    style.backgroundColor = 'red';
    style.border = '1px solid black';
    style.padding = '3px';
})();*/


/*(function () {

    let div = document.getElementById('test');
    let style = div.style;

    div.className = ' css-class  css-class-new '; //добавить новый класс
    div.className = ''; //удалить класс
    div.className = div.className.replace('css-class', ''); //удалить класс

})();*/


(function () {

    let div = document.getElementById('test');
    let style = div.style;

    div.classList.add('css-class'); //добавить новый класс
    div.classList.add('css-class-new');
    div.classList.remove('css-class'); //удалить класс
    div.classList.toggle('css-class') //переключает классы
})();