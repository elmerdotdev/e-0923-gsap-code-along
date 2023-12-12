// gsap.from('.box-1', {
//   duration: 1,
//   delay: 1,
//   opacity: 0,
// })

// gsap.to('.box-1', {
//   duration: 2,
//   delay: 2,
//   left: 'calc(100vw - 250px)',
//   ease: 'bounce.out',
// })

// gsap.to('.box-2', {
//   duration: 2,
//   delay: 1,
//   right: 'calc(100vw - 250px)',
//   ease: "power3.out"
// })

// gsap.from('.box', {
//   duration: 4,
//   delay: 1,
//   x: -100,
//   opacity: 0,
//   scale: .5,
//   ease: 'power2.out'
// })

// gsap.to('.box', {
//   duration: 2,
//   delay: 5,
//   x: 700,
//   scale: 1.5,
//   ease: 'power2.out',
//   stagger: .5
// })

const timeline = gsap.timeline()

timeline
  .from('.box-1', { duration: 1, x: -100 })
  .to('.box-1', { duration: 1, delay: 2, x: 800, backgroundColor: 'black', rotate: 360 })
  .from('.box-2', { duration: 1, x: -100 })
  .to('.box-2', { duration: 1, x: 700, scale: 1.2  })
  .from('.box-3', { duration: 1, x: -100 })
  .to('.box-3', { duration: 1, x: 900, y: -100, scale: .8 })
  .from('.box-4', { duration: 1, x: -100 })
  .to('.box-4', { duration: 1, x: 750, y: -100 })
  .from('.box-5', { duration: 1, x: -100 })
  .to('.box-5', { duration: 1, x: 850, y: -200, height: 200 })

const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')

btnPlay.addEventListener('click', () => {
  timeline.play()
})
btnPause.addEventListener('click', () => {
  timeline.pause()
})