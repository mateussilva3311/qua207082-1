const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const mensagem = frm.inMensagem.value
    let pares = "" 
    let impares = ""
    for (let i = 0; i < mensagem.length; i++) {
        if (i % 2 == 0) {
            impares += mensagem[i]
        } else {
            pares += mensagem[i]
        }
    }
    const criptografada = pares + impares
    resp.textContent = ` ${criptografada}`
})

frm.inDescrip.addEventListener("click",()=>{
    const mensagem = frm.inMensagem.value
    resp.innerText = mensagem
})