const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const criancas = [] //declara o vetor total
//incluis grianças fixas
criancas.push({ nome: "lucas", idade: 4 })
criancas.push({ nome: "ana", idade: 3 })
criancas.push({ nome: "bianca", idade: 6 })
criancas.push({ nome: "pedro", idade: 6 })
criancas.push({ nome: "joão", idade: 4 })
criancas.push({ nome: "maria", idade: 4 })
criancas.push({ nome: "juliana", idade: 3 })
criancas.push({ nome: "catia", idade: 6 })

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
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    criancas.push({ nome, idade })// adiciona dados ao vetor de objetos
    //limpa os campos do form
    frm.inNome.value = ""
    frm.inIdade.value = ""
    frm.inNome.focus()
    //atualiza a lista dos carros na tela
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btResumir.addEventListener("click", () => {
    // verificar se a lista esta zerado
    if (criancas == 0) {
        alert("não há crianças na lista")
        return
    }
    // criar a copia do vetor criança
    const copia = [...criancas]
    //ordenar pela idade
    copia.sort((a, b) => a.idade - b.idade)
    //criar uma variavel para concatenar o retorno
    let resumo = ""
    //salvar a menor idade do vetor
    let aux = copia[0].idade
    // criar um vetor para gravar a lista dos nomes por idade
    let nomes = []
    //iniciar um loop para percorrer o vetor de copia
    for (const crianca of copia) {
        const { nome, idade } = crianca// desestruturação
        //verificar se a idade permanece igual 
        if (aux == idade) {
            //se sim incluir o nome da criança na lista nomes
            nomes.push(nome)
        } else {
            //senão montar resumo para cada idade
            resumo = atualizarResumo(resumo, aux, nomes, copia)
            // atualizar a idade aux
            aux = idade
            // limpar vetor nomes
            nomes = []
            //adicionar o primeiro nome da nova
            nomes.push(nome)
        }
    }

    resumo = atualizarResumo(resumo, aux, nomes, copia)
    resp.innerText = resumo
})

function atualizarResumo(resumo, aux, nomes, copia) {
    resumo += `${aux} ano(s) : ${nomes.length} criança(s) -  `
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
    resumo += `(${nomes.join(", ")})\n\n`
    return resumo
}