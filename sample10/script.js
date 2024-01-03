window.addEventListener("DOMContentLoaded", () => {
  gsap
    .timeline({ repeat: -1, repeatDelay: 0.5 })
    .set("h1", { textContent: "Show Motion" })
    .from(".rect1", { y: -32, opacity: 0, duration: 1 })
    .from(".rect2", { y: 32, opacity: 0, duration: 1 })
    .from(".rect3", { y: -32, opacity: 0, duration: 1 })
    .from(".rect4", { y: 32, opacity: 0, duration: 1 })
    .from(".rect5", { y: -32, opacity: 0, duration: 1 })
    .from(".rect6", { y: 32, opacity: 0, duration: 1 })
    .set("h1", { textContent: "Hide Motion" }, "+=1") // 1秒待機
    .to(".rect1", { y: -32, opacity: 0, duration: 1 }, "+=0.5")
    .to(".rect2", { y: 32, opacity: 0, duration: 1 }, "-=0.8") // 0.8秒開始を早める
    .to(".rect3", { y: -32, opacity: 0, duration: 1 }, "-=0.8")
    .to(".rect4", { y: 32, opacity: 0, duration: 1 }, "-=0.8")
    .to(".rect5", { y: -32, opacity: 0, duration: 1 }, "-=0.8")
    .to(".rect6", { y: 32, opacity: 0, duration: 1 }, "-=0.8");
});