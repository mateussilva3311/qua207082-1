const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = ""// string com a resposta a ser exibida
let numcontas = 0//inicializa contato
let valTotal = 0//e acumulador

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)

    numcontas++
    valTotal += valor// ou valTotal = valTotal + valor
    resposta += `${descricao} - R$: ${valor.toFixed(2)}\n`

    resp1.innerText = `${resposta}------------------------`
    resp2.innerText = `${numcontas}conta(s) - total R$:${valTotal.toFixed(2)}`

    frm.inDescricao.value = ""
    frm.inValor.value = ""
    frm.inDescricao.focus()

})
frm.addEventListener("reset", () => {
    frm.inDescricao.focus()
    resp1.innerText = ""
    resp2.innerText = ""
    resposta = ""
    numcontas = 0
    valTotal = 0
})
