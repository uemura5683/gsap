// アニメーションが動いているか
const status = document.querySelector('.status dd')

// timelineとscrollTriggerの設定
const star = gsap.timeline({
  scrollTrigger: {
      trigger: '.contents',
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => {
        play()
      },
      onEnterBack: () => {
        play()
      },
      onLeaveBack: () => {
        pause()
      },
      onLeave: () => {
        pause()
      }
    }
})

// アニメーションの設定
star.to('.star',{
    rotate: 360,
    duration: 3,
    repeat: -1,
    ease: 'none'
})
.to('.star',{
    scale: 8,
    scrollTrigger: {
      scrub: true
    }
})

// アニメーションを再生する／止める
function play(){
  star.play()
  status.textContent = 'play'
}

function pause(){
  star.pause()
  status.textContent = 'pause'
}