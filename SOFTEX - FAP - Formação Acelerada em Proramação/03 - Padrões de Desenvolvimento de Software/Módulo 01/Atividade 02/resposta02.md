# Atividade

Crie uma fábrica de veículos utilizando o padrão Prototype com base no exemplo apresentado no Hipertexto 2. Os requisitos do projeto devem ser:

- implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone e represent;

- o construtor da classe Veículo deve receber modelo, marca, cor e numeroRodas como parâmetros;

- crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos, por exemplo:
carro que tem dois campos a mais, como numeroRodas e numeroPortas;

- desenvolva uma classe Aplicação que deve criar um array com seis veículos com dois tipos de veículos
diferentes (subclasses), utilizando o método clone dos objetos para preencher o array;

- na classe Aplicação, implemente um método que retorne um array com o mesmo tamanho do array de
veículos, onde cada elemento deve ser um clone dos elementos do array veículos;

- no final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de clones
de veículos.


## Resposta

``` javascript

// Classe abstrata Veículo
class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
        // Utilizando o operador spread (...) para criar um novo objeto com os mesmos valores
        return { ...this };
    }

    represent() {
        // Método para representar o veículo como uma string
        return `${this.modelo} ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
    }
}

// Subclasse Carro que herda de Veículo
class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }

    represent() {
        // Sobrescrevendo o método represent da classe base para incluir o número de portas
        return `${super.represent()}, Portas: ${this.numeroPortas}`;
    }
}

// Subclasse Moto que herda de Veículo
class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, partidaEletrica) {
        super(modelo, marca, cor, numeroRodas);
        this.partidaEletrica = partidaEletrica;
    }

    represent() {
        // Sobrescrevendo o método represent da classe base para incluir se tem partida elétrica
        return `${super.represent()}, Partida Elétrica: ${this.partidaEletrica}`;
    }
}

// Classe Aplicação
class Aplicacao {
    static criarVeiculos() {
        // Criando um array com seis veículos usando o método clone
        const veiculos = [];
        const carroPrototype = new Carro("Sedan", "Toyota", "Preto", 4, 4);
        const motoPrototype = new Moto("Esportiva", "Honda", "Vermelha", 2, true);

        for (let i = 0; i < 3; i++) {
            veiculos.push(carroPrototype.clone());
        }

        for (let i = 0; i < 3; i++) {
            veiculos.push(motoPrototype.clone());
        }

        return veiculos;
    }

    static clonarVeiculos(veiculos) {
        // Criando um array com clones dos veículos usando o método clone
        return veiculos.map(veiculo => veiculo.clone());
    }

    static representarVeiculos(veiculos) {
        // Imprimindo a representação de cada veículo no array
        veiculos.forEach(veiculo => console.log(veiculo.represent()));
    }
}

// Testando a aplicação
const veiculos = Aplicacao.criarVeiculos();
const clones = Aplicacao.clonarVeiculos(veiculos);
Aplicacao.representarVeiculos(clones);


```