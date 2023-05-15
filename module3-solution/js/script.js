const toggler = document.querySelector('.navbar-toggle');
const menu = document.getElementById('collapsable-nav');

window.onload = function() {
    toggler.addEventListener('click', function(){
        menu.classList.toggle('super-visible');
        toggler.classList.toggle('active')
    });
}