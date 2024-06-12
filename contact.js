const links = document.querySelectorAll('.link');
const hoverReveals = document.querySelectorAll('.hover-reveal');

links.forEach((link, index) => {
    link.addEventListener('mousemove', (e) => {
        hoverReveals[index].style.opacity = 1;
        hoverReveals[index].style.transform = 'translate(-50%, -50%) rotate(5deg)';
        hoverReveals[index].style.left = e.clientX + "px";
    });

    link.addEventListener('mouseleave', () => {
        hoverReveals[index].style.opacity = 0;
        hoverReveals[index].style.transform = 'translate(-50%, -50%) rotate(-5deg)';
    });
});
