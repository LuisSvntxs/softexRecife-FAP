# Atividade

Crie um tipo abstrato de dado (TAD) para manipular números complexos na linguagem Python. O método deve:

- calcular três números complexos;

- realizar todas as operações básicas;

- e imprimir as propriedades real e img do números.

## Resposta

``` javascript

// Definição do TAD para números complexos
class NumeroComplexo {
  constructor(real, imaginario) {
    this.real = real;
    this.imaginario = imaginario;
  }

  // Método para somar números complexos
  soma(outroComplexo) {
    const parteReal = this.real + outroComplexo.real;
    const parteImaginaria = this.imaginario + outroComplexo.imaginario;
    return new NumeroComplexo(parteReal, parteImaginaria);
  }

  // Método para subtrair números complexos
  subtracao(outroComplexo) {
    const parteReal = this.real - outroComplexo.real;
    const parteImaginaria = this.imaginario - outroComplexo.imaginario;
    return new NumeroComplexo(parteReal, parteImaginaria);
  }

  // Método para multiplicar números complexos
  multiplicacao(outroComplexo) {
    const parteReal = this.real * outroComplexo.real - this.imaginario * outroComplexo.imaginario;
    const parteImaginaria = this.real * outroComplexo.imaginario + this.imaginario * outroComplexo.real;
    return new NumeroComplexo(parteReal, parteImaginaria);
  }

  // Método para dividir números complexos
  divisao(outroComplexo) {
    const denominador = outroComplexo.real ** 2 + outroComplexo.imaginario ** 2;
    const parteReal = (this.real * outroComplexo.real + this.imaginario * outroComplexo.imaginario) / denominador;
    const parteImaginaria = (this.imaginario * outroComplexo.real - this.real * outroComplexo.imaginario) / denominador;
    return new NumeroComplexo(parteReal, parteImaginaria);
  }

  // Método para imprimir as partes real e imaginária
  print() {
    console.log(`Número Complexo: ${this.real} + ${this.imaginario}i`);
  }
}

// Exemplo de uso
const num1 = new NumeroComplexo(2, 3);
const num2 = new NumeroComplexo(1, -1);

num1.print(); // Saída: Número Complexo: 2 + 3i
num2.print(); // Saída: Número Complexo: 1 - 1i

const somaResult = num1.soma(num2);
sumResult.print(); // Saída: Número Complexo: 3 + 2i

const subtracaoResult = num1.subtracao(num2);
subtractResult.print(); // Saída: Número Complexo: 1 + 4i

const multiplicacaoResult = num1.multiplicacao(num2);
multiplyResult.print(); // Saída: Número Complexo: 5 + 1i

const divisaoResult = num1.divisao(num2);
divideResult.print(); // Saída: Número Complexo: 2.5 + 2.5i


``` 