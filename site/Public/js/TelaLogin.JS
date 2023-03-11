var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector("body");

btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
   gsap.from(".containerDireita", {opacity: 0, duration: 1, delay: 0, y: 25});
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
    gsap.from(".containerEsquerda", {opacity: 0, duration: 1, delay: 0, y: 25, ease:'expo.out', stagger: 0.2});
});