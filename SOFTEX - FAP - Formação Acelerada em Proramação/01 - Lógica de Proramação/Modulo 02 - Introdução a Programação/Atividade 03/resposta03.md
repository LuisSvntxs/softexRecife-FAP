# Atividade

Desenvolva um programa que utiliza o nome de um aluno, duas notas e a quantidade de faltas que ele teve. Conclua se o aluno está aprovado ou reprovado de acordo com as especificações:

1. Se a média do aluno for menor que sete, o sistema deve informar o nome do aluno e que ele está reprovado;
2. Se o aluno possuir mais de três faltas, o sistema deve informar o nome do aluno e que ele está reprovado; 
3. Se a média do aluno for maior ou igual a sete, o sistema deve informar o nome do aluno e que ele está aprovado.
No sistema, todos os valores devem estar armazenados em variáveis.

## Resposta

 ```javascript

var nome, nota, qtdFaltas,  media;
media = 0;
nome = prompt("Informe o seu nome: ");

for (var i = 1; i<=2; i++){
    nota = parseFloat(prompt("Informe a " + i + "° nota: "));
    media += nota;
}
media /= i;
qtdFaltas = prompt("Informe a quantidade de faltas: ");


if(media < 7){
    console.log(nome + ", você está reprovado!"); 
}else if (qtdFaltas > 3){
    console.log(nome + ", você está reprovado!"); 
}else{
    console.log(nome + ", você está aprovado!"); 
}
 ```
