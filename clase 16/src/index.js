//metodos de arreglos

const numeros = [2, 8, 4, 6, 12]

//const numerosConIncremento = []
//numeros.forEach((numero, indice) => {
//const incremento = numero + 1
//numerosConIncremento.push(incremento)
//  numeros[indice] = numero + 1//esto es un ejemplo que destruye al const numero
//})

//console.log(numerosConIncremento)



//  .forEach(cb){
//        cb(cadaElemntoDelArreglo)
//}

//la diferencia de map y foreach
//foreach no devuelve nada y map devuelve un nuevo arreglo

const numerosConIncremento = numeros.map((numero) => {
    return numero + 1
})
console.log(numerosConIncremento)

//para la proxima investigar filter y find y traer un ejemplo