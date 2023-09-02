# Atividade

Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;

2. uma função tradicional com parâmetros e um retorno de valor;

3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.

## Resposta

```javascript
// Função tradicional sem parâmetros
function saudacao() {
  console.log("Olá, seja bem-vindo!");
}

// Função tradicional com parâmetros e retorno de valor
function somar(a, b) {
  return a + b;
}

// Arrow function com parâmetros e retorno de valor
const multiplicar = (a, b) => a * b;

// Exemplo de uso das funções
saudacao(); // Chama a função de saudação

const resultadoSoma = somar(5, 3); // Chama a função de soma
console.log("Resultado da soma:", resultadoSoma);

const resultadoMultiplicacao = multiplicar(4, 6); // Chama a função de multiplicação
console.log("Resultado da multiplicação:", resultadoMultiplicacao);

```