const canvas = document.getElementById('rain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];
for (let i = 0; i < 150; i++) {
  drops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 15 + 10,
    speed: Math.random() * 4 + 2
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(200,200,200,0.5)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = 0; i < drops.length; i++) {
    const d = drops[i];
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x, d.y + d.length);
  }
  ctx.stroke();
  moveRain();
}

function moveRain() {
  for (let i = 0; i < drops.length; i++) {
    const d = drops[i];
    d.y += d.speed;
    if (d.y > canvas.height) {
      d.y = -20;
      d.x = Math.random() * canvas.width;
    }
  }
}

function animate() {
  drawRain();
  requestAnimationFrame(animate);
}
animate();

// Generador de clave
const codeField = document.getElementById('code');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

function generateCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 10; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  codeField.value = code;
}

generateBtn.addEventListener('click', generateCode);

copyBtn.addEventListener('click', () => {
  if (codeField.value.trim() === '') return;
  navigator.clipboard.writeText(codeField.value);
  window.open('https://www.roblox.com/share?code=57ca564c3f69994ca17f85f810d38fb4&type=Server', '_blank');
});
