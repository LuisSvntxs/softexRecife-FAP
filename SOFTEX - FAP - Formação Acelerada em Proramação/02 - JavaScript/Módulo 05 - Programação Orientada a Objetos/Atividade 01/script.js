// Definição do TAD para números complexos
class ComplexNumber {
    constructor(real, imaginary) {
      this.real = real;
      this.imaginary = imaginary;
    }
  
    // Método para somar números complexos
    add(otherComplex) {
      const realPart = this.real + otherComplex.real;
      const imaginaryPart = this.imaginary + otherComplex.imaginary;
      return new ComplexNumber(realPart, imaginaryPart);
    }
  
    // Método para subtrair números complexos
    subtract(otherComplex) {
      const realPart = this.real - otherComplex.real;
      const imaginaryPart = this.imaginary - otherComplex.imaginary;
      return new ComplexNumber(realPart, imaginaryPart);
    }
  
    // Método para multiplicar números complexos
    multiply(otherComplex) {
      const realPart = this.real * otherComplex.real - this.imaginary * otherComplex.imaginary;
      const imaginaryPart = this.real * otherComplex.imaginary + this.imaginary * otherComplex.real;
      return new ComplexNumber(realPart, imaginaryPart);
    }
  
    // Método para dividir números complexos
    divide(otherComplex) {
      const denominator = otherComplex.real ** 2 + otherComplex.imaginary ** 2;
      const realPart = (this.real * otherComplex.real + this.imaginary * otherComplex.imaginary) / denominator;
      const imaginaryPart = (this.imaginary * otherComplex.real - this.real * otherComplex.imaginary) / denominator;
      return new ComplexNumber(realPart, imaginaryPart);
    }
  
    // Método para imprimir as partes real e imaginária
    print() {
      console.log(`Número Complexo: ${this.real} + ${this.imaginary}i`);
    }
  }
  
  // Exemplo de uso
  const num1 = new ComplexNumber(2, 3);
  const num2 = new ComplexNumber(1, -1);
  
  num1.print(); // Saída: Número Complexo: 2 + 3i
  num2.print(); // Saída: Número Complexo: 1 - 1i
  
  const sumResult = num1.add(num2);
  sumResult.print(); // Saída: Número Complexo: 3 + 2i
  
  const subtractResult = num1.subtract(num2);
  subtractResult.print(); // Saída: Número Complexo: 1 + 4i
  
  const multiplyResult = num1.multiply(num2);
  multiplyResult.print(); // Saída: Número Complexo: 5 + 1i
  
  const divideResult = num1.divide(num2);
  divideResult.print(); // Saída: Número Complexo: 2.5 + 2.5i
  