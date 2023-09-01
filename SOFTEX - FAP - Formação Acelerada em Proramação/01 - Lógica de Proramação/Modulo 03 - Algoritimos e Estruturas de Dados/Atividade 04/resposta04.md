# Atividade

Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela.

## Resposta

``` javascript
// Definição da classe que representa uma pessoa
class Pessoa {
  constructor(nome, idade, filho) {
    this.nome = nome;
    this.idade = idade;
    this.filho = filho;
    this.proximo = null; // Referência ao próximo elemento na lista
  }
}

// Criação da lista encadeada
class ListaEncadeada {
  constructor() {
    this.primeiro = null; // Referência ao primeiro elemento da lista
  }

  // Função para adicionar uma pessoa à lista
  adicionarPessoa(nome, idade, filho) {
    const novaPessoa = new Pessoa(nome, idade, filho);
    if (!this.primeiro) {
      this.primeiro = novaPessoa;
    } else {
      let atual = this.primeiro;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novaPessoa;
    }
  }

  // Função para exibir as pessoas na lista
  exibirPessoas() {
    let atual = this.primeiro;
    while (atual) {
      console.log(`Nome: ${atual.nome}, Idade: ${atual.idade}, Filho: ${atual.filho}`);
      atual = atual.proximo;
    }
  }
}

// Criando uma lista encadeada de pessoas
const lista = new ListaEncadeada();
lista.adicionarPessoa('João', 30, null);
lista.adicionarPessoa('Maria', 28, 'João');
lista.adicionarPessoa('Pedro', 5, 'Maria');

// Exibindo as pessoas na lista
lista.exibirPessoas();

```
