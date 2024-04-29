window.addEventListener("DOMContentLoaded", () => {
  const stalker = document.querySelector(".stalker");
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const speed = 0.15;

  const xSet = gsap.quickSetter(stalker, "x", "px");
  const ySet = gsap.quickSetter(stalker, "y", "px");

  window.addEventListener("mousemove", (event) => {
    const rectSize = 10;
    mouse.x = event.x - rectSize / 2;
    mouse.y = event.y - rectSize / 2;
  });

  gsap.ticker.add(() => {
    if (mouseLock === true) {
      return;
    }
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    // いわゆるイージングの公式
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;

    xSet(pos.x);
    ySet(pos.y);
  });

  let mouseLock = false;

  document.querySelectorAll("button").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      const rect = element.getBoundingClientRect();
      mouseLock = true;

      const size = 10;
      const x = (mouse.x = pos.x = rect.x - size);
      const y = (mouse.y = pos.y = rect.y - size);

      gsap.to(stalker, {
        x,
        y,
        width: rect.width + size * 2,
        height: rect.height + size * 2,
        duration: 0.35,
        ease: "back.out",
        overwrite: true,
      });
    });
    element.addEventListener("mouseleave", () => {
      mouseLock = false;

      gsap.to(stalker, {
        width: 10,
        height: 10,
        duration: 1,
        ease: "power4.out",
        overwrite: true,
      });
    });
  });
});