# Atividade

Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.

## Resposta

```javascript
function buscaLinear(array, valor) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valor) {
      return i; // Retorna o índice onde o valor foi encontrado
    }
  }
  return -1; // Retorna -1 se o valor não for encontrado no array
}

const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const valorBuscado = 20;

const indiceEncontrado = buscaLinear(array, valorBuscado);

if (indiceEncontrado !== -1) {
  console.log(`O valor ${valorBuscado} foi encontrado no índice ${indiceEncontrado}.`);
} else {
  console.log(`O valor ${valorBuscado} não foi encontrado no array.`);
}

```