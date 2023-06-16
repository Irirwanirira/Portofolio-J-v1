import projectfetch from './modules/fetchData.js';

const hamburger = document.querySelector('.hamburger-menu');
const Nav = document.querySelector('.navs');
const NavLinks = document.querySelectorAll('.nav-links');

document.addEventListener('DOMContentLoaded', () => {
  projectfetch();
});

function toggle() {
  hamburger.classList.toggle('active');
  Nav.classList.toggle('active');
}

NavLinks.forEach((element) => {
  element.addEventListener('click', () => {
    hamburger.classList.remove('active');
    Nav.classList.remove('active');
  });
});

hamburger.addEventListener('click', toggle);
