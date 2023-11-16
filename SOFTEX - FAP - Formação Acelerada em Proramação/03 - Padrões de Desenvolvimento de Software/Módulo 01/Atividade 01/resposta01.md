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

### Resposta em Javascript

``` javascript


class Computer {
  constructor(ram, hdd, cpu, type) {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
    this.type = type;
  }

  toString() {
    return `Type: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
  }
}


class PC extends Computer {
  constructor(ram, hdd, cpu) {
    super(ram, hdd, cpu, 'PC');
  }
}


class Server extends Computer {
  constructor(ram, hdd, cpu) {
    super(ram, hdd, cpu, 'Server');
  }
}


class ComputerFactory {
  createComputer(type, ram, hdd, cpu) {
    if (type === 'PC') {
      return new PC(ram, hdd, cpu);
    } else if (type === 'Server') {
      return new Server(ram, hdd, cpu);
    } else {
      throw new Error('Tipo de computador não suportado.');
    }
  }
}


const factory = new ComputerFactory();
const myPC = factory.createComputer('PC', 8, 500, 2.5);
const myServer = factory.createComputer('Server', 32, 1000, 3.2);

console.log(myPC.toString());     
console.log(myServer.toString()); 

```
### Resposta em Typescript

```typescript

interface Computer {
  ram: number;
  hdd: number;
  cpu: number;
  type: string;
  toString(): string;
}


class PC implements Computer {
  constructor(public ram: number, public hdd: number, public cpu: number) {
    this.type = 'PC';
  }

  toString() {
    return `Type: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
  }
}


class Server implements Computer {
  constructor(public ram: number, public hdd: number, public cpu: number) {
    this.type = 'Server';
  }

  toString() {
    return `Type: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
  }
}


class ComputerFactory {
  createComputer(type: string, ram: number, hdd: number, cpu: number): Computer {
    if (type === 'PC') {
      return new PC(ram, hdd, cpu);
    } else if (type === 'Server') {
      return new Server(ram, hdd, cpu);
    } else {
      throw new Error('Tipo de computador não suportado.');
    }
  }
}

const factory = new ComputerFactory();
const myPC = factory.createComputer('PC', 8, 500, 2.5);
const myServer = factory.createComputer('Server', 32, 1000, 3.2);

console.log(myPC.toString());     
console.log(myServer.toString());

```