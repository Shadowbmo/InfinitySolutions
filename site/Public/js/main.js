/* animação */

gsap.to(PrimeiroQuadrado, 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(SegundoQuadrado, 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(TerceiroQuadrado, 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});

// Imagem
gsap.from('.ContainerImagem', {opacity: 0, duration: 2, delay: 2, x: 60})

// Texto
gsap.from('.ContainerTexto', {opacity: 0, duration: 3, delay: 2.3, y: 25})
gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease:'expo.out', stagger: .3})
gsap.from(header, {opacity: 0, duration: 3, delay: 2.6, y: 25, ease:'expo.out', stagger: .3})


   
var i1 = 1;
var i2 = 1;
var i3 = 1;

function botton() {
    if (i1 == 0) {
        container1.className = "skillsList Grid Inativo"
        i1++
    } else {
       container1.className = "skillsList Grid Ativo"
        i1 = 0
    }


}
function botton1() {
    if (i2 == 0) {
        container2.className = "skillsList Grid Inativo"
        i2++
    } else {
       container2.className = "skillsList Grid Ativo"
        i2 = 0
    }


}
function botton2() {
    if (i3 == 0) {
        container3.className = "skillsList Grid Inativo"
        i3++
    } else {
       container3.className = "skillsList Grid Ativo"
        i3 = 0
    }}

    function normalizar() {
        body.className = "body"
        setTimeout(normalizar2, 4000)
    }

    normalizar();

    function normalizar2() {
        body.className = "body2"
    }