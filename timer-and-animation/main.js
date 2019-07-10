(function () {
    let delay = 10,
        i = 0;
    let startTimer = function () {
        let elem = document.getElementById('circle'),
            bottom = elem.offsetTop;

        if (i < 10) {
            setTimeout(startTimer, delay);
            elem.style.top = bottom + 20 + 'px';
        }
        i++;
    };

    let timer = setTimeout(startTimer, delay);
    //clearTimeout(timer);

})();


/*(function (pixels) {
    let delay = 10,
        i = 0;
    let startTimer = function (pixels) {
        let elem = document.getElementById('circle'),
            bottom = elem.offsetTop;

        if ((pixels > 0 && bottom > 250) || (pixels < 0 && bottom < 50)) {
            clearInterval(timer);
            timer = setInterval(function () {
                startTimer(pixels * -1);
            }, delay);
        }
        elem.style.top = bottom + pixels + 'px';
        i++;
    }
})();*/