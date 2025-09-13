const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let divisores = `Divisores de ${numero}: 1`
    let soma = 1

    for(let i = 2; i <= numero/2; i++){
        if(numero % i == 0){
            soma += i
            divisores += ',' + i
        }

    }
    resp1.innerText = `${divisores} (soma: ${soma})`
    if(soma == numero){
        resp2.innerText = `${numero} É um numero perfeito`
    }else{
        resp2.innerText = `${numero} NÃO é um numero perfeito`
    }
   
})