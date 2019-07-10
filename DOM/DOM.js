(function f() {
    let elems = document.getElementsByTagName('p'); //NodeList
    console.log(elems);

    for (let i = 0, len = elems.length; i < len; i++) {
        console.log(elems[i]);
    }
})();

(function f() {
    let elems = document.getElementsByTagName('p'), //NodeList
        classElems = document.getElementsByClassName('paragraph'),
        idElems = document.getElementById('four'),
        elemSelector = document.querySelector('p'),
        elemsSelectorAll = document.querySelectorAll('p'), //getElementsByTagName работает быстрее
        elemsInDiv = document.querySelectorAll('div p'),
        idElenSelector = document.querySelector('#four'); //getElementById работает быстрее

    for (let i = 0, len = elems.length; i < len; i++) {
        console.log(elems[i].tagName);
        console.log(elems[i].parentNode);
        console.log(elems[i].previousSibling.previousSibling);
        console.log(elems[i].nextSibling.nextSibling);
        console.log(elems[i].previousSibling.nodeName);
        console.log(elems[i].nodeType);
        console.log(elems[i].previousSibling.nodeType);
        
        if (elems[i].nodeType === 1) {
            console.log('это узел элемента');
        }
        if (elems[i].previousSibling.nodeType === 3) {
            console.log('это текстовый узел');
        }
    }

    console.log(document.querySelector('div').childNodes);
    console.log(document.querySelector('div').children);
    console.log(document.querySelector('div').lastChild);
    console.log(document.querySelector('div').firstChild);
    console.log(document.querySelector('div').innerHTML);
})();

