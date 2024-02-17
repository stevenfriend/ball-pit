const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

let frames, framet;
const fpsDislpay = document.querySelector('#fps')

window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

const init = () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  frames = 0;
  framet = performance.now();
  requestAnimationFrame(animate);
}

const animate = timestamp => {
  frames++

  if(timestamp - framet >= 1000) {
    fpsDislpay.innerHTML = `FPS: ${frames}`;
    framet = timestamp;
    frames = 0;
  }

  myRequest = requestAnimationFrame(animate);
}

init()