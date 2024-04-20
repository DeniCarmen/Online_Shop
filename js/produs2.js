let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlide() {
  const offset = -currentIndex * 100;
  document.querySelector('.gallery').style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
  updateSlide();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  updateSlide();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
  updateSlide();
});

let currentColorIndex = 0;
const colorSlides = document.querySelectorAll('.culori-slide');
const totalColorSlides = colorSlides.length;

function updateColorSlide() {
    for (let slide of colorSlides) {
        slide.style.display = "none";
    }
    colorSlides[currentColorIndex].style.display = "block";
}

function prevColor() {
    currentColorIndex = (currentColorIndex === 0) ? totalColorSlides - 1 : currentColorIndex - 1;
    updateColorSlide();
}

function nextColor() {
    currentColorIndex = (currentColorIndex === totalColorSlides - 1) ? 0 : currentColorIndex + 1;
    updateColorSlide();
}

document.getElementById('prevBtn').addEventListener('click', prevColor);
document.getElementById('nextBtn').addEventListener('click', nextColor);

updateColorSlide();

