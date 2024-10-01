let currentSlide = 0;

function changeSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    items[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + direction + items.length) % items.length; // Wrap around
    items[currentSlide].classList.add('active');

    // Update the carousel inner to shift slides
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}
