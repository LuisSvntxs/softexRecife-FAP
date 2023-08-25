# Atividade

Estamos rodeados por dados no nosso cotidiano e, nas aulas, aprendemos sobre os seus diversos tipos. Agora, vamos criar variáveis
do tipo boolean, Bigint, string e symbol.

No primeiro momento, após declará-las, precisamos exibir seus conteúdos, que devem ser
**UNDEFINED**. Em seguida, vamos deixar essas variáveis com valores nulos e imprimir.

Por fim, cada uma deve receber um dos tipos
como atribuição e os seus respectivos valores devem ser impressos na tela.

## Resposta

``` javascript
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

```
