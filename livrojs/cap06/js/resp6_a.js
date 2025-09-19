const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const clubes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const clube = frm.inClube.value
    clubes.push(clube)
    let lista = ""

    for (let i = 0; i < clubes.length; i++) {
        lista += `${clubes[i]}\n`
    }

    resp.innerText = lista
    frm.inClube.value = ""
    frm.inClube.focus()
    })

    frm.btListar.addEventListener("click", () => {
    if (clubes.length == 0) {
        alert("Não há criancas na lista")
        return
    }
    //Método reduce() concatena uma string, obtendo modeço e preco de cada crianca
    const lista = criancas.reduce((acumulador, crianca) =>
        acumulador + crianca.nome + ` - ${crianca.idade} anos\n`, "")
    resp.innerText = `lista das criancas:\n${"-".repeat(40)}\n${lista}`
})
