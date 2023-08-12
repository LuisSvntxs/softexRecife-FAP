## Atividade 

Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

## Resposta

`````` javascript

  var nome, anoNascimento, idade; 
 
  nome = prompt("Informe o seu nome: ");
  while (true) {
  const anoNascimento = parseInt(prompt("Informe o ano do seu nascimento: "));

  if (!isNaN(anoNascimento) && anoNascimento >= 1922 && anoNascimento <= 2021) {
    idade = 2022 - anoNascimento;
    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
    break;
  } else {
    console.log("Ano de nascimento inválido. Digite um valor entre 1922 e 2021.");
  }
}

``````