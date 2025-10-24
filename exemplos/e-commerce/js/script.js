const original = document.querySelector(".produto")
const produtos = document.querySelector("#produtos")
produtos.innerHTML = ""
for (const p of lsProduto) {
    const clone = original.cloneNode(true)
    clone.querySelector(".nome").innerText = p.nome
    clone.querySelector(".descricao").innerText = p.descricao
    clone.querySelector("img").src = p.img
    clone.querySelector(".valor").innerText = `R$ ${p.valor.toFixed(2)}`
    produtos.appendChild(clone)
}
document.querySelectorAll(".produto").forEach((p,i)=>{
    p.addEventListener("click",()=>{
        p.classList.toggle("marcado")
        if(lsProduto[i].marcado == undefined){
            lsProduto[i].marcado = 1
        }else{
            delete lsProduto[i].marcado
        }
        atualizarQT()
    })
})

function atualizarQT(){
    const qt= lsProduto.filter(p => p.marcado == 1)
    document.querySelector("#qt").innerText = qt.length > 0 ? qt.length : ""

    // if(qt.length > 0){
    //     document.querySelector("#qt").style.display = "block"
    // }else{
    //     document.querySelector("#qt").style.display = "none"
    // }
}

document.querySelector("#btVela").addEventListener("click",carrinho)

function carrinho(){
    const qt = document.querySelectorAll("#qt").innerText
    if (qt == "") {
        alert("necessario selecionar 1 item")
    }}