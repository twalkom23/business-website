let hamburger = document.querySelector('.hamburger');
let dropDownMenu = document.querySelector('.drop-down-menu');

hamburger.addEventListener('click', () => {
    dropDownMenu.classList.toggle('show');
    dropDownMenu.classList.toggle('hide');
    hamburger.classList.toggle('flip');
})


let button = document.querySelectorAll('.button-to-booking');

button.forEach(button => {
    button.addEventListener('click', (event) => {
        window.location.href = '/contact';
    })
})


