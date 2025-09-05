const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const velocide = Number(frm.velocidade.value)
    const condutor = Number(frm.condutor.value)


    if (condutor <= velocide) {
        resp.innerText = `sem multa`
    } else if (condutor <= velocide + 20) {
        resp.innerText = `multa leve`
    } else{
        resp.innerText = `multa grave`
    }
})




