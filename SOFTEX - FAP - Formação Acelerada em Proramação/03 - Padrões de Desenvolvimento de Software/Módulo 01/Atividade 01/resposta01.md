# Atividade

Considere que:

- Os produtos devem implementar uma interface comum;

- O cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface;
- todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type;

- Há dois tipos de computadores: pc e server; - RAM e HD devem estar em GB;

- CPU deve estar em GHz;

- Através do tipo informado, a fábrica decide qual tipo de computador irá instanciar;

- Quando o método .toString() for aplicado a um computador, ele deve imprimir seus atributos.

## Resposta

``` javascript

// Interface comum para produtos
class Computer {
    constructor(ram, hdd, cpu) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }

    getRam() {
        return this.ram;
    }

    getHdd() {
        return this.hdd;
    }

    getCpu() {
        return this.cpu;
    }

    getType() {
        return "Generic Computer";
    }

    toString() {
        return `${this.getType()} - RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
}

// Implementação concreta para PC
class PC extends Computer {
    getType() {
        return "PC";
    }
}

// Implementação concreta para servidor
class Server extends Computer {
    getType() {
        return "Server";
    }
}

// Fábrica abstrata para criar instâncias de computadores
class ComputerFactory {
    createComputer(ram, hdd, cpu) {
        // Lógica para decidir o tipo de computador a ser criado
        // Aqui, estou usando uma lógica simples baseada no tamanho da RAM
        if (ram <= 8) {
            return new PC(ram, hdd, cpu);
        } else {
            return new Server(ram, hdd, cpu);
        }
    }
}

// Exemplo de uso
const computerFactory = new ComputerFactory();

// Criando um PC
const pc = computerFactory.createComputer(8, 500, 2.5);
console.log(pc.toString());

// Criando um servidor
const server = computerFactory.createComputer(16, 1000, 3.0);
console.log(server.toString());

```