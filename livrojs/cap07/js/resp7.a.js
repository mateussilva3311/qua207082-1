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
    /*const mensagem = frm.inMensagem.value
    resp.innerText = mensagem*/
    const criptografada = frm.inMensagem.value
    let temp = criptografada.substr(0,criptografada.length/2)
    const msg =[]
    let aux = 1
    for (let i = 0; i < temp.length; i++){
        msg[aux] = temp.charAt(i)
        aux += 2
    }

     temp = criptografada.substr(criptografada.length/2)
     aux = 0
    for(let i = 0; i < temp.length; i++){
        msg[aux] = temp.charAt(i)
        aux += 2

}
})
