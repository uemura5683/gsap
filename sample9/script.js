window.addEventListener("DOMContentLoaded", () => {
  gsap
    .timeline({ repeat: -1, repeatDelay: 0.5 })
    .to(".rect", { x: 100, duration: 1 }) 
    .to(".rect", { y: 100, duration: 1 })
    .to(".rect", { rotation: 360, duration: 1 })
    .to(".rect", { x: 0, duration: 1 })
    .to(".rect", { y: 0, duration: 1 });
});