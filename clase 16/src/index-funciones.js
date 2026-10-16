//funciones

//funcion  de declaracion
function suma(a, b) {
    return a + b
}

const resultado = suma(10, 20)
console.log(resultado)

const modulo = function (a, b) {
    return a % b
}
console.log(modulo)

//funcion flecha o FatArrow
//son funciones anonimas
//si hay un solo parametro no es necesario poner parentesis porque esta implicito
//si no hay o mas de 1 hay que poner parametros


const resta = (a, b) => {
    return a - b
}

const resultado2 = resta(15, 5)
console.log(resultado2)

const multiplicar = (a, b) => a * b
const dividirpor2 = a => a / 2

//en js se hace callback de funciones, si se la llama con los parentesis es para ejecutarla

const b = (cb) => {
    console.log('se ejecuta b')
    cb()
}
//puede tener otro nombre, estamos declarando una variable de callback
//la vamos a pasar como argumento de b
const cb = ()=>{
    console.log('se ejecuto el callback')
}

//ejecutamos b y cb funciona como el argumento
b(cb)

