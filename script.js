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

/** Creacion de funcion princiapl dibujarlineas.*/
function dibujarLinea() 
{
  const x0 = parseInt(inputX0.value);
  const y0 = parseInt(inputY0.value);
  const x1 = parseInt(inputX1.value);
  const y1 = parseInt(inputY1.value);

  clearCanvas();
  drawLine(x0, y0, x1, y1);
}

/** Dibuja un punto en el canvas ajustando las coordenadas.*/
function plot(x, y) 
{
  ctx.fillRect(40 + x, canvas.height - 40 - y, 3, 3);
}

/** Probar funcion plot manualmente.*/
const x0 = 10, y0 = 20;
const x1 = 100, y1 = 150;
plot(x0, y0);
plot(x1, y1); 

