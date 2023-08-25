# Atividade

Desenvolva um código que simule uma eleição com três candidatos.

- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos.

## Resposta

``` javascript
var candidatoX = 0, candidatoY = 0, candidatoZ = 0, voto, votosNulos = 0, vencendor;

while (true) {
    voto = prompt("Escolha seu candidato:\nCandidato X = 889\nCandidato Y = 847\nCandidato Z = 515\nBranco = 0\nFinalizar = fim\n");

    if (voto === "fim") {
        break;
    } else if (parseInt(voto) === 889) {
        candidatoX += 1;
    } else if (parseInt(voto) === 847) {
        candidatoY += 1;
    } else if (parseInt(voto) === 515) {
        candidatoZ += 1;
    } else if (parseInt(voto) === 0){
        votosNulos += 1;
    } else if(voto.toString() != "fim") {
        console.log("Opção inválida! Vote novamente");
    }
}
 vencedor = 'X';
if (candidatoY > candidatoX){
    vencedor = 'Y';
}if (candidatoZ > candidatoY){
    vencedor = 'Z';
}


console.log("O vencendor é o Candidato " + vencedor);
console.log("Total de votos para o Candidato X: " + candidatoX);
console.log("Total de votos para o Candidato Y: " + candidatoY);
console.log("Total de votos para o Candidato Z: " + candidatoZ);
console.log("Total de votos nulos: " + votosNulos);
```
