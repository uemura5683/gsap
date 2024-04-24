window.addEventListener("DOMContentLoaded", () => {
  // プラグインを登録
  gsap.registerPlugin(MotionPathPlugin);

  gsap.to("#rect", {
    duration: 3,
    repeat: -1,
    repeatDelay: 2,
    yoyo: true,
    ease: "power4.inOut",
    motionPath: {
      // SVGのパスに沿って移動
      path: "#path",
      align: "#path",
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
    },
  });
});