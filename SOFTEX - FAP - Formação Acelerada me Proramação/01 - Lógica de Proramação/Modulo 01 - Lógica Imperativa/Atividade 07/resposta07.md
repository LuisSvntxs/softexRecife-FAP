# Atividade

Um aluno do ensino fundamental precisa fazer como tarefa de casa a tabuada de alguns números inteiros, como nos exemplos em anexo.

Para ajudar esse aluno, você deve elaborar um algoritmo que solicite que seja digitado um número inteiro e que no final imprima o resultado da tabuada desse número.

## Resposta

``` javascript
var numero, resultado; 

resultado = 0;
num = parseInt(prompt("Informe a tabuada desejada: "));

for(let i = 1; i <= 10; i++){
    resultado = num * i ;
    console.log( num + " X " + i + " = " + resultado);
}

```
