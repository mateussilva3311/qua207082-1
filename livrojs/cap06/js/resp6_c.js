const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const candidatos = []
//incluir candidatos fixas
candidatos.push({nome:"André", acertos:35})
candidatos.push({nome:"Bianca", acertos:29})
candidatos.push({nome:"Carlos", acertos:27})
candidatos.push({nome:"Débora", acertos:33})
candidatos.push({nome:"Eduardo", acertos:36})
candidatos.push({nome:"Fernanda", acertos:28})
candidatos.push({nome:"Giovana", acertos:31})

frm.btListar.addEventListener("click", ()=>{
    if(candidatos.length == 0){
        alert("Não há candidatos na lista")
        return
    }

    // método reduce() concatena uma string, obtendo nome e idade
    const lista = candidatos.reduce((acumulador, candidato) => 
        acumulador + candidato.nome + ` - ${candidato.acertos} acertos \n`,"")
    resp.innerText = `${lista}`
})

// dispara o evento de click em btListar(equivale a um click no botão)
frm.btListar.dispatchEvent(new Event("click"))

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inCandidato.value
    const acertos = Number(frm.inAcertos.value)

    candidatos.push({nome,acertos}) //adiciona dados ao vetor de objetos

    //limpar os campos do form
    frm.inCandidato.value = ""
    frm.inAcertos.value = ""
    frm.inCandidato.focus()

    // atualiza a lista dos candidatos na tela
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btAprovados.addEventListener("click", ()=>{ 
    const aprovacao = Number(prompt("Número de acertos para aprovação"))

    // se não informou o valor ou valor inválido
    if(aprovacao == 0 | isNaN(aprovacao)){
        alert("Informe um valor valido.")
        return
    }

    const copia = [...candidatos]

    copia.filter(candidato => candidato.acertos >= aprovacao)
    
    if(copia.length == 0){
        alert("Nenhum candidato alcançou a nota para aprovação.")
        return
    }

    copia.sort((a,b) => b.acertos - a.acertos)
    
    let lista = ""  
    

    for(const candidato of copia){
        lista += `${candidato.nome} - ${candidato.acertos}\n`
    }
    
    resp.innerText = `Pontos necessários para aprovação: ${aprovacao}\n`
    resp.innerText += "*".repeat(40)+"\n"
    resp.innerText += lista

})