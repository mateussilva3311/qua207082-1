const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const ladoA = Number(frm.ladoA.value)
    const ladoB = Number(frm.ladoB.value)
    const ladoC = Number(frm.ladoC.value)

    if (
        ladoA < ladoB + ladoC &&
        ladoB < ladoA + ladoC &&
        ladoC < ladoA + ladoB
    ) {
        resp1.innerText = `os lados podem formar um triagulo`
    } else {
        resp1.innerText = `os lados NÃO podem  formar um triagulo`
        resp2.innerText = ""
    }

    if (ladoA === ladoB && ladoB === ladoC) {
        resp2.innerText = "tipo: Equilataero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        resp2.innerText = "tipo: Isóceles"
    } else {
        resp2.innerText = "tipo: Escaleno"
    }
})