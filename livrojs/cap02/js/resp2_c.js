const frm = document.querySelector("form");
const resp1 = document.querySelector("#outresp1")
const resp2 = document.querySelector("#outresp2")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const total = Math.floor(preco)
    const desconto = total * 3
    resp1.innerText = `promoção: ${produto}`
    resp2.innerText = `leve 3 e por apenas R$ ${desconto.toFixed(2)}`
    e.preventDefault()
    })