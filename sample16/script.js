gsap.registerPlugin(ScrollTrigger);
window.addEventListener("DOMContentLoaded", async () => {
  // 演出対象となる要素を取得
  gsap.utils.toArray("section").forEach((el) => {
    gsap.from(el, {
      x: 128,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      // スクロールトリガーの設定
      scrollTrigger: {
        trigger: el, // 対象物
      },
    });
  });
});