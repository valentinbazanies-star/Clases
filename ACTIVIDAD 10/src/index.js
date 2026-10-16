let edad = 20; 

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

let numero = 4; 

if (numero % 2 === 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}

let nota = 8; 

if (nota < 4) {
    console.log("Reprobado");
} else if (nota >= 4 && nota <= 7) {
    console.log("Aprobado");
} else {
    console.log("Excelente");
}

console.log("Numeros del 1 al 10 ");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("20 iteraciones con Template Literals");
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}