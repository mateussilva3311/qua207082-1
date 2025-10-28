const original = document.querySelector(".produto")
const produtos = document.querySelector(".produtos")
const divcarrinho = document.querySelector(".carrinho")
produtos.innerHTML = ""
for (const p of lsProduto) {
    const clone = original.cloneNode(true)
    clone.querySelector(".nome").innerText = p.nome
    clone.querySelector(".descricao").innerText = p.descricao
    clone.querySelector("img").src = p.img
    clone.querySelector(".valor").innerText = `R$ ${p.valor.toFixed(2)}`
    produtos.appendChild(clone)
}
document.querySelectorAll(".produto").forEach((p, i) => {
    p.addEventListener("click", () => {
        p.classList.toggle("marcado")
        if (lsProduto[i].qt == undefined) {
            lsProduto[i].qt = 1
        } else {
            delete lsProduto[i].qt
        }
        atualizarQT()
    })
})

function atualizarQT() {
    const qt = lsProduto.filter(p => p.qt >= 1)
    document.querySelector("#qt").innerText = qt.length > 0 ? qt.length : ""

    // if(qt.length > 0){
    //     document.querySelector("#qt").style.display = "block"
    // }else{
    //     document.querySelector("#qt").style.display = "none"
    // }
}

document.querySelector("#btVela").addEventListener("click", carrinho)

function carrinho() {
    const qt = document.querySelector("#qt").innerText
    if (qt == "") {
        alert("necessario selecionar 1 item")
        return
    }
    produtos.classList.toggle("ocultar")
    divcarrinho.classList.toggle("ocultar")
    atualizartb()
}

let pedido
function atualizartb() {
    pedido = ""
    let total = 0
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = ""
    for (let i = 0; i < lsProduto.length; i++) {
        const p = lsProduto[i]
        if (p.qt > 0) {
            tbody.innerHTML += `<tr>
            <td>${p.nome}</td>
            <td>${p.qt}</td>
            <td>${p.valor.toFixed(2)}</td>
            <td>${(p.qt * p.valor).toFixed(2)}</td>
            <td onclick="add(${i}, 1)">+</td>
            <td onclick="add(${i},-1)">-</td>
            </tr>           
            `
            total += p.qt * p.valor
                pedido += `${p.nome} (${p.qt}x${p.valor} = ${p.valor*p.qt})\n`
        }
    }
    tbody.innerHTML += `
    <tr>
    <td colspan="3">valor final</td>
    <td colspan="3">${total.toFixed(2)}</td>
    </tr>
    `

    pedido += `total = ${total.toFixed(2)}\n`
}

function add(i, valor) {
    lsProduto[i].qt += valor
    atualizartb()
    if (lsProduto[i].qt == 0) {
        document.querySelectorAll(".produto")[i].dispatchEvent(new Event("click"))
    }
    const qt = lsProduto.filter(p => p.qt >= 1)
    if(qt == ""){
        produtos.classList.toggle("ocultar")
        divcarrinho.classList.toggle("ocultar")
    }
}
const frm  = document.querySelector("form")
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    let msg = "desejo fazer o seguinte pedido!\n"
    msg += pedido
    msg += `att: ${nome}`
    if(confirm("deseja enviar essa mensagem?\n"+msg)){
        msg = encodeURI(msg)
        const link = `https://api.whatsapp.com/send?phone=5561992447982&text=${msg}`
        window.open(link, '_blank')
    }
})