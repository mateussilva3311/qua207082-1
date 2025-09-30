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

    
     // criptografado    -> opepreaocmr acld
    // descriptografado -> compre parcelado
    const criptografia = frm.inMensagem.value
    // array para gravar a msg descriptografada
    const msg = []
    // metade da palavra
    let temp = criptografia.substr(0,criptografia.length/2)
    // variável auxiliar para somar os pares
    let aux = 1
    // loop para percorrer somente os pares
    for(let i = 0; i < temp.length;i++){
        // colocar na posição pares
        msg[aux] = temp.charAt(i)
        // incremento do próximo numero par
        aux += 2
    }
    // a segunda metade da palavra
    temp = criptografia.substr(criptografia.length/2)
    // variável auxiliar para somar os impares
    aux = 0
    // loop para percorrer somente os impares
    for(let i = 0; i < temp.length;i++){
        // colocar na posição impar
        msg[aux] = temp.charAt(i)
        // incremento do próximo numero impar
        aux += 2
    }
    // escrever mensagemdescriptografada
    resp.innerText = msg.join("")
})
