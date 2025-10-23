const original = document.querySelector(".produto")
const produtos = document.querySelector("#produtos")
produtos.innerHTML = ""
for (const p of lsProduto) {
    const clone = original.cloneNode(true)
    clone.querySelector(".nome").innerText = p.nome
    clone.querySelector(".descricao").innerText = p.descricao
    clone.querySelector("img").scr = p.img
    clone.querySelector(".valor").innerText = `R$ ${p.valor.toFixed(2)}`
    produtos.appendChild(clone)
}