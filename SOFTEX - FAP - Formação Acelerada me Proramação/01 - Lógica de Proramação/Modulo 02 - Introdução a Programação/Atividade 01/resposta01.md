# Atividade

No hipertexto anterior, temos um exemplo de um fluxograma que realiza o cálculo da média de duas notas de um aluno. O fluxograma solicita duas notas que serão somadas, e logo em seguida a média dessas notas é calculada. Dessa forma o resultado da média quando é maior ou igual a 7 o aluno está APROVADO, quando menor que 7 o aluno está REPROVADO.

Construa o algoritmos que realiza esse processamento.

## Resposta

``` javascript
var nota, media;
media = 0;

for (var i = 1; i<=2; i++){
    nota = parseFloat(prompt("Informe a " + i + "° nota: "));
    media += nota;
}
media /= i;

if(media >= 7){
    console.log("Aluno aprovado!");
}else{
    console.log("Aluno reprovado!");
}
```
