/* =======================================================
   10K Analytics
   Main JavaScript
   ======================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ===================================================
       Sticky Header Enhancement
       =================================================== */

    const header = document.querySelector("header");

    function updateHeader() {

        if (window.scrollY > 50) {

            header.style.background = "rgba(57,66,74,.96)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

        } else {

            header.style.background = "rgba(74,84,93,.90)";
            header.style.boxShadow = "none";

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);



    /* ===================================================
       Active Navigation Highlight
       =================================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    function updateNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                currentSection = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateNavigation);

    updateNavigation();



    /* ===================================================
       Fade-in Animation
       =================================================== */

    const animatedItems = document.querySelectorAll(

        ".card, .industry-grid div, #about p, #contact"

    );

    animatedItems.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition =
            "opacity .7s ease, transform .7s ease";

    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    animatedItems.forEach(item => observer.observe(item));



    /* ===================================================
       Back To Top Button
       =================================================== */

    const backToTop = document.createElement("button");

    backToTop.innerHTML = "↑";

    backToTop.setAttribute("aria-label", "Back to top");

    Object.assign(backToTop.style, {

        position: "fixed",
        right: "28px",
        bottom: "28px",

        width: "52px",
        height: "52px",

        border: "none",
        borderRadius: "50%",

        background: "#D8F54A",

        color: "#1F2529",

        fontSize: "22px",

        fontWeight: "700",

        cursor: "pointer",

        opacity: "0",

        visibility: "hidden",

        transition: "all .3s ease",

        zIndex: "9999",

        boxShadow: "0 10px 25px rgba(0,0,0,.25)"

    });

    document.body.appendChild(backToTop);

    function toggleBackButton() {

        if (window.scrollY > 450) {

            backToTop.style.opacity = "1";
            backToTop.style.visibility = "visible";

        } else {

            backToTop.style.opacity = "0";
            backToTop.style.visibility = "hidden";

        }

    }

    window.addEventListener("scroll", toggleBackButton);

    toggleBackButton();

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });



    /* ===================================================
       Button Hover Effect
       =================================================== */

    document.querySelectorAll(".btn-primary").forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-4px) scale(1.02)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });



    /* ===================================================
       Footer Year
       =================================================== */

    const footerParagraphs = document.querySelectorAll("footer p");

    footerParagraphs.forEach(p => {

        if (p.textContent.includes("©")) {

            p.innerHTML =
                `&copy; ${new Date().getFullYear()} 10K Analytics. All rights reserved.`;

        }

    });

});