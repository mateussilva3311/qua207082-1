const frm = document.querySelector('form')
const respnome = document.querySelector("span")
const resplista = document.querySelector("pre")
const pacientes = []
//for "tradicional"
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inPaciente.value
    pacientes.push(nome)
    let lista = ""

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`
    }

    resplista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

frm.btUrgencia.addEventListener("click", () => {
// verifica se as validaçoes do form estão ok
//no caso, paciente in reqirede
    if (!frm.checkValidity()) {
        alert("informe o numero do paciente a ser atendido com urgencia")
        frm.inPaciente.focus()
        return
    }
    const nome = frm.inPaciente.value
    pacientes.unshift(nome) // adiciona paciente no inicio do vetor
    let lista = ""
    //forEact aplicado sobre o arry paciente

    pacientes.forEach((paciente, i) => (lista += `${i+1}. ${paciente}\n`))
    resplista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

frm.btAtender.addEventListener("click", ()=>{
    //se o tamanho do valor = 0
    if(pacientes.length == 0){
        alert("não há pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }
    const atender = pacientes.shift() // remove do inicio da fila (e obetém o nome)
    respnome.innerText = atender // exibe o nome do paciente em atendimento
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i+1}. ${paciente}\n`))
    resplista.innerText = lista
})

