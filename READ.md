Basandose en el algoritmo siguiente, crear una aplicacion en HTML/JS en donde se trace una linea referida por las coordenadas (x0,y0) y (y0,y1) definidas por el usuario desde
cuadros de texto en HTML. Paralelamente debe generarse y presentarse una tabla en donde se presenten paso a paso los valores para cada una de las variables involucradas en el
proceso. El canvas debe mostar en los costados izquierdo e inferior las marcas de escala numérica.  

Deben incluirse métodos nuevos ya sea que se requieran o se obtengan ajustando código ya exxistente. Éstos deben documentarse en forma de comentarios tal como se muestra en
el ejemplo de la función bresenham adjunta.

<b>IMPORTANTE: Debe desarrollar el trabajo paso a paso, realizando commits por cada unos cuantos ajustes (explicando clara y brevemente cada uno de ellos). Saltos abruptos en los
cambios invalidarán el trabajo con notas de cero.</b>

```javascript
/**
 * Implementación del algoritmo de líneas de Bresenham.
 * @param {number} x0 - Coordenada X inicial.
 * @param {number} y0 - Coordenada Y inicial.
 * @param {number} x1 - Coordenada X final.
 * @param {number} y1 - Coordenada Y final.
 * @param {Function} plot - Función para dibujar el píxel (x, y).
 */
function bresenham(x0, y0, x1, y1, plot) {
    // Cálculo de diferenciales y dirección del paso
    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);
    let sx = (x0 < x1) ? 1 : -1;
    let sy = (y0 < y1) ? 1 : -1;
    let err = dx - dy;

    while (true) {
        // Dibujar el punto actual
        plot(x0, y0);

        // Condición de finalización
        if (x0 === x1 && y0 === y1) break;

        let e2 = 2 * err;

        // Ajuste en el eje X
        if (e2 > -dy) {
            err -= dy;
            x0 += sx;
        }

        // Ajuste en el eje Y
        if (e2 < dx) {
            err += dx;
            y0 += sy;
        }
    }
}
