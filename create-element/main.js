(function () {
    const doc = document; //cache
    let elem = doc.createElement('p'), //создать узел элемента
        //content = doc.createTextNode('текст элемента'), //создать текстовый узел
        wrappedP = doc.getElementById('wrapped');

    elem.innerHTML = '<strong>текст элемента</strong>';

    elem.appendChild(content);
    elem.setAttribute('id', 'mr');
    elem.id = 'mr';

    wrappedP.parentNode.appendChild(elem);
    wrappedP.parentNode.insertBefore(elem, wrappedP);
    wrappedP.parentNode.replaceChild(elem, wrappedP); //1-чем заменяем, 2-на что заменяем
    wrappedP.parentNode.removeChild(elem); // удаление элементов, применяется к родит. элементу


})();