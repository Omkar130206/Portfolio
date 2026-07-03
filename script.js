/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show-menu");

});


/* ==========================================
   CLOSE MENU AFTER CLICKING A LINK
========================================== */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show-menu");

    });

});


/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   STICKY HEADER
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

/* ==========================================
   TYPING ANIMATION
========================================== */

const typed = new Typed("#typing-text", {

    strings: [

        "Web Developer",

        "Frontend Developer",

        "Responsive Web Designer",

        "Future Full Stack Developer"

    ],

    typeSpeed: 70,

    backSpeed: 40,

    backDelay: 1800,

    loop: true

});


/* ==========================================
   SCROLL REVEAL
========================================== */

ScrollReveal({

    distance: "60px",

    duration: 1500,

    delay: 200,

    reset: false

});

ScrollReveal().reveal(".hero-content", {

    origin: "left"

});

ScrollReveal().reveal(".hero-image", {

    origin: "right"

});

ScrollReveal().reveal(

    ".about-container, .skills-grid, .timeline, .projects-grid, .certificate-grid, .achievement-grid, .contact-container",

    {

        origin: "bottom",

        interval: 150

    }

);


/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.style.opacity = "1";

        scrollTopBtn.style.pointerEvents = "auto";

    }

    else {

        scrollTopBtn.style.opacity = "0";

        scrollTopBtn.style.pointerEvents = "none";

    }

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==========================================
   OPTIONAL : FOOTER YEAR
========================================== */

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}