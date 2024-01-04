window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

  document.querySelectorAll(".word").forEach((word) => {
    tl.add(createChildTimeline(word), "-=90%");
  });

  function createChildTimeline(element) {
    const elText = element.querySelector(".rect");
    const tl = gsap
      .timeline()
      .from(element, {
        y: 16,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
      })
      .set(elText, { opacity: 0 })
      .to(
        elText,
        {
          x: "105%",
          duration: 2,
          ease: "power4.out",
        },
        "-=50%",
      );
    return tl;
  }
});