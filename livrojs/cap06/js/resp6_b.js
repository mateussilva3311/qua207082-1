const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

// Array para armazenar os nomes dos pacientes
const numeros = []

// Evento de submit do formulário
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)

    if(numeros.includes(num) == true){
        alert("Número repetido")
        return
    }
    
    numeros.push(num)

    let lista = ""

    //for "Tradicional" (inicia em 0, enquanto menor que tamanho do vetor)
    for(let i = 0; i < numeros.length; i++){
        lista = `Números: ${numeros.join(", ")}`
    }    

    resp1.innerText = lista // exibe a lista de pacientes na página    
    frm.inNumero.value = "" // Limpa o conteúdo do campo do form
    frm.inNumero.focus()
});



frm.btVerificar.addEventListener("click", ()=>{ 
    // verificar se a lista está zerado ?
    if(numeros == 0 ){
        alert("Não há números na lista")
    }

    let crescente = true;

    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > numeros[i + 1]) {
            crescente = false;
            break;
        }
    }

    if (crescente) {
        resp2.innerText = `Os números estão em ordem crescente `
    } else {
        resp2.innerText = `Os números NÃO estão em ordem crescente `;
    }
})
    

    


