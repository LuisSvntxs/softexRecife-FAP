# Atividade

Elabore um algoritmo que representa um cadastro. Ele deve ler os seguintes dados fornecidos pelo usuário:

- Nome
- Endereço
- Cidade
- CPF
- RG
- Idade
- Nome do pai
- Nome da mãe
- Peso
- Renda bruta

Apresente as informações solicitadas no final do cadastro.

## Resposta

``` javascript

var nome, endereço, cidade, cpf, rg, idade, nomeDoPai, nomeDaMae, peso, rendaBruta;
console.log("Realize seu cadastro em nosso sistema.")
console.log("Prencha os dados abaixo: ")
console.log();

nome = prompt("Informe o seu nome completo: ");
idade = prompt("Infome a sua idade: ");
cpf = prompt("Infome o seu CPF (apenas caracteres): ");
rg = prompt("Infome o seu RG (apenas caracteres): ");
nomeDoPai = prompt("Infome o nome do seu Pai: ");
nomeDaMae = prompt("Infome o seu nome completo: ");
peso= prompt("Infome o nome da sua Mãe: ");
rendaBruta = prompt("Infome a sua renda brutal: ");
cidade = prompt("Infome a sua cidade: ");
endereço = prompt("Infome o seu endereço completo: ");
console.log();

console.log("Cadastro Finalizado!")
console.log();
console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("CPF: " + cpf);
console.log("RG: " + rg);
console.log("Pedo: " + peso);
console.log("Nome do Pai: " + nomeDoPai);
console.log("Nome do Mãe: " + nomeDaMae);
console.log("endereço: " + endereço);
console.log("Cidade: " + cidade);
console.log("Renda: " + rendaBruta);

```