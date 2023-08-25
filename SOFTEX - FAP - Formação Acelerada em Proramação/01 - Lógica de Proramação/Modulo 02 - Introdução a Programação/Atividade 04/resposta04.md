# Atividade

Desenvolva um código que utilize as seguintes características de um veículo:

1. Quantidade de rodas;
2. Peso bruto em quilogramas;
3. Quantidade de pessoas no veículo.

Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições: A: Veículos com duas ou três rodas; B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg; C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg; D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas; E: Veículos com quatro rodas ou mais e com mais de 6000 kg.

## Resposta

``` javascript
var quantidadeDeRodas, habilitacao, PesoBruto, qtdPessoas;

quantidadeDeRodas = parseInt(prompt("Qual a quantidade de rodas do veículo? "));

if (quantidadeDeRodas == 2 || quantidadeDeRodas == 3) {
  habilitacao = 'A';
  console.log('Sua Habilitação é tipo: ' + String(habilitacao));
} else {
    PesoBruto = parseFloat(prompt("Qual o peso do veículo(KG)? "));
    qtdPessoas = parseInt(prompt("Qual a quantidade de pessoas que o veículo suporta? "));
    if (quantidadeDeRodas <= 4 && qtdPessoas <= 8 && PesoBruto < 3500) {
        habilitacao = 'B';
        } else if (quantidadeDeRodas >= 4 && qtdPessoas > 8) {
            habilitacao = 'D';
            } else if (quantidadeDeRodas >= 4 && PesoBruto <= 6000) {
                habilitacao = 'E';
                } else {
                    habilitacao = 'C';
                }
                
  console.log("Sua Habilitação é tipo: " + habilitacao);
}

```
