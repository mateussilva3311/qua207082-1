const original = document.querySelector(".produto")
const produtos = document.querySelector("#produtos")
produtos.innerHTML = ""
for(let i = 0; i < 9; i++){
const clone = original.cloneNode(true)
produtos.appendChild(clone)
}