document.addEventListener("mousemove", (e) => {
  gsap.to(".box", {
    x: e.clientX,
    y: e.clientY,
    stagger: 0.1
  });
});
