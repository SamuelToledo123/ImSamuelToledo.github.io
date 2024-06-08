
document.querySelector('.cards-button').addEventListener('click', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    reveals.forEach(function(element) {
        element.classList.add('active');
    });
}









