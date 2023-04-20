const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
const radius = 30;
function lines(){
c.strokeStyle = 'black';
c.lineWidth = 1;
c.beginPath();
c.moveTo(canvas.width / 2, 0);
c.lineTo(canvas.width / 2, canvas.height);
c.stroke();

c.beginPath();
c.moveTo(0, canvas.height / 2);
c.lineTo(canvas.width, canvas.height / 2);
c.stroke();
}
lines();
function drawCircle(x, y) {
  c.beginPath();
  c.fillStyle = 'transparent';
  c.strokeStyle='black';
  c.arc(x, y, radius, 0, Math.PI * 2);
  c.fill();
  c.stroke();
}

function mirrorCircle(x, y, X, Y) {
  c.save();
  c.translate(x, y);
  c.scale(X, Y);
  drawCircle(0, 0);
  c.restore();
}

canvas.addEventListener('mousemove', (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  const X = x > canvas.width / 2 ? -1 : 1;
  const Y = y > canvas.height / 2 ? -1 : 1;

  c.clearRect(0, 0, canvas.width, canvas.height);
  mirrorCircle(x, y, X, Y);
  mirrorCircle(canvas.width - x, y, X, Y);
  mirrorCircle(x, canvas.height - y, X, Y);
  mirrorCircle(canvas.width - x, canvas.height - y, X, Y);
  lines();
});