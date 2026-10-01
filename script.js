function showMessage() {

    alert("Thank you for contacting Bloom & Bliss 🌸");

}

function toggleMenu() {

    const navMenu =
        document.getElementById("navMenu");

    navMenu.classList.toggle("active");

}


function orderFlower(flowerName) {

    alert(
        "You selected: " +
        flowerName +
        "\n\nWe will contact you soon!"
    );

}
function openLightbox(imageSrc) {

    const lightbox =
        document.getElementById("lightbox");

    const image =
        document.getElementById("lightboxImage");

    image.src = imageSrc;

    lightbox.classList.add("active");
}


function closeLightbox() {

    const lightbox =
        document.getElementById("lightbox");

    lightbox.classList.remove("active");

}
const counters =
    document.querySelectorAll(".counter");


counters.forEach(counter => {

    const target =
        Number(counter.dataset.target);

    let current = 0;

    const updateCounter = () => {

        const increment =
            target / 100;

        if (current < target) {

            current += increment;

            counter.textContent =
                Math.ceil(current);

            setTimeout(updateCounter, 20);

        } else {

            counter.textContent = target;

        }

    };

    updateCounter();

});
function toggleTheme() {

    document.body.classList.toggle("dark");

    const button =
        document.querySelector(".theme-btn");

    if (document.body.classList.contains("dark")) {

        button.textContent = "☀️";

    } else {

        button.textContent = "🌙";

    }

}
const topButton =
    document.getElementById("topButton");


window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});
const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(link => {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});