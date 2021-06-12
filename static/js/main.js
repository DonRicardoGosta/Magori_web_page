window.onload = initialize
window.onscroll = scroll

let scrolled = false;
let navMenu = document.querySelector("nav");

function initialize() {
    console.log("load");
}

function scroll() {
    
    if (window.scrollY >= 6 && scrolled === false) {
        navMenu.classList.remove("not-scrolled-nav");
        navMenu.classList.add("scrolled-nav");
        scrolled = true;
    } else if (window.scrollY <= 5 && scrolled) {
        navMenu.classList.remove("scrolled-nav");
        navMenu.classList.add("not-scrolled-nav");
        scrolled = false;
    }
}