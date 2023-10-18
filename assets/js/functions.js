const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const currlang = document.getElementById("curr-lang");
const langList = document.getElementById("languages-list");

const toggleMobileMenu = () => {
    header.classList.toggle("nav-open");
    const hamburgerIconSrc = "images/icons/hamburger-icon.svg";
    const closeIconSrc = "images/icons/close-icon.svg";
    
    if (hamburger.src.includes(hamburgerIconSrc)) {
        hamburger.src = closeIconSrc;
    } else {
        hamburger.src = hamburgerIconSrc;
    }
}

const toggleLangDropdown = () => {langList.classList.toggle("expanded");}

hamburger.addEventListener("click", toggleMobileMenu);
currlang.addEventListener("click", toggleLangDropdown);

// Scroll-Up button functionality
const scrollToTopButton = document.getElementById('scrollToTopButton');
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  if (scrollPosition > 50) {
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
    scrollToTopButton.style.display = 'none';
  }
});
