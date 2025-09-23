const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const candidatos = [] //declara o vetor total
//incluis grianças fixas
candidatos.push({ nome:"André",acertos: 36})
candidatos.push({ nome:"Débora",acertos: 35})
candidatos.push({ nome:"Eduardo",acertos: 33})
candidatos.push({ nome:"Giovana",acertos: 31})

frm.btListar.addEventListener("click", () => {
    if (candidatos.length == 0) {
        alert("Não há criancas na lista")
        return
    }
    //Método reduce() concatena uma string, obtendo modeço e preco de cada crianca
    const lista = candidatos.reduce((acumulador, candidato) =>
        acumulador + candidato.nome + ` - Acertos: ${candidato.acertos} \n`, "")
    resp.innerText = `${lista}`
})


frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const acertos = Number(frm.inAcertos.value)
    candidatos.push({ nome, acertos })// adiciona dados ao vetor de objetos
    //limpa os campos do form
    frm.inNome.value = ""
    frm.inAcertos.value = ""
    frm.inNome.focus()
    //atualiza a lista dos carros na tela
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btArpovados.addEventListener("click", () => {
    const minimo = Number(prompt("Número de Acertos para arovação"))
    //se não iformou o valor ou valor invalido
    if (minimo == 0 || isNaN(minimo)) {
        return
    }
    //.filter criar um novo vetor que atende a condição de filtro
    const canditatoFiltro = candidatos.filter(nome => nome.acertos >= minimo)
    if (canditatoFiltro.length == 0) {
        alert("Não há candidatos com nota igual ou superior ao solicitado")
        return
    }

    let lista = ""
    
    for (const candidatos of canditatoFiltro) {
        lista += `${candidatos.nome} - acertos:${candidatos.acertos}\n`
    }
    resp.innerText += lista
})