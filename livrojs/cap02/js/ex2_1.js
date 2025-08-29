//criar referencia ao form e ao elemento h3 (onde sera exibido a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//criar um "ouvinte" de evento, acionado quando o botao submit for clicado
frm.addEventListener("keyup", (e) => {
    const nome = frm.inNome.value //obter o nome digitado no formulario
    resp.innerHTML = `olá <i>${nome}</i>`//exibir a resposta do programa
    e.preventDefault() //evitar o envio do formulario

}) 