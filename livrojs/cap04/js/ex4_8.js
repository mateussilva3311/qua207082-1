const prompt = require("prompt-sync")()
const valor = Number(prompt("valor do produto:"))
const aux = Math.floor(valor / 20)
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux
const valorParcelas = valor / parcelas
console.log(`pode pagar em ${parcelas} x de R$ ${valorParcelas.toFixed(2)}`)

