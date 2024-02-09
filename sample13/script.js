window.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 13 * 8; i++) {
    const rect = document.createElement("div");
    rect.classList.add("rect");
    document.querySelector(".container").appendChild(rect);
  }

  // 格子状に適用
  const tl = gsap
    .timeline()
    .from(".rect", {
      scale: 0,
      rotation: -360,
      duration: 0.5,
      stagger: {
        each: 0.1,
        from: "start", // 中央から
        grid: "auto", // 格子状に開始
      },
    })
    .addLabel("complete");

  // 時間軸に対してトゥイーン
  tl.tweenTo("complete", {
    duration: 4,
    // ここに時間軸に対してイージング
    ease: "slow(0.4, 0.9, false)",
    repeat: -1,
    repeatDelay: 0.5,
  });
});