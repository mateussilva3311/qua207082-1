const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")



frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    limparresp()
    const saque = Number(frm.inSaque.value)
    if(saque % 10 != 0){//verifica se o valor é multiplo de 10
        alert('valor invalido para notas disponiveis(R$ 10, 50, 100)')
        frm.inSaque.focus()//o cursos do teclado será dicionado para o script
        return//retorna vazio para interromper a sequecia do script
    }

    const notascem = Math.floor(saque / 100)
    let resto = saque % 100 
    const notascinquenta = Math.floor(resto / 50) 
    resto = resto % 50 
    const notasdez = Math.floor(resto / 10) 
    if(notascem > 0){
        resp1.innerText = `Notas de R$ 100: ${notascem}`
    }
    if(notascinquenta > 0){
        resp2.innerText = `Notas de R$ 50: ${notascinquenta}`
    }
    if(notasdez > 0){
        resp3.innerText = `Notas de R$ 10: ${notasdez}`
    }
    

})

function limparresp(){
    resp1.innerText = ''
    resp2.innerText = ''
    resp3.innerText = ''
}