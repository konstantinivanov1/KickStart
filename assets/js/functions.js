const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const currlang = document.getElementById("curr-lang");
const langList = document.getElementById("languages-list");
const currLangFlag = document.getElementById("curr-lang-flag");
const enLang = document.getElementById("en-lang");
const beLang = document.getElementById("be-lang");

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

enLang.addEventListener("click", () => {
  currLangFlag.src = "images/flags/engl-flag.svg"
})

beLang.addEventListener("click", () => {
  currLangFlag.src = "images/flags/belg-flag.svg"
})

const toggleLangDropdown = () => {currlang.classList.toggle("expanded");}

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
