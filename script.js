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
  stepsTable.innerHTML = ""; /** Se crea para limpieza en futura tabla de pasos.*/
  const steps = drawLine(x0, y0, x1, y1); /** Se llama a la funcion de dibujar linea y se guarda los pasos.*/
  llenarTabla(steps); /** Se llama a la funcion para llenar la tabla con los pasos generados.*/
}

/** Dibuja un punto en el canvas ajustando las coordenadas.*/
function plot(x, y) 
{
  ctx.fillRect(40 + x, canvas.height - 40 - y, 3, 3);
}

/** Probar funcion plot manualmente.
const x0 = 10, y0 = 20;
const x1 = 100, y1 = 150;
plot(x0, y0);
plot(x1, y1); */

/** Dibuja una linea usando el algoritmo de Bresenham.
 * Calcula los puntos intermedios entre (x0, y0) y (x1, y1)*/
function drawLine(x0, y0, x1, y1) {

  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);

  const sx = (x0 < x1) ? 1 : -1;
  const sy = (y0 < y1) ? 1 : -1;

  let err = dx - dy;

  let steps = []; //  nuevo: almacenamiento de pasos

  while (true) {

    const e2 = 2 * err;

    // Dibujar punto actual
    plot(x0, y0);

    //  guardar estado actual
    steps.push({
      x: x0,
      y: y0,
      err: err,
      e2: e2
    });

    // condición de parada
    if (x0 === x1 && y0 === y1) break;

    if (e2 > -dy) {
      err -= dy;
      x0 += sx;
    }

    if (e2 < dx) {
      err += dx;
      y0 += sy;
    }
  }

  return steps; //  nuevo: retornar pasos
}
clearCanvas();

/** Ahora empieza fase para que empiece a guardar cada paso*/

/** Muestra en la tabla los pasos del algoritmo de Bresenham.
 ** @param {Array} steps Lista de pasos generados por el algoritmo
 */
function llenarTabla(steps) {

  stepsTable.innerHTML = "";

  steps.forEach((step, i) => {
    const fila = `
      <tr>
        <td>${i}</td>
        <td>${step.x}</td>
        <td>${step.y}</td>
        <td>${step.err}</td>
        <td>${step.e2}</td>
      </tr>
    `;
    stepsTable.innerHTML += fila;
  });
}

function drawAxes() {
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 1;

  // Eje X
  ctx.beginPath();
  ctx.moveTo(40, canvas.height - 40);
  ctx.lineTo(canvas.width - 40, canvas.height - 40);
  ctx.stroke();

  // Eje Y
  ctx.beginPath();
  ctx.moveTo(40, canvas.height - 40);
  ctx.lineTo(40, 40);
  ctx.stroke();

  // Marcas de escala cada 20 unidades
  for (let i = 0; i <= (canvas.width - 80) / 20; i++) {
    const x = 40 + i * 20;
    ctx.beginPath();
    ctx.moveTo(x, canvas.height - 35);
    ctx.lineTo(x, canvas.height - 45);
    ctx.stroke();
    if (i > 0) {
      ctx.fillText(i * 20, x - 10, canvas.height - 25);
    }
  }

  for (let i = 0; i <= (canvas.height - 80) / 20; i++) {
    const y = canvas.height - 40 - i * 20;
    ctx.beginPath();
    ctx.moveTo(35, y);
    ctx.lineTo(45, y);
    ctx.stroke();
    if (i > 0) {
      ctx.fillText(i * 20, 10, y + 5);
    }
  }
}

drawAxes();
