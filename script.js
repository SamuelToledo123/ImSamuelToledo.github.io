
//slides

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", intitializeSlider);

function intitializeSlider() {

    if(slides.length > 0) {

        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }

}

function showSLide(index){

    if (index >= slides.length) {
        slideIndex = 0;

    }
    else if (index < 0) {
        slideIndex = slides.length -1;


    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSLide(slideIndex);

}
function nextSlide(){
    slideIndex ++
    showSLide(slideIndex);

}

//about scroll


window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    reveals.forEach(function(element) {
        var windowheight = window.innerHeight;
        var revealtop = element.getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

//cards


document.addEventListener("DOMContentLoaded", function() {
    revealCard();
});

function revealCard() {
    var revealCards = document.querySelectorAll('.revealCard');

    revealCards.forEach(function(card) {
        var windowheight = window.innerHeight;
        var revealtop = card.getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}









