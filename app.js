const corusel = document.querySelector(".carusel");
const coruselImages = document.querySelectorAll(".carusel img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

const dots = document.querySelectorAll(".dots .dot");

let counter = 1;
const size = coruselImages[0].clientWidth;

corusel.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= coruselImages.length - 1) {
    return;
  }
  corusel.style.transition = "transform 0.4s ease-in-out";
  dots[counter].classList.remove("active");
  counter++;

  dots[counter].classList.add("active");
  corusel.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) {
    return;
  }
  corusel.style.transition = "transform 0.4s ease-in-out";
  dots[counter].classList.remove("active");
  counter--;
  dots[counter].classList.add("active");
  corusel.style.transform = "translateX(" + -size * counter + "px)";
});

corusel.addEventListener("transitionend", () => {
  if (coruselImages[counter].id === "last-clone") {
    corusel.style.transition = "none";
    counter = coruselImages.length - 2;
    corusel.style.transform = "translateX(" + -size * counter + "px)";
  }
});
corusel.addEventListener("transitionend", () => {
  if (coruselImages[counter].id === "first-clone") {
    corusel.style.transition = "none";
    counter = coruselImages.length - counter;
    corusel.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (dots[7].classList[2] === "active") {
    dots[7].classList.remove("active");
    dots[1].classList.add("active");
  }
  if (dots[0].classList[2] === "active") {
    dots[0].classList.remove("active");
    dots[6].classList.add("active");
  }
});

for (i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    corusel.style.transition = "transform 0.4s ease-in-out";
    dots[counter].classList.remove("active");
    counter = this.id;
    console.log(counter);
    this.classList.add("active");
    corusel.style.transform = "translateX(" + -size * counter + "px)";
  });
}
