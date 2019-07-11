/*(function () {
    let el = document.getElementById('box');
    el.onclick = function () {
        this.style.background = 'yellow';
    }
})();*/


/*(function () {
let buttons = document.getElementsByTagName("button");

for (let i = 0, len = buttons.length; i <len; i++) {
    buttons[i].onclick = function () {
        if (this.id === 'day') {
            document.body.className = 'day';
        } else if (this.id === 'night') {
            document.body.className = 'night';
        }
    }
}
})();*/


(function () {
    let buttons = document.getElementsByTagName("button");
    let changeColor = function () {
        if (this.id === 'day') {
            document.body.className = 'day';
        } else if (this.id === 'night') {
            document.body.className = 'night';
        }
    };
    
    let sayHi = function () {
        alert('Hi!');
    };

    for (let i = 0, len = buttons.length; i <len; i++) {
        buttons[i].addEventListener('click', changeColor, false);
        buttons[i].addEventListener('click', sayHi, false);
        buttons[i].removeEventListener('click', sayHi, false); //отключить событие
        }
})();