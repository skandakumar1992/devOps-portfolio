// =========================================
// MOBILE NAVIGATION
// =========================================

const navLinks = document.querySelector(".nav-links");


// Create mobile menu button
const menuButton = document.createElement("button");

menuButton.innerHTML = "☰";
menuButton.classList.add("menu-button");

document.querySelector(".navbar").appendChild(menuButton);


// Toggle mobile menu
menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// =========================================
// SCROLL REVEAL EFFECT
// =========================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function (section) {

    section.classList.add("hidden");

    observer.observe(section);

});


// =========================================
// CURRENT YEAR IN FOOTER
// =========================================

const footer = document.querySelector("footer p");

if (footer) {

    const currentYear = new Date().getFullYear();

    footer.innerHTML =
        `© ${currentYear} Skanda Kumar | AWS DevOps Engineer-Entry Level`;

}