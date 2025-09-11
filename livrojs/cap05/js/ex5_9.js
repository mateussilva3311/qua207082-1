const prompt = require("prompt-sync")()
const produto = prompt("produto")
const num = Number(prompt("nº da Etiqueta"))
for(let i = 1; i <= num/2; i++){
    console.log(`${produto.padEnd(30,'-')} ${produto.padEnd(30,'-')}`)

}
if(num%2 == 1){//se quantidade de etiquetas for impar
    console.log(produto.padEnd(30,'-')) //imprime mais uma etiqueta
}