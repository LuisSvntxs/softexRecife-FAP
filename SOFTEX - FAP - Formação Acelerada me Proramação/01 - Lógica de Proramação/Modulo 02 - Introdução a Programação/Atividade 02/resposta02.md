## Atiivdade 

Construa um algoritmo que declare as seguintes variáveis: nome, idade, altura e maior_de_idade.

Depois, atribua valores para essas variáveis, sabendo que a variável nome é uma string, a variável idade é um inteiro, a variável altura é um float e a variável maior_de_idade é um booleano.

No final, imprima os valores das variáveis.

## Resposta

```` javascript
var nome, idade, altura, maior_de_idade;

nome = prompt("Informe o seu nome: ");
idade = parseInt(prompt("infrome a sua idade: "));
altura = parseFloat(prompt("Informe a sua altura: "));

if (idade >= 18) {
  maior_de_idade = true;
}else{
  maior_de_idade = false;
}
console.log(nome);
console.log(idade);
console.log(altura);
console.log(maior_de_idade);
````