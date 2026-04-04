const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const stepsTable = document.getElementById('stepsTable');
const inputX0 = document.getElementById('x0');
const inputY0 = document.getElementById('y0');
const inputX1 = document.getElementById('x1');
const inputY1 = document.getElementById('y1');
const drawButton = document.getElementById('drawButton');
const clearButton = document.getElementById('clearButton');


 /** Limpia todo el canvas y dibuja los ejes de escala.*/
function clearCanvas() 
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawAxes();
}
 /** Conectar botones de dibujar y limpiar con eventos.*/
drawButton.addEventListener('click', dibujarLinea);
clearButton.addEventListener('click', clearCanvas);