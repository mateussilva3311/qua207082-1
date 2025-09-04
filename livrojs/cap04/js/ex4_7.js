const prompt = require('prompt-sync')()// adiciona pacote prompt-sync
const pessoas = Number(prompt('nº de pessoas'))
const peixe = Number(prompt('nº de peixe'))

let pagar

if (peixe <= pessoas) {
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20) + ((peixe - pessoas) * 12)
}

console.log(`pagar R$: ${pagar.toFixed(2)}`) // lê dados de entrada