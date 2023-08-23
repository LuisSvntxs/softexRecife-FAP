# Atividade

Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

## Resposta

1. Fila (FIFO - First-In-First-Out):
Na fila, os elementos são removidos na mesma ordem em que foram inseridos, ou seja, o primeiro elemento inserido é o primeiro a ser removido.
Sequência de números removidos para esvaziar a fila:
3, 7, 9, 1, 0

``` javascript
var array = [3, 7, 9, 1, 0];

function fila(array) {
    var fila = array.slice();
    var sequenciaRemovidos = [];

    while (fila.length > 0) {
        sequenciaRemovidos.push(fila.shift());
    }

    return sequenciaRemovidos;
}

console.log("removida da Fila:", fila(array));

```

2. Lista (ou Lista Encadeada):
Uma lista encadeada permite remoções e inserções em qualquer posição. Para esvaziá-la, vamos considerar sempre a remoção do elemento no início da lista.
Sequência de números removidos para esvaziar a lista:
3, 7, 9, 1, 0

``` javascript
var array = [3, 7, 9, 1, 0];

function lista(array) {
    var lista = array.slice();
    var sequenciaRemovidos = [];

    while (lista.length > 0) {
        sequenciaRemovidos.push(lista.shift());
    }

    return sequenciaRemovidos;
}
console.log("removida da Lista:", lista(array));


```

3. Pilha (LIFO - Last-In-First-Out):
Na pilha, o último elemento inserido é o primeiro a ser removido.
Sequência de números removidos para esvaziar a pilha:
0, 1, 9, 7, 3

``` javascript
var array = [3, 7, 9, 1, 0];

function Pilha(array) {
    var pilha = array.slice();
    var sequenciaRemovidos = [];

    while (pilha.length > 0) {
        sequenciaRemovidos.push(pilha.pop());
    }

    return sequenciaRemovidos;
}

console.log("removida da Pilha:", Pilha(array));
```
