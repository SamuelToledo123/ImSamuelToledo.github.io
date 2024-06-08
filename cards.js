
document.addEventListener("DOMContentLoaded", function() {
    revealCard(); 
});

window.addEventListener('resize', revealCard);

function revealCard() {
    var revealCards = document.querySelectorAll('.revealCard');

    revealCards.forEach(function(card) {
        card.classList.add('active'); 
    });
}
