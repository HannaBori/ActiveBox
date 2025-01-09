const  menuButton = document.querySelectorAll('.header .header__content .header__menu-icon');
const menuClose = document.querySelectorAll('.header .header__content .header__menu-close')
const mobileMenu = document.querySelector('.header .header__content .header__mobile-menu')
const mobileBackground = document.querySelector('.header .header__content')

menuButton[0].onclick = function (){
    menuClose[0].classList.remove('inactive');
    menuClose[0].classList.add('active');

    menuButton[0].style.display = 'none';

    mobileMenu.classList.remove('inactive');
    mobileMenu.classList.add('active');

    mobileBackground.classList.add('header__mobile-background');
}

menuClose[0].onclick = function (){
    menuClose[0].classList.add('inactive');
    menuClose[0].classList.remove('active');

    menuButton[0].style.display = 'flex';

    mobileMenu.classList.remove('active');
    mobileMenu.classList.add('inactive');
    
    mobileBackground.classList.remove('header__mobile-background');
}