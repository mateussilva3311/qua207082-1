const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)

    if (valor < 1.00) {
        alert ("Valor Insuficiente")
    } else if (valor < 1.75) {
        resp1.innerText = `tempo: 30 minutos`;
        resp2.innerText = `seu troca:${valor - 1.00}`;
    } else if (valor < 3.00) {
        resp1.innerText = `tempo:  60 minutos`
        resp2.innerText = `troco  ${valor - 1.75}`
    } else{
        resp1.innerText = `tempo 120 minutos`;
        resp2.innerText = `troco ${valor - 3.00}`;
    }
})