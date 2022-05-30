const corusel = document.querySelector(".carusel");
const coruselImages = document.querySelectorAll(".carusel img")

const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")

let counter = 1;
const size = coruselImages[0].clientWidth;

corusel.style.transform = 'translateX('+ (-size * counter) + 'px)';

nextBtn.addEventListener("click", () => {
    if (counter >= coruselImages.length-1){return}
    corusel.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    corusel.style.transform = 'translateX('+ (-size * counter) + 'px)';
})

prevBtn.addEventListener("click", () => {
    if (counter <= 0){return}
    corusel.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    corusel.style.transform = 'translateX('+ (-size * counter) + 'px)';
})

corusel.addEventListener("transitionend", () => {
    if (coruselImages[counter].id === "last-clone") {
        corusel.style.transition = 'none';
        counter = coruselImages.length - 2;
        corusel.style.transform = 'translateX('+ (-size * counter) + 'px)';
    }
})
corusel.addEventListener("transitionend", () => {
    if (coruselImages[counter].id === "first-clone") {
        corusel.style.transition = 'none';
        counter = coruselImages.length - counter;
        corusel.style.transform = 'translateX('+ (-size * counter) + 'px)';
    }
})
