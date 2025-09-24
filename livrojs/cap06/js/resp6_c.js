const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const candidatos = []

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

    resp.innerText = ""
    const lista = candidatos.reduce((acumulador, candidato) => 
        acumulador + candidato.nome + ` - ${candidato.acertos} acertos \n`,"")
    resp.innerText = `${lista}`
})


frm.btListar.dispatchEvent(new Event("click"))

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inCandidato.value
    const acertos = Number(frm.inAcertos.value)

    candidatos.push({nome,acertos}) 

    
    frm.inCandidato.value = ""
    frm.inAcertos.value = ""
    frm.inCandidato.focus()

    
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btAprovados.addEventListener("click", ()=>{ 
    const numAcertos = Number(prompt("Número de acertos para Aprovação?"))
    const aprovados = candidatos.filter(candidatos => candidatos.acertos >= numAcertos)
    if(aprovados == 0){
        alert("nenhum candidato foi aprovado")
        return
    }
    aprovados.sort((a,b) => b.acertos - a.acertos)
    resp.innerText = ""
    for(const candidato of aprovados){
        const {nome,acertos} = candidato
        resp.innerText += `${nome} - ${acertos} acertos\n`
    }

})