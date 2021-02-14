// Mobile Nav
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-link');
  const navLink = document.querySelectorAll('.nav-link li');
  // Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    // Nav Animation
    navLink.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    // Burger Animation
    burger.classList.toggle('toggle');
  });
}

navSlide();