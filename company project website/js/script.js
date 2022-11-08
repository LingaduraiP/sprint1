(function () {
    const paralex = document.querySelector(".paralex");
    paralex.addEventListener("mousemove", para);

    function para(e) {
        let _width = window.innerWidth / 2;
        let _height = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;

        let first = `${50 - (_mouseX - _width) * 0.1}% ${
            50 - (_mouseY - _height) * 0.1
        }%`;

        let second = `${50 - (_mouseX - _width) * 0.2}% ${
            50 - (_mouseY - _height) * 0.2
        }%`;

        let third = `${50 - (_mouseX - _width) * 0.3}% ${
            50 - (_mouseY - _height) * 0.3
        }%`;

        let total = `${second},${first}, ${third} `;
        paralex.style.backgroundPosition = total;
    }
})();

//Swipper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        960: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    },
});

// Sticky nav Bar

const section1 = document.querySelector(".section__1");
const navBar = document.querySelector(".nav__bar");
const navHeight = navBar.getBoundingClientRect().height;

const stickyNav = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) navBar.classList.add("sticky");
    else navBar.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});
headerObserver.observe(section1);

// Animation
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section_hidden");
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1,
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add("section_hidden");
});

// Nav Button

const navButton = document.querySelector(".nav_button");
const navIcon = document.querySelector(".nav_icon");

navButton.addEventListener("click", () => {
    if (navIcon.classList.contains("fa-bars")) {
        navIcon.classList.add("fa-x");
        navIcon.classList.remove("fa-bars");
    } else {
        navIcon.classList.remove("fa-x");
        navIcon.classList.add("fa-bars");
    }
    // rotate magic
    navIcon.classList.contains("rotate")
        ? navIcon.classList.remove("rotate")
        : navIcon.classList.add("rotate");
});
