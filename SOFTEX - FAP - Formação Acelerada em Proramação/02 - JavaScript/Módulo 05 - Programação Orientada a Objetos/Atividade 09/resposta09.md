# Atividade

Utilizando a linguagem JavaScript, crie uma situação matemática na qual os números precisam ser
informados pelo usuário.

Além disso, deve ocorrer uma exceção dentro do código. Utilize os métodos try(),
catch() e finally() para realizar a captura e o tratamento dessa exceção.

## Resposta

``` javascript

try {
    // Solicita dois números ao usuário
    let numero1 = parseFloat(prompt("Digite o primeiro número: "));
    let numero2 = parseFloat(prompt("Digite o segundo número: "));

    // Verifica se os valores inseridos são números
    if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error("Por favor, insira números válidos.");
    }

    // Realiza a operação de soma
    let resultado = numero1 + numero2;

    // Exibe o resultado
    console.log("A soma dos números é: " + resultado);
} catch (error) {
    // Captura e trata a exceção
    console.error("Ocorreu um erro: " + error.message);
} finally {
    // Executa o bloco de código no final, independentemente de ocorrer ou não uma exceção
    console.log("Encerrando a execução.");
}

```
