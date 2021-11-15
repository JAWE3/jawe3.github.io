const caption = document.querySelector(".caption");
const prev = document.querySelector("#back").addEventListener("click", skift);
const next = document.querySelector("#next").addEventListener("click", skift);
const slides = document.querySelectorAll(".slide");
let current = 0;
captionText = slides[current].getAttribute("alt");
caption.textContent = captionText;

function skift() {
    slides[current].classList.remove("slide--active", "left", "right");
    if (this.getAttribute("id") === "next") {
        current++;
        if (current === slides.length) {
            current = 0;
        }
        slides[current].classList.add("slide--active", "left");
    }
    else {
        current--;
        if (current < 0) {
            current = (slides.length - 1);
        }
        slides[current].classList.add("slide--active", "right");      
    }
    captionText = slides[current].getAttribute("alt");
    caption.textContent = captionText;
}