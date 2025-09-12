const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let divisores = ""
    let soma = 0

    for(let i = 1; i <= numero/2; i++){
        if(numero % i == 0){

        }

    }
    if(soma == numero){
        resp1.innerText = `Divisore de ${numero}: ${divisores} (soma: ${numero})`
        resp2.innerText = `${numero} É um numero perfeito`
    }else{
        resp1.innerText = `Divisore de ${numero}: ${divisores} (soma: ${numero})`
        resp2.innerText = `${numero} NÃO é um numero perfeito`
    }
   
})