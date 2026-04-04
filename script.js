const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function clearCanvas() 
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawInitialMessage() 
{
  ctx.fillStyle = '#000';
  ctx.font = '16px sans-serif';
  ctx.fillText('Canvas listo para Bresenham', 20, 30);
}

function init() 
{
  clearCanvas();
  drawInitialMessage();
}

document.addEventListener('DOMContentLoaded', init);
