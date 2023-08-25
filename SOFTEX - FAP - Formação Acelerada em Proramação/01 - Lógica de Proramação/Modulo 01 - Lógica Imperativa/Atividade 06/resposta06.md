# Atividade

Levando em consideração os aprendizados sobre as estruturas condicionais, elabore um algoritmo que possa descobrir, através de perguntas e respostas, qual é o meio de transporte que o usuário está considerando. O usuário deverá escolher uma das seguintes opções:

- trator;
- moto;
- bicicleta.

Para chegar ao resultado, as perguntas precisam ser respondidas apenas com "Sim" ou "Não".

Exemplo:
É terrestre? Sim.
Cabe apenas uma pessoa? Sim.
É pesado? Não.
Tem pedal? Sim.
Então, o transporte escolhido foi a bicicleta.

Para chegar ao resultado de cada uma das opções, use o modelo em anexo.

## Resposta

``` javascript

var resposta, transporte; 

resposta = prompt("O transporte é terrestre? ");
if(resposta == "sim"){
    resposta = prompt("Usa capacete? ");
    if(resposta == "sim"){
        transporte = "Moto";
    } else {
        resposta = prompt("Cabe apenas 1 pessoa? ");
        if (resposta == "sim"){
             resposta = prompt("É pesado? ");
            } if (resposta == "sim"){
                transporte = "Trator";
                }else {
                        resposta = prompt("Tem pedal? ");
                    if (resposta == "sim"){
                        transporte = "Bicicleta";
                    }
                }   
        }
} else{
    
transporte = "transporte Inválido!";
}

console.log("O transporte escolhido foi: " + transporte);
```
