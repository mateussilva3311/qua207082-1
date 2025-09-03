const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
const raiz = Math.sqrt(numero)// calcula a raiz quadrada

if (Number.isInteger(raiz)){// verifica se é um número inteiro
    resp.innerText = `raiz: ${raiz}`// mostra a raiz
}else{
    resp.innerText = `não há raiz exata para ${numero}`// mostra a mensagem
}



})