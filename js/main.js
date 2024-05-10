/* Menu icon */
const menuBtn = document.querySelector('.menu-icon-btn');

const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.header__container');

menuBtn.onclick = function () {
  menuIcon.classList.toggle('menu-icon--active');
  menu.classList.toggle('header__container--mobile');
  document.body.classList.toggle('no-scroll');
};
