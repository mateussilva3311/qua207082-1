const frm = document.querySelector("form");
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value)
    const min = Number(frm.inTempo.value)

    const pormin =Math.ceil(min / 15)
    const total = pormin * valor


    resp1.innerText = `Valor total a pagar R$: ${total.toFixed(2)}`
    e.preventDefault()
})
