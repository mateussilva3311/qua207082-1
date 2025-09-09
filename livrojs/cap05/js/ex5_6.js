const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let numeroDivisires = 0// declara e inicializa o contador
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            numeroDivisires++
        }
    }
    if(numeroDivisires == 2){
        resp1.innerText = `${numero} é primo`
    }else{
        resp1.innerText = `${numero} não é primo`
    }
})