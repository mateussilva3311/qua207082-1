const frm = document.querySelector('form')


async function getData(url) {
    const resposta = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/" + url)
    const data = await resposta.json()
    return data
}
function carreguarselect(select, url) {
    getData(url).then((ls) => {
        // console.table(ls)
        for (const i of ls) {
            const option = document.createElement("option")
            option.value = i.id
            option.innerText = i.nome 
            option.innerText += i.sigla != undefined ? `(${i.sigla})` : ""
            select.appendChild(option)
        }
    })
}

carreguarselect(frm.inRegiao, "regioes")
carreguarselect(frm.inEstado, "estados")

frm.inEstado.addEventListener("change", () => {
    const uf = frm.inEstado.value
    frm.inMunicipio.innerHTML = ""
    carreguarselect(frm.inMunicipio, `estados/${uf}/municipios`)
})