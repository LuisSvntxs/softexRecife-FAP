# Atividade

Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.

## Resposta

- Buscar Linear 

```javascript
// Função para realizar a busca linear em um array
function buscaLinear(array, valor) {
  for (let i = 0; i < array.length; i++) {
    // Verifica se o elemento atual é igual ao elemento buscado
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

- Busca Binária 

```javascript
// Função para ordenar o array em ordem crescente
function ordenarArray(array) {
  return array.sort((a, b) => a - b);
}

// Função para realizar a busca binária em um array ordenado
function buscaBinaria(arrayOrdenado, valor) {
  let inicio = 0;
  let fim = arrayOrdenado.length - 1;

  while (inicio <= fim) {
    // Calcula o indice do meio da coleção
    const meio = Math.floor((inicio + fim) / 2);
      // Verifica se o lelemento do meio é igual ao elemento buscado
    if (arrayOrdenado[meio] === valor) {
      return meio; // Valor encontrado, retorna o índice
    } else if (arrayOrdenado[meio] < valor) {
      inicio = meio + 1; // Descartar a metade esquerda
    } else {
      fim = meio - 1; // Descartar a metade direita
    }
  }

  return -1; // Valor não encontrado
}

const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const valorBuscado = 20;

// Ordena o array em ordem crescente
const arrayOrdenado = ordenarArray(array);

// Realiza a busca binária pelo valor 20
const indiceEncontrado = buscaBinaria(arrayOrdenado, valorBuscado);

if (indiceEncontrado !== -1) {
  console.log(`O valor ${valorBuscado} foi encontrado no índice ${indiceEncontrado}.`);
} else {
  console.log(`O valor ${valorBuscado} não foi encontrado no array.`);
}
```