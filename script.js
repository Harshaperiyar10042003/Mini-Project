// Carousel Functionality for Literature Survey
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
});
document.addEventListener("DOMContentLoaded", function () {
    const moreInfoButtons = document.querySelectorAll(".btn.more-info");
    const readPaperButtons = document.querySelectorAll(".btn.read-paper");
    const popupModal = document.getElementById("popup-modal");
    const popupText = document.getElementById("popup-text");
    const closeBtn = document.querySelector(".close-btn");

    // Show popup for More Info button
    moreInfoButtons.forEach((button) => {
        button.addEventListener("click", function () {
            popupText.textContent = button.getAttribute("data-info");
            popupModal.classList.remove("hidden"); // Show the popup
        });
    });

    // Close popup
    closeBtn.addEventListener("click", function () {
        popupModal.classList.add("hidden"); // Hide the popup
    });

    // Open link for Read Paper button
    readPaperButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const link = button.getAttribute("data-link");
            window.open(link, "_blank"); // Open link in a new tab
        });
    });

    // Prevent popup from closing by accidental clicks outside
    popupModal.addEventListener("click", function (e) {
        if (e.target === popupModal) {
            popupModal.classList.add("hidden"); // Close only if clicked outside content
        }
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
});

// Highlight Active Section in Navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

