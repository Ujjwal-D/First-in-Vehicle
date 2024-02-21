const navItems = document.querySelectorAll('.nav-items a');

navItems.forEach(item => {
  item.addEventListener('click', event => {
    navItems.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  const closeBtn = document.querySelector('.close-btn');

  hamburgerMenu.addEventListener('click', function () {
      navLinks.classList.toggle('active');
  });

  closeBtn.addEventListener('click', function () {
      navLinks.classList.remove('active');
  });
});


