/* Menu icon */

const menuBtn = document.querySelector('.menu-icon-btn');

const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.header__container');

menuBtn.onclick = function () {
  menuIcon.classList.toggle('menu-icon--active');
  menu.classList.toggle('header__container--mobile');
  document.body.classList.toggle('no-scroll');
};

// const resizeGrid = () => {
//   const gridContainer = document.querySelector('.products__line');

//   if (window.innerWidth <= 400) {
//     gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
//   }
// };

// window.addEventListener('resize', resizeGrid);
// resizeGrid();
