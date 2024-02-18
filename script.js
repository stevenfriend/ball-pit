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
  frames++;

  draw(c);

  if(timestamp - framet >= 1000) {
    fpsDislpay.innerHTML = `FPS: ${frames}`;
    framet = timestamp;
    frames = 0;
  }

  myRequest = requestAnimationFrame(animate);
}

const draw = c => {
  clear(c)
  c.beginPath()
  c.arc(canvas.width/2, canvas.height/2, 50, 0, 2 * Math.PI)
  c.fillStyle = `hsl(200, 100%, 50%)`
  c.fill()
}

const clear = c => {
  c.clearRect(0, 0, canvas.width, canvas.height)
}

init()