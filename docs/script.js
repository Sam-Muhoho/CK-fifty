/* -----------------------
Mobile Menu Toggle
----------------------- */

const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if(toggle){
toggle.addEventListener("click", () => {
mobileMenu.classList.toggle("show");
});
}

/* -----------------------
Active Navbar Link
----------------------- */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
if(link.href === window.location.href){
link.classList.add("active");
}
});

/* -----------------------
Scroll Reveal Animation
----------------------- */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

const windowHeight = window.innerHeight;

reveals.forEach(el => {

const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}

});

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* -----------------------
Hero Parallax Effect
----------------------- */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

const scrollY = window.scrollY;

if(hero){
hero.style.backgroundPositionY = scrollY * 0.5 + "px";
}

});
