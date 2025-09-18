const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const criancas = [] //declara o vetor total
//incluis grianças fixas
criancas.push({nome:"lucas",idade:4})
criancas.push({nome:"ana",idade:3})
criancas.push({nome:"bianca",idade:6})
criancas.push({nome:"pedro",idade:6})
criancas.push({nome:"joão",idade:4})
criancas.push({nome:"maria",idade:4})
criancas.push({nome:"juliana",idade:3})
criancas.push({nome:"catia",idade:6})

frm.btListar.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Não há criancas na lista")
        return
    }
    //Método reduce() concatena uma string, obtendo modeço e preco de cada crianca
    const lista = criancas.reduce((acumulador, crianca) =>
        acumulador + crianca.nome + ` - ${crianca.idade} anos\n`, "")
    resp.innerText = `lista das criancas:\n${"-".repeat(40)}\n${lista}`
})
//dispara o evento de click em btlistar (equivale um click no botão)
frm.btListar.dispatchEvent(new Event("click"))

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    carros.push({ modelo, preco })// adiciona dados ao vetor de objetos
    //limpa os campos do form
    frm.inModelo.value = ""
    frm.inPreco.value = ""
    frm.inModelo.focus()
    //atualiza a lista dos carros na tela
    frm.btListar.dispatchEvent(new Event("click"))
})