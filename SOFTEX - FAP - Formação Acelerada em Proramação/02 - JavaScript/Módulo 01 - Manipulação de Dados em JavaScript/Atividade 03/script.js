// Criando as variáveis e exibindo seus conteúdos como UNDEFINED
let boolean, bigInt, string, symbol;

console.log("Conteúdo inicial das variáveis:");
console.log("boolean:", boolean);
console.log("bigint:", bigInt);
console.log("string:", string);
console.log("symbol:", symbol);

// Atribuindo valores nulos e exibindo-os
boolean = null;
bigint = null;
string = null;
symbol = null;

console.log("\nValores nulos das variáveis:");
console.log("boolean:", boolean);
console.log("bigint:", bigInt);
console.log("string:", string);
console.log("symbol:", symbol);

// Atribuindo valores específicos a cada variável e exibindo seus valores
boolean = true;
bigint = 1234567890123456789012345678901234567890n;
string = "Olá, mundo!";
symbol = Symbol("mySymbol");

console.log("\nValores atualizados das variáveis:");
console.log("boolean:", boolean);
console.log("bigint:", bigInt);
console.log("string:", string);
console.log("symbol:", symbol);