# Atividade

Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.

## Reposta

``` javascript
var nomes, idades, cores; 

// 1 - Criando as Listas 

nomes = ['João', 'Maria', 'Paulo'];
idades = [ 10, 15, 12]; 
cores = ['Azul', 'Vermelho', 'Rosa']; 

// 2 - Imprimeindo as Listas 

console.log("Nomes: ", nomes);
console.log("Idades: ", idades);
console.log("Cores: ", cores);

// 3 - Modificando as Listas

nomes[1] = 'José';
idades[0] = 13;
cores[2] = 'Verde';

// 4 - Reimprimindo as Listas 

console.log("Nomes: ", nomes);
console.log("Idades: ", idades);
console.log("Cores: ", cores);

```
