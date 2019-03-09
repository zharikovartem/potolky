var startWidth;
let MAX_WIDTH = 1000;
let MAX_HEIGHT = 800;

window.onload = function () {//определяет стартовую ширину
    var scrolledX = document.documentElement.clientWidth;
    var scrolledY = document.documentElement.clientHeight;
    startWidth = scrolledX;
    if (scrolledX <= MAX_WIDTH) {
        document.getElementById('menu').className = "menu_small";
        document.getElementById('menu').style.display = 'block';
    } else {
        document.getElementById('menu').className = "menu";
        //console.log(scrolledY);
        var razdels = document.getElementsByClassName('razdel');//выделяем все разделы
        for (var i = 0; i < razdels.length; i++) {
            razdels[i].style.height = scrolledY + "px";// задаем высоту
            console.log(razdels[i].style.height);
            //razdels[i].style.height = 100+"px";
        }
        console.log("Высота razdel: "+scrolledY+"px")
    }
}
window.onresize = function () { //при изменении ширины меняет меню
    var scrolledX = document.documentElement.clientWidth;
    var scrolledY = window.pageYOffset || document.documentElement.scrollTop;
    startWidth = scrolledX;
    //console.log(scrolledX);
    if (scrolledX >= MAX_HEIGHT) {
        if (scrolledX <= MAX_WIDTH) {
            document.getElementById('menu').style.display = 'block';
            document.getElementById('menu').className = "menu_small";
        } else {
            document.getElementById('menu').className = "menu";
            if (scrolledY <= MAX_HEIGHT) {
                document.getElementById('menu').style.display = 'none';
            }
        }
    }
}

window.onscroll = function () { //при прокрутке отображает меню
    if (startWidth >= MAX_WIDTH) {
        var scrolledY = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolledY >= MAX_HEIGHT) {
            var element = document.getElementById('menu');
            var start = -70;
            element.style.display = 'block';
            element.style.top = "0px";
            
        } else {
            document.getElementById('menu').style.display = 'none';
        }
    }
}
// Перемещение по документу:
let SPEED = 10;
function moveDoc(targ) {
    var razdels = parseInt(document.getElementsByClassName('razdel')[0].style.height, 10);
var smeshenie;
if(targ == 0) {
    smeshenie = 800;
} else {
    smeshenie = 800+ targ * parseInt(razdels, 10);
}
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if(top < smeshenie) {
        down(smeshenie);
    } if (top > smeshenie) {
        up(smeshenie);
    }
}
var t;
function down(targ) {
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top < targ) {
        window.scrollBy(0, 10);
        t = setTimeout('down('+targ+')', SPEED);
     } else clearTimeout(t);
    return false;
}     

function up(targ) {
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > targ) {
        window.scrollBy(0, -10);
        t = setTimeout('up('+targ+')', SPEED);
     } else clearTimeout(t);
    return false;
}
function chengeImage(num) {
    var allImages = document.getElementsByClassName('image');
    console.log(allImages);
    for (var i=0; i < allImages.length; i++) {
        console.log(allImages[i]);
        allImages[i].style.display = 'none';
        console.log(allImages[i].id);
    }
    var MAX_IMAGES = 5;
    var image = document.getElementById('image' + num);
    image.style.display = '';
    // num++;
    // if (num <= MAX_IMAGES) {
    //     var image = document.getElementById('image' + num);
    //     image.style.display = '';
    // } else {
    //     num = 0;
    //     var image = document.getElementById('image' + num);
    //     image.style.display = '';
    // }
}
