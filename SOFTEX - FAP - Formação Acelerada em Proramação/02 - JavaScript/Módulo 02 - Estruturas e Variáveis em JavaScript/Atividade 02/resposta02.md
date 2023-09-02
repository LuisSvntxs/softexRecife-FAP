# Atividade

Com os conceitos aprendidos, crie um programa de calculadora que:

- receba dois valores, que devem ser salvos em variáveis;
- o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos;
- com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado;
- se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma.

## Resposta

``` javascript
var opcao, num1, num2, resultado;

function calculadora() {

  opcao = prompt("Escolha uma opção:\n+: Soma\n-: Subtração\n*: Multiplicação\n/: Divisão\n");

  num1 = parseInt(prompt("Informe o primeiro número: "));
  num2 = parseInt(prompt("Informe o segundo número: "));
  console.log();

  switch (opcao) {
          case '+':
            resultado = num1 + num2;
            break;
          case '-':
            resultado = num1 - num2;
            break;
          case '*':
            resultado = num1 * num2;
            break;
          case '/':
            if (num2 === 0) {
              console.log('Erro: Divisão por zero não é permitida.');
              rl.close();
              return;
            }
            resultado = num1 / num2;
            break;
          default:
            console.log('opcao inválido. Por favor, insira +, -, *, ou /.');
            rl.close();
            return;
        }
        console.log("Resultado: " + resultado);
        console.log();

        if (opcao === '/') {
            const sobra = num1 % num2;
            console.log('Sobra:', sobra);
          }
    }
  
calculadora();
```
