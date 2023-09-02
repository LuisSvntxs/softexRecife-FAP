# Atividade

Crie dois códigos de sistema de notas para uma escola.

O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição e um operador ternário.

O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar com média sete.

## Resposta

- Calculadora de média:

``` javascript

var media, nota, status;

media = 0;

for(let i = 1; i <= 3; i++){
    nota = parseFloat(prompt("Informe a " + i + "° nota: "));
    if(nota < 0.0 || nota > 10.0){
        console.log("Nota inválida");
    }else{
        media += nota;
    }
}

media /= 3; 
status = media >= 7 ? "Aprovado" : "Reprovado";

console.log("Aluno " + status + "!");
```

- Calculadora de nota mínima:

``` javascript

var nota, notaMin;

media = 0;

for(let i = 1; i <= 2; i++){
    nota = parseFloat(prompt("Informe a " + i + "° nota: "));
    if(nota < 0.0 || nota > 10.0){
        console.log("Nota inválida");
    }else{
        nota += nota;
    }
}

notaMin = ((7 * 3) - nota);

console.log("Para ficar com média 7, você precisa tirar nota " + notaMin.toFixed(1) + " na próxima prova.");

```
