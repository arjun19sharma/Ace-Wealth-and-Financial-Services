/* ===================================
   ACE WEALTH & FINANCIAL SERVICES
   MAIN JS V2
=================================== */


/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 1000);

    }

});


/* =========================
   SCROLL PROGRESS
========================= */

const progressBar =
    document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    if(!progressBar) return;

    const scrollTop =
        window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / docHeight) * 100;

    progressBar.style.width =
        progress + "%";

});


/* =========================
   STICKY HEADER
========================= */

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(!header) return;

    if(window.scrollY > 40){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(

        ".section-heading," +
        ".about-grid," +
        ".service-card," +
        ".why-card," +
        ".founder-grid," +
        ".cta-box," +
        ".trust-item"

    );

revealElements.forEach((item) => {

    item.classList.add("reveal");

});

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if(entry.isIntersecting){

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold:0.12
        }

    );

revealElements.forEach((item) => {

    observer.observe(item);

});


/* =========================
   ACTIVE NAV LINK
========================= */

const currentPage =
    window.location.pathname
    .split("/")
    .pop();

const navLinks =
    document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    const href =
        link.getAttribute("href");

    if(href === currentPage){

        link.classList.add("active");

    }

});


/* =========================
   MOBILE MENU
========================= */

const hamburger =
    document.querySelector(".hamburger");

const navMenu =
    document.querySelector(".nav-links");

if(hamburger && navMenu){

    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("show-menu");

        hamburger.classList.toggle("active");

    });

}


/* =========================
   CLOSE MENU ON CLICK
========================= */

document.querySelectorAll(".nav-links a")
.forEach((link) => {

    link.addEventListener("click", () => {

        if(navMenu){

            navMenu.classList.remove("show-menu");

        }

        if(hamburger){

            hamburger.classList.remove("active");

        }

    });

});


/* =========================
   BACK TO TOP
========================= */

const backButton =
    document.createElement("button");

backButton.innerHTML = "↑";

backButton.classList.add("back-to-top");

document.body.appendChild(backButton);

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        backButton.classList.add("show");

    }else{

        backButton.classList.remove("show");

    }

});

backButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* =========================
   STAGGER EFFECT
========================= */

const cards =
    document.querySelectorAll(

        ".service-card, .why-card"

    );

cards.forEach((card,index) => {

    card.style.transitionDelay =
        `${index * 0.08}s`;

});


/* =========================
   SIMPLE PAGE FADE
========================= */

document.body.style.opacity = "0";

window.addEventListener("load", () => {

    document.body.style.transition =
        "opacity .6s ease";

    document.body.style.opacity = "1";

});