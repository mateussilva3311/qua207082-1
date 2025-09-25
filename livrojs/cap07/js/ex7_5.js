const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    //obter o nome infomado e retirar espaços em branco do inicio e final da string
    const nome = frm.inNome.value.trim()
    //se o nome não (!) possuie espaços alert para inserir nome completo
    if (nome.includes(" ") == false) {
        alert("informe o nome completo...")
        return
    }
    //dividir o nome em itens de vetor, criando a cada ocorrência do espaço
    const parte = nome.split(" ")
    // vai concatenar letras
    let email = ""
    // obtem nº de itens do vetor parte 
    const tam = parte.length-1
    // percorrer itens do vetor (excento o umtimo)
    for (let i = 0; i < tam; i++) {
        // obtem a letra inicial de cada item
        if (parte[i].length > 2) {
            email += parte[i].charAt(0)
        }
        
    }
    //concatena as letras iniciais com a ultima parte(sobrenome)  e empresa
    email += parte[tam] + "@empresa.com.br"
    //exibir e-mail em minusculo
    resp.innerText = email.toLowerCase()
})