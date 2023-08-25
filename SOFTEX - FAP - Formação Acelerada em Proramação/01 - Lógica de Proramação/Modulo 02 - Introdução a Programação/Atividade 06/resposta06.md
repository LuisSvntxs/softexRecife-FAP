# Atividade

Faça, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:

- 1: Soma
- 2: Subtração
- 3: Multiplicação
- 4: Divisão
- 0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar.

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado.

## Resposta

``` javascript
var opcao, num1, num2, resultado;

function calculadora() {
 while (opcao !=0) {
  console.log("Escolha uma opção:\n1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n0: Sair");

  opcao = parseInt(prompt());
  
  if (opcao == 0) {
    console.log('Fim do programa.');
    break;
  } else if (opcao < 0 || opcao > 4) {
    console.log('Essa opção não existe');
    break;
  }
  num1 = parseInt(prompt("Informe o primeiro número: "));
  num2 = parseInt(prompt("Informe o segundo número: "));
  console.log();
  
  if (opcao == 1) {
    resultado = num1 + num2;
     console.log("Resultado: " + resultado);
     console.log();
  } else if (opcao == 2) {
    resultado = num1 - num2;
     console.log("Resultado: " + resultado);
     console.log();
  } else if (opcao == 3) {
    resultado = num1 * num2;
     console.log("Resultado: " + resultado);
     console.log();
  } else if (opcao == 4) {
    resultado = num1 / num2;
     console.log("Resultado: " + resultado);
     console.log();
     }
 }
}
calculadora();

```
