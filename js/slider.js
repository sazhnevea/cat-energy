var fat = document.querySelector(`.slider__image--fat`);
var slim = document.querySelector(`.slider__image--slim`);
var slider = document.querySelector(`.slider__toggle--range`);

function moveDivisor () {
  slim.style.width = slider.value + `00` +`%`;
}
