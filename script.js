const canvas = document.querySelector('canvas')

window.addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight
})