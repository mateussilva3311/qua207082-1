const prompt = require('prompt-sync')()
const numero = Number(prompt('numero (centena):'))

if(numero < 100 || numero > 999){
    console.log('erro... deve ser uma cetena')
    return
}

const num1 = Math.floor(numero / 100) // obtém 1º numero
const sobra = numero % 100// oque sobra (dezena)
const num2 = Math.floor(sobra / 10) // obtem o 2º numero
const num3 = sobra % 10 // obtém o 3º numero

console.log(`invertido: ${num3}${num2}${num1}`) // numeros invertidos

