# Atividade

Vamos criar um array de objetos pessoa com, no mínimo, quatro itens. Cada um deles será composto por quatro propriedades: nome,
idade, profissão e cidade.

Dessa forma, declare os objetos pessoa dentro do array e, depois, desenvolva um código que utilize for in e for of para que todos os
objetos e propriedades sejam impressos.

## Resposta

```javascript

const pessoas = [
    {
      nome: "João",
      idade: 30,
      profissão: "Engenheiro",
      cidade: "Recife",
    },
    {
      nome: "Maria",
      idade: 25,
      profissão: "Médica",
      cidade: "João Pessoa",
    },
    {
      nome: "Carlos",
      idade: 35,
      profissão: "Professor",
      cidade: "Maceió",
    },
    {
      nome: "Ana",
      idade: 28,
      profissão: "Advogada",
      cidade: "Salvador",
    },
  ];
  
  for (const pessoa of pessoas) {
    console.log("Dados da Pessoa:");
    for (const propriedade in pessoa) {
      console.log(`${propriedade}: ${pessoa[propriedade]}`);
    }
    console.log(""); 
  }

```
