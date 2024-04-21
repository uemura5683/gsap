window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({ repeat: -1 });

  // 右側に2秒かけて移動するモーションを指定する
  tl.add(gsap.to(".rect", { x: "50vw", rotate: 360, duration: 2 }));

  tl.call(
    () => {
      // 0.1倍速再生にする(スローモーションとなる)
      tl.timeScale(0.1);
    },
    null,
    0.25,
  );
  // 本来のタイムラインの0.50秒の地点まで到達したら
  tl.call(
    () => {
      // 1.0倍速再生にする(通常再生速度となる)
      tl.timeScale(1.0);
    },
    null,
    0.5,
  );
});