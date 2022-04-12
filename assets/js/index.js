const hamburger = document.querySelector('#icon');
const closeBtn = document.querySelector('#btn-close');
const navBar = document.querySelector('.navbar');

const navbarToggle = () => navBar.classList.toggle('active');

hamburger.addEventListener('click', navbarToggle);

closeBtn.addEventListener('click', navbarToggle);