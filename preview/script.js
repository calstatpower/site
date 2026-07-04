let currentIndex = 0;

function visibleSlides() {

    if(window.innerWidth >= 1024) return 3;

    if(window.innerWidth >= 768) return 2;

    return 1;
}

function updateSlider(){

    const track = document.querySelector(".slider-track");

    if(!track) return;

    const slides = document.querySelectorAll(".slide");

    const visible = visibleSlides();

    const maxIndex = slides.length - visible;

    if(currentIndex > maxIndex){
        currentIndex = 0;
    }

    track.style.transform =
        `translateX(-${currentIndex * (100 / visible)}%)`;
}

function startSlider(){

    if(!document.querySelector(".slider-track")) return;

    setInterval(() => {

        currentIndex++;

        updateSlider();

    }, 2500);
}

window.addEventListener("load", () => {

    updateSlider();

    startSlider();

});

window.addEventListener("resize", () => {

    currentIndex = 0;

    updateSlider();

});