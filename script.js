var startWidth;
let MAX_WIDTH = 1000;
let MAX_HEIGHT = 400;

window.onload = function () {//определяет стартовую ширину
    var scrolledX = document.documentElement.clientWidth;
    var scrolledY = document.documentElement.clientHeight;
    startWidth = scrolledX;
    if(scrolledX <= MAX_WIDTH) {
        document.getElementById('menu').className = "menu_small";
        document.getElementById('menu').style.display = 'block';
    } else {
        document.getElementById('menu').className = "menu";
        console.log(scrolledY);
        var razdels = document.getElementsByClassName('razdel');
        for (var i=0; i<razdels.length; i++) {
            razdels[i].style.height = scrolledY+"px";
        }
    }
}
window.onresize = function () { //при изменении ширины меняет меню
    var scrolledX = document.documentElement.clientWidth;
    var scrolledY = window.pageYOffset || document.documentElement.scrollTop;
    startWidth = scrolledX;
    console.log(scrolledX);
    if (scrolledX >= MAX_HEIGHT) {
        if (scrolledX <= MAX_WIDTH) {
            document.getElementById('menu').style.display = 'block';
            document.getElementById('menu').className = "menu_small";
        } else {
            document.getElementById('menu').className = "menu";
            if(scrolledY <= MAX_HEIGHT) {
                document.getElementById('menu').style.display = 'none';
            }
        }
    }
}

window.onscroll = function () { //при прокрутке отображает меню
    if (startWidth >= MAX_WIDTH) {
        var scrolledY = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolledY >= MAX_HEIGHT) {
            // document.getElementById('menu').style.backgroundColor = 'red';
            document.getElementById('menu').style.display = 'block';
        } else {
            document.getElementById('menu').style.display = 'none';
        }
    }
}