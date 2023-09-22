$(function () {
  $('.design-slider').slick({
    dots: false,
    slidesToShow: 4,
    prevArrow:
      '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="">',
    nextArrow:
      '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="">',
    variableWidth: true,
    responsive: [
      {
        breakpoint: 361,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});

const burgerButton = document.querySelector('.header__nav');
const burgerMenu = document.querySelector('.burger-menu');
const closeButton = document.querySelector('.close-icon');

// Добавляем обработчик клика на кнопку бургер-меню
burgerButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('menu-visible');
});

// Добавляем обработчик клика на кнопку закрытия
closeButton.addEventListener('click', () => {
  burgerMenu.classList.remove('menu-visible');
});
