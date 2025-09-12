const prompt = require("prompt-sync")()
const produto = prompt("Produto: ")
const num = Number(prompt("Nº de Etiquetas: "))
const eLinha = Number(prompt("Nº de Etiquetas por linha: "))
// Cria um laço de repetição até num/2
for(let i = 1; i < num/eLinha; i++){
    let linha = ""
    for(let j = 1; j <= eLinha; j++){
        linha += `${produto.padEnd(30,'.')}` 
    }
    console.log(linha)
}
let linha = ""
for(let j = 1; j <= num%eLinha; j++){
    linha += `${produto.padEnd(30,'.')}` 
}
console.log(linha)