const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const carros = []//declara vetor
//incluir alguns carros fixos
carros.push({ modelo: "sandeiro 2014", preco: 32900 })
carros.push({ modelo: "celta 2011", preco: 19500 })
carros.push({ modelo: "palio 2012", preco: 26800 })
carros.push({ modelo: "fusca 1994", preco: 12500 })
carros.push({ modelo: "fiesta 2010", preco: 23000 })
carros.push({ modelo: "gol 2009", preco: 24300 })
carros.push({ modelo: "kwid 2018", preco: 35700 })
carros.push({ modelo: "astra 2011", preco: 31500 })

frm.btListar.addEventListener("click", () => {
    if (carros.length == 0) {
        alert("Não há carros na lista")
        return
    }
    //Método reduce() concatena uma string, obtendo modeço e preco de cada carro
    const lista = carros.reduce((acumulador, carro) =>
        acumulador + carro.modelo + ` - R$: ${carro.preco.toFixed(2)}\n`, "")
    resp.innerText = `lista dos Carros Cadastrados:\n${"-".repeat(40)}\n${lista}`
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

frm.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("qual o valor máximo que o cliente deseja"))
    //se não iformou o valor ou valor invalido
    if (maximo == 0 || isNaN(maximo)) {
        return
    }
    //.filter criar um novo vetor que atende a condição de filtro
    const carrosFiltro = carros.filter(carro => carro.preco <= maximo)
    if (carrosFiltro.length == 0) {
        alert("Não há carros com preco inferior ou igual ao solicitado")
        return
    }

    let lista = ""
    for (const carros of carrosFiltro) {
        lista += `${carros.modelo} - R$: ${carros.preco.toFixed(2)}\n`
    }
    resp.innerText = `carros de até R$: ${maximo.toFixed(2)}\n`
    resp.innerText += "*".repeat(40) + "\n"
    resp.innerText += lista
})
frm.btSimular.addEventListener("click", ()=>{
    const desconto = Number(prompt("Qual o percentual de desconto:"))
    if(desconto == 0 || isNaN(desconto)){
        return
    }
    const carrosDesc = carros.map(aux => ({
        modelo:aux.modelo,
        preco:aux.preco - (aux.preco * desconto/100)
    }))

    let lista = ""
    for(const carro of carrosDesc){
        lista+=`${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
     resp.innerText = `carros de desconto R$: ${desconto}%\n`
    resp.innerText += "$".repeat(40) + "\n"
    resp.innerText += lista
})