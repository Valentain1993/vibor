let current = 0,
            tumb = ["img/macro_foto.png", "img/view_2.png", "img/view_3.png"];
 
        function vpered() {
            if (current === tumb.length - 1)
                current = 0
                
            else
                ++current;
            document.images['r'].src = tumb[current];
            
        }



/*
let Img = document.querySelector('.view_macro'); // находим фото в основном блоке
let MiniFoto_1 = document.querySelector('.minifoto_1');
let MiniFoto_2 = document.querySelector('.minifoto_2');
let MiniFoto_3 = document.querySelector('.minifoto_3');


function Border () {
if (Img.src = "img/macro_foto.png") {
    MiniFoto_1.classList.add('mini_foto-border');
    MiniFoto_2.classList.remove('mini_foto-border');
    MiniFoto_3.classList.remove('mini_foto-border');
}

if (Img.src = "img/view_2.png") {
    MiniFoto_2.classList.add('mini_foto-border');
    MiniFoto_1.classList.remove('mini_foto-border');
    MiniFoto_3.classList.remove('mini_foto-border');
}

if (Img.src = "img/view_3.png") {
    MiniFoto_3.classList.add('mini_foto-border');
    MiniFoto_2.classList.remove('mini_foto-border');
    MiniFoto_1.classList.remove('mini_foto-border');
}
}

Border ();

        

/* let Block1 = document.getElementById('block1');
let Block2 = document.getElementById('block2');
        
        document.querySelector('.tab_review').onclick = function () {
            Block1.add('.hide');
            Block2.remove('.hide');
        }

// все, что ниже только 1 раз фото переключает

/*
// let Btn = document.querySelector('.btn_view_1'); это кнопка вправо
let Img = document.querySelector('.view_macro'); // находим фото в основном блоке

document.querySelector('.btn_view_1').onclick = function () {
    Img.src = 'img/view_3.png';
    document.querySelector('.btn_view_1').add('.hide');
    document.querySelector('.btn_view_2').remove('.hide');
}

document.querySelector('.btn_view_2').onclick = function () {
    Img.src = 'img/view_2.png';
    document.querySelector('.hide');
    document.querySelector('.btn_view_3').remove('.hide');
}
*/

/* это работающий код, но меняется только 1 раз

Blok.onclick = function () {
    Img.classList.add('hide');
    Img.src = 'img/view_3.png';
    Img.classList.remove('hide');
}

*/


/*  это тоже меняет только на 1 фото 
Blok.onclick = function () {
    if (Img.src = 'img/macro_foto.png' ) {
        ViewChange_1 ();

    }

    if (Img.src = 'img/view_2.png' ) {
        ViewChange_2 ();
    }

    else {
        ViewChange_3 ();
    }
    
}
*/


/* это разные функции     
}

function ViewChange_1 () {
    if (Img.src = 'img/macro_foto.png' ) {

        Img.classList.add('hide');
        Img.src = 'img/view_2.png';
        Img.classList.remove('hide');
        }
}

function ViewChange_2 () {
    if (Img.src = 'img/view_2.png' ) {

        Img.classList.add('hide');
        Img.src = 'img/view_3.png';
        Img.classList.remove('hide');
        }
}

function ViewChange_3 () {
    if (Img.src = 'img/view_3.png' ) {

        Img.classList.add('hide');
        Img.src = 'img/macro_foto.png';
        Img.classList.remove('hide');
        }
}


/*
document.querySelectorAll('.model_macro').forEach(function (element) {
    element.onclick = ViewChange_1;
}); 

*/


