const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    //conteudo do campo em maiusculo
    const palavra = frm.inFruta.value.toUpperCase()
    //limpar resposta
    resp.innerText = ""
    // percorre todos os caracteres da palavra
    for (const letra of palavra) {

        if (letra == palavra.charAt(0)) {
            //se letra igual a letra inicial da string
            resp.innerText += letra
        } else {
            // se não colocar o _
            resp.innerText += " _"
        }
    }
        //preencher com "*", conforme o tamanho
        frm.inFruta.value = "*".repeat(palavra.length)

    })