let button = document.querySelector("button");

let rough = new RoughEase({
  strength: 3,
  points: 30,
  taper: "none",
  randomize: true
});

let tl = gsap.timeline({
  defaults: { duration: 2, ease: "sine.out" },
  paused: true
});

let strikes = gsap.utils.toArray(".strike");

tl.to("#lightning", { opacity: 1, duration: 0.1 })
  .to(".border-gradient", { opacity: 1 })
  .to("#filter feDisplacementMap", { attr: { scale: "10" }, ease: "rough" }, 0)
  .to("#filter2 feDisplacementMap", { attr: { scale: "30" }, ease: "rough" }, 0)
  .to("#filter4 feDisplacementMap", { attr: { scale: "40" }, ease: "rough" }, 0)
  .fromTo(strikes[0], { drawSVG: "100% 90%" }, { drawSVG: "0% 10%" }, 0)
  .fromTo(strikes[1], { drawSVG: "0% 20%" }, { drawSVG: "100% 100%" }, 0)
  .fromTo(strikes[2], { drawSVG: "0% 10%" }, { drawSVG: "135% 140%" }, 0)
  .fromTo(strikes[3], { drawSVG: "120% 140%" }, { drawSVG: "35% 40%" }, 0)
  .fromTo(strikes[4], { drawSVG: "20% 40%" }, { drawSVG: "135% 140%" }, 0)
  .to("#lightning", { opacity: 0, duration: 0.3 }, "-=0.4");

button.addEventListener("mouseenter", function () {
  gsap.to("#scribbles", { opacity: 1, duration: 0.3, ease: "sine.out" });
  tl.play(0);
});

button.addEventListener("mouseleave", function () {
  gsap.to("#scribbles", { opacity: 0, duration: 0.6, ease: "sine.out" });
  tl.reverse();
});
