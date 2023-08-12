## Atividade

Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.

## Resposta

`````` javascript
var tempo;
tempo = 10;

console.log("iniciando contagem regressiva");
console.log(tempo);

for (let i = 1; i <= 10; i++) {
  tempo -= 1;
  console.log(tempo);
}

console.log("BUM!");
``````