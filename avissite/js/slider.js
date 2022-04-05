const caption = document.querySelector(".grid__caption");
const prev = document.querySelector("#back").addEventListener("click", skift);
const next = document.querySelector("#next").addEventListener("click", skift);
const slides = document.querySelectorAll(".slider__slide");
let current = 0;
captionText = slides[current].getAttribute("alt");
caption.textContent = captionText;

function skift() {
    slides[current].classList.remove("slider__slide--active", "left", "right");
    if (this.getAttribute("id") === "next") {
        current++;
        if (current === slides.length) {
            current = 0;
        }
        slides[current].classList.add("slider__slide--active", "right");
    } else {
        current--;
        if (current < 0) {
            current = (slides.length - 1);
        }
        slides[current].classList.add("slider__slide--active", "left");
    }
    captionText = slides[current].getAttribute("alt");
    caption.textContent = captionText;
}