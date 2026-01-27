const hamburguer = document.getElementById('hamburguer')
const hamburguer_obj = document.getElementById('hamburguer_obj')
const objetivos = document.getElementById('objetivos')
const cerrar_obj = document.querySelectorAll('.cerrar_obj')[0]
const navbar = document.getElementById('navbar')
const nav = document.querySelectorAll('.nav')
var anim_navbar = false
var anim_obj = false

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

hamburguer_obj.addEventListener('click', () => {
    if (anim_obj === false) {
        objetivos.style.right = '0px';
        anim_obj = true
    } else {
        objetivos.style.right = '-100%';
        anim_obj = false
    }
})

cerrar_obj.addEventListener('click', () => {
    objetivos.style.right = '-100%';
    anim_obj = false
})
