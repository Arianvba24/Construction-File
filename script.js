// Show the full brand intro animation on every page load (~7 seconds)
document.addEventListener('DOMContentLoaded', function () {
  var loader = document.getElementById('loader');
  if (loader) {
    setTimeout(function () {
      loader.classList.add('hide');
    }, 0.0);
  }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('nav.links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }
});

// Scroll-reveal animation for elements marked with the "reveal" class
document.addEventListener('DOMContentLoaded', function () {
  var revealEls = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || revealEls.length === 0) {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(function (el) { observer.observe(el); });
});


const archivo = window.location.pathname.split("/").pop();

if (archivo === "index.html") {

const wrap = document.querySelector(".wrap");
const contador = wrap.children[2].children[0];

let numero = 0;

function contar() {
    if (numero < 25) {
        numero++;
        contador.textContent = numero;

        setTimeout(contar, 35);
    } else if (numero < 30) {
        numero++;
        contador.textContent = numero;

        setTimeout(contar, 350);
    }
}

contar();


}



document.querySelectorAll(".carousel-track").forEach(track => {

    const carousel = track.closest(".project-card");

    const items = track.querySelectorAll(".project-media");

    const nextBtn = carousel.querySelector(".carousel-btn.next");
    const prevBtn = carousel.querySelector(".carousel-btn.prev");

    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform =
            `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {

        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }

    });

    prevBtn.addEventListener("click", () => {

        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }

    });

});


