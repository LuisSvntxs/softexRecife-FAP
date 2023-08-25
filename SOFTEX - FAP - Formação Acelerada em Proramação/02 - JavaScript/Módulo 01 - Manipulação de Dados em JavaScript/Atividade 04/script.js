// Definindo as variaveis
var nome, salario, idade, possuiDiploma;

// Criando o cadastro de pessoa
nome = prompt("Informe o seu nome: "); //Váriavel tipo String
salario = parseFloat(prompt("Informe o seu salário: ")); //Váriavel tipo Float
idade = parseInt(prompt("Informe a sua idade: ")) //Váriavel tipo Int
possuiDiploma = prompt("Possui diplome de curso superior? ") //Váriavel tipo boolean

// Exibindo os dados do cadastro
console.log("Cadastro de Pessoa:");
console.log("Nome:", nome);
console.log("Salário:", salario);
console.log("Idade:", idade);
console.log("Possui Diploma:", possuiDiploma);