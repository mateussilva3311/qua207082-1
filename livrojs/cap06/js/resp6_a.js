const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const clubes = []

clubes.push("Grêmio")
clubes.push("pelotas")
clubes.push("juventude")
clubes.push("internacional")
clubes.push("brasil")
clubes.push("ypiranga")
clubes.push("caxias")
clubes.push("guarany")

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
    frm.btListar.dispatchEvent(new Event("click"))
    })


frm.btListar.addEventListener("click", () => {
    if (clubes.length == 0) {
        alert("Não há clubes na lista")
        return
    }
    //Método reduce() concatena uma string, obtendo modeço e preco de cada crianca
    const lista = clubes.reduce((acumulador, clube) =>
        acumulador + ` ${clube}\n`, "")
    resp.innerText = `${lista}`

})
frm.btListar.dispatchEvent(new Event("click"))

frm.btTabela.addEventListener("click", () => {

    
    if (clubes.length %2 == 1) {
        alert("Quantidade de clubes invalida")
        return
    }
    resp.innerText = ""
   for(let i = 0; i < clubes.length /2; i++){
    resp.innerText += `${clubes[i]} x ${clubes[clubes.length-i-1]}\n`
   }
})
