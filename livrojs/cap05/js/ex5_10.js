const prompt = require("prompt-sync")()
const valor = Number(prompt("valor R$:"))
const num = Number(prompt("nº de parcelas:"))
const valorParcelas = Math.floor(valor/num)
const valorfinal = valorParcelas + (valor % num)
for(let i = 1; i < num; i++){
    console.log(`${i}ª parcela: R$ ${valorParcelas.toFixed(2)}`)
}
console.log(`${num}ª pacela: R$ ${valorfinal.toFixed(2)}`)