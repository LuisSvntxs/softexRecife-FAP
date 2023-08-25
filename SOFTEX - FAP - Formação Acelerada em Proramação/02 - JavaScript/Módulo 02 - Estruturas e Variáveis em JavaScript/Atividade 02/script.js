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