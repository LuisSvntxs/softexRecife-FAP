//Calculadora de Média

var media, nota;

media = 0;

for(let i = 1; i <= 3; i++){
    nota = parseFloat(prompt("Informe a " + i + "° nota: "));
    if(nota < 0.0 || nota > 10.0){
        console.log("Nota inválida");
    }else{
        media += nota;
    }
}

media /= 3; 

console.log("A sua média é: " + media);


