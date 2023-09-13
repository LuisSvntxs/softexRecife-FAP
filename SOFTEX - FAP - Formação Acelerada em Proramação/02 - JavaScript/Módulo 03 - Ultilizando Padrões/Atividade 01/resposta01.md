# Atividade

Escolha algum código executável em JavaScript feito em atividades passadas e o coloque no Node.js. Para isso, você deve ter o
Node.js instalado. Após fazer essa migração, coloque seu código no arquivo "index.js”, teste e tire um print.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que
outros desenvolvedores possam analisá-lo.

## Resposta

- index.html

``` html 
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lógica de programação</title>
</head>
<body>
    <script src="/softexRecife-FAP/SOFTEX - FAP - Formação Acelerada em Proramação/02 - JavaScript/Módulo 03 - Ultilizando Padrões/Atividade 01/script.js"></script>
</body>
</html>
```
- Programa em javascript

```javascript 
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
