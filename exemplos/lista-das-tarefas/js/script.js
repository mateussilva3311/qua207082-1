const frm = document.querySelector("form")
const tbody = document.querySelector("tbody")
let lsItem = []
let filtro = localStorage.getItem("filtro")
filtro = filtro == null ? "" : filtro
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const item = frm.inItem.value
    const status = frm.inStatus.value
    const index = frm.inIndex.value
    // incluir ou atualizar
    index == "" ? lsItem.push({ item, status }) : lsItem[index] = { item, status }
    atualizarTabela()
})


function prepararEdicao(index) {
    frm.inItem.value = lsItem[index].item
    frm.inStatus.value = lsItem[index].status
    frm.inIndex.value = index
    frm.btApagar.disabled = false
}

frm.btApagar.addEventListener("click", () => {
    const index = frm.inIndex.value
    if (index == "") {
        alert("Necessário selecionar 1 item!")
        return
    }
    if (confirm("deseja realmente apagar esse item?") == false) {
        return
    }
    lsItem.splice(index, 1)
    atualizarTabela()
    frm.inIndex.value = ""
})

const cores = {
    "em fila": "bg-secondary-subtle",
    "iniciado": "bg-primary-subtle",
    "concluído": "bg-danger-subtle"
}

function atualizarTabela() {
    limpar()
    localStorage.setItem("lsItem", JSON.stringify(lsItem))
    tbody.innerHTML = ""
    let cont = 0
    for (i of lsItem) {
        if (filtro == "" || filtro.includes(i.status)) {
            tbody.innerHTML += `<tr onclick="prepararEdicao(${cont})"><td>${i.item}</td><td class="${cores[i.status]}">${i.status}</td></tr>`
        }
        cont++
    }
}

function limpar() {
    frm.inItem.value = ""
    frm.inStatus.value = ""
    frm.inIndex.value = ""
    frm.btApagar.disabled = true
}

if (localStorage.getItem('lsItem') != null) {
    lsItem = JSON.parse(localStorage.getItem('lsItem'))
    atualizarTabela()
}

const lsfiltro = frm.querySelectorAll("input[type='checkbox']")
for (const bt of lsfiltro) {
    bt.addEventListener("click", filtrar)
    if (filtro.includes(bt.value)) {
        bt.checked = true
    }
}

function filtrar() {
    filtro = ""
    for (const bt of lsfiltro) {
        filtro += bt.checked ? bt.value + ',' : ""
    }
    atualizarTabela()
    localStorage.setItem("filtro", filtro)
}