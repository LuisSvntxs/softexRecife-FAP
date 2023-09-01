
# Atividade

A atividade que faremos é a da “calculadora de média”.

Para isso, você deve criar um programa JavaScript que calcule a média de três
notas inseridas pelo usuário e exiba o resultado no console.

Primeiro, solicite que o usuário insira três notas (entre O e 10) usando a função **prompt()**.

Elas devem ser armazenadas em variáveis
adequadas, por exemplo, **nota1, nota2 e nota3,** com o tipo de dado Number.

Depois, some-as e divida por três. O resultado deste cálculo
será o valor da média, que deve ser armazenado em uma variável chamada **media**.

Por fim, exiba esse valor no console usando a função
**console.log()**.

## Respota

``` javascript

var media, nota;

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

console.log("A sua média é: " + media);

```
