      // -------------------------------------
      // GSAPバージョン
      // -------------------------------------
      // プラグインを登録
      gsap.registerPlugin(ScrollTrigger);
      window.addEventListener("DOMContentLoaded", async () => {
        const stagger = 0.05;

        gsap.utils.toArray("section").forEach((el) => {
          const q = gsap.utils.selector(el);

          gsap
            .timeline({
              scrollTrigger: {
                trigger: el,
                start: "top 100%",
                toggleActions: "play none none reset",
              },
            })
            .fromTo(
              // あしらいとしての矩形
              q(".headline .rect"),
              {
                x: "-100%",
              },
              {
                x: "100%",
                duration: 1,
                stagger,
                ease: "power3.inout",
              },
            )
            .fromTo(
              q(".headline .label"),
              {
                alpha: 0,
              },
              {
                alpha: 1,
                duration: 0.3,
                delay: 0.5,
                stagger,
              },
              "<",
            )
            .fromTo(
              q(".slideX"),
              {
                alpha: 0,
                x: -32,
              },
              {
                alpha: 1,
                x: 0,
                duration: 0.75,
                delay: 0.2,
                stagger,
                ease: "power3.out",
              },
              "<",
            );
        });
      });