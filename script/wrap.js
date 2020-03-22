// это скрипт для кнопки ОСТАВИТЬ отзыв


document.querySelectorAll('.btn_review').forEach(function (element) {
    element.onclick = showModal;
});

function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide-wrap');
    event.stopPropagation();

    document.onkeydown = function (event) {
        if (event.keyCode == 27) closeModal();
    }
}



function closeModal() {
    document.querySelectorAll('.wrap-container').forEach(function (element) {
        element.classList.add('hide-wrap');
    });
}



// это скрипт для кнопки ОТПРАВИТЬ отзыв
document.querySelectorAll('.btn_review-submit').forEach(function (element) {
    element.onclick = showModal_submit;
});

function showModal_submit() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide-wrap');
    closeModal();
    event.stopPropagation();

    document.onkeydown = function (event) {
        if (event.keyCode == 27) closeModal_submit();
    }
}



function closeModal_submit() {
    document.querySelectorAll('.wrap-container-submit').forEach(function (element) {
        element.classList.add('hide-wrap');
    });
}



let Btn_Close_rewiew = document.querySelector('.btn_close-rewiew');

Btn_Close_rewiew.onclick = function() {
    closeModal();
}

let Btn_Close_submit = document.querySelector('.btn_close-submit');

Btn_Close_submit.onclick = function() {
    closeModal_submit();
}