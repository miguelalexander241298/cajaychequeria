const hamburguer = document.getElementById('hamburguer')
const navbar = document.getElementById('navbar')
const nav = document.querySelectorAll('.nav')
var anim_navbar = false

nav.forEach(e => {
    e.addEventListener('click', () => {
        navbar.style.right = '-50%';
        anim_navbar = false
    })
});

hamburguer.addEventListener('click', () => {
    if (anim_navbar === false) {
        navbar.style.right = '0px';
        anim_navbar = true
    } else {
        navbar.style.right = '-50%';
        anim_navbar = false
    }
})