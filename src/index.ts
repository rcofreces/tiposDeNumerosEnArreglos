let dimensionArreglo: number = Number(
  prompt("Ingrese la dimensión del arreglo")
);
let arreglo: number[] = new Array(dimensionArreglo);
let cero: number = 0;
let positivos: number = 0;
let negativos: number = 0;

for (let i: number = 0; i < dimensionArreglo; i++) {
  arreglo[i] = Number(prompt(`Ingrese el número que va en la posición ${i + 1}`));
  if (arreglo[i] >= 0) {
      if (arreglo[i] > 0) {
        positivos++;
      } else {
        cero++
      }
    } else {
      negativos++;
    }
  }

console.log(`Hay: ${positivos} positivos, ${negativos} negativos y ${cero} ceros`);