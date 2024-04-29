window.addEventListener("DOMContentLoaded", () => {
  // プラグインを登録
  gsap.registerPlugin(MotionPathPlugin);

  // たくさんの矩形を配置
  for (let i = 0; i < 20; i++) {
    const rect = document.createElement("div");
    rect.classList.add("rect");
    document.querySelector(".container").appendChild(rect);
  }

  // 一緒くたに移動
  const list = gsap.utils.toArray(".rect");
  list.forEach((rect, offsetIndex) => {
    gsap.fromTo(
      rect,
      {
        x: "-40vw",
        scale: 0.0,
      },
      {
        duration: 2 + Math.random() * 3,
        repeat: -1,
        ease: "power1.inOut",
        x: "40vw",
        motionPath: [
          { y: (Math.random() - 0.5) * 20 + "vh", scale: 1 },
          { y: (Math.random() - 0.5) * 50 + "vh", scale: 0 },
        ],
        delay: Math.random(),
      },
    );
  });
});