const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let resposta = ""
    const chichilas = Number(frm.inChichilas.value)
    const ano = Number(frm.inAnos.value)
    for (let i = 1; i <= ano; i++) {

        resposta = resposta + `${i}º ano: ${chichilas * 3 ** (i - 1)} chichilas \n`

    }

    resp.innerText = resposta
})