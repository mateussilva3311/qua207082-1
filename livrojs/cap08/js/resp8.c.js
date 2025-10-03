const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.rbNaoConvenio.addEventListener("click", () => {
    if (frm.rbNaoConvenio.checked) {
        frm.inSimConvenio.className = "oculta"
    }
})

frm.rbSimConvenio.addEventListener("click", () => {
    if (frm.rbSimConvenio.checked) {
        frm.inSimConvenio.className = "exibe"
    }
})

frm.addEventListener("submit", (e) => {
    e.preventDefault() 
    const valor = Number(frm.inValor.value)
    let desconto = 0
    let valordesconto = 0
    if(frm.rbNaoConvenio.checked){
        desconto = valor * 0.90
    }else{
    if(frm.inSimConvenio.value == "AmigodosAnimais"){
         desconto = valor * 0.80 
    }else{
        desconto = valor / 2
    }}
    valordesconto = valor - desconto
    resp.innerText = `Desconto R$: ${valordesconto.toFixed(2)}\nvalor da vacina: R$ ${desconto.toFixed(2)}`
})
