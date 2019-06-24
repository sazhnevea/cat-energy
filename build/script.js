const menuButton = document.querySelector('.page-header__toggle');
const mainNav = document.querySelector('.main-nav');

menuButton.addEventListener(`click`, () => {
  if (menuButton.classList.contains('page-header__toggle--opened')) {
    menuButton.classList.remove('page-header__toggle--opened');
    menuButton.classList.add('page-header__toggle--closed');
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
  } else {
    menuButton.classList.remove('page-header__toggle--closed');
    menuButton.classList.add('page-header__toggle--opened');
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    }
})

var fat = document.querySelector(`.slider__image--fat`);
var slim = document.querySelector(`.slider__image--slim`);
var slider = document.querySelector(`.slider__toggle--range`);

function moveDivisor () {
  slim.style.width = slider.value + `00` +`%`;
}
