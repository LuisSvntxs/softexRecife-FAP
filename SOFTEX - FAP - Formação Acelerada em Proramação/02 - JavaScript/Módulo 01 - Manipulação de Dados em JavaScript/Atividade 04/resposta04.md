# Atividade

Vamos criar um cadastro de pessoa com os seguintes dados: nome, salário, idade e se possui diploma. Antes de começar a
codificação, identifiquem os tipos de cada variável.

Em seguida, desenvolvam o código utilizando exemplos para cada variável que
respeitem os tipos identificados.

Certifiquem-se de que os valores correspondam aos tipos de dados corretos.

## Resposta

``` javascript
// Definindo as variaveis
var nome, salario, idade, possuiDiploma;

// Criando o cadastro de pessoa
nome = prompt("Informe o seu nome: "); //Váriavel tipo String
salario = parseFloat(prompt("Informe o seu salário: ")); //Váriavel tipo Float
idade = parseInt(prompt("Informe a sua idade: ")) //Váriavel tipo Int
possuiDiploma = prompt("Possui diploma de curso superior? ") //Váriavel tipo boolean

// Exibindo os dados do cadastro
console.log("Cadastro de Pessoa:");
console.log("Nome:", nome);
console.log("Salário:", salario);
console.log("Idade:", idade);
console.log("Possui Diploma:", possuiDiploma);
```
