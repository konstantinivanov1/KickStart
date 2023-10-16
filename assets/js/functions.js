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