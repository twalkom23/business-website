let hamburger = document.querySelector('.hamburger');
let dropDownMenu = document.querySelector('.drop-down-menu');

hamburger.addEventListener('click', () => {
    dropDownMenu.classList.toggle('show');
    hamburger.classList.toggle('flip');
})

