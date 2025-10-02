const frm = document.querySelector("form")
const resp = document.querySelector("pre")

// vetor global para armazenaar os itens do pedido
const itens = []

// quando o radio button pizza e clicado
frm.rbPizza.addEventListener("click", () => {
    frm.inBebida.className = "oculta"
    frm.inPizza.className = "exibe"
})

// quando o radio button bebida e clicado
frm.rbBebida.addEventListener("click", () => {
    frm.inBebida.className = "exibe"
    frm.inPizza.className = "oculta"
})

//quando o  campo detalhe for focado
frm.inDetalhes.addEventListener("focus", () => {
    //se radio button pizza estiver selecionado
    if(frm.rbPizza.checked) {
        const pizza = frm.inPizza.value
        // USO Do operador ternario, para indicar o numero de sabores
        const num = (pizza =="media") ?  2 : (pizza == "grande") ? 3 : 4
        //atributo  placeholder e exibir o uma dica do preenchimento
        frm.inDetalhes.placeholder = `ate ${num} sabores`
    }else{
        const bebida = frm.inBebida.value
        const sugestao = (bebida == "refri") ? "coca-cola, guarana..." : (bebida == "suco") ? "limão, maracuja, laranja..." : "copo ou jarra"
        frm.inDetalhes.placeholder = `${sugestao}`
    }
})

//limpar o detalhe quando o campo perder foco
frm.inDetalhes.addEventListener("blur", () => {
    frm.inDetalhes.placeholder = ""
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let produto = ""
    if (frm.rbPizza.checked){
        // obter o numero do index do item selecionado
        const num = frm.inPizza.selectedIndex
        //obter o texto do item selecionado
        produto = frm.inPizza.options[num].text
    }else{
         // obter o numero do index do item selecionado
        const num = frm.inBebida.selectedIndex
        //obter o texto do item selecionado
        produto = frm.inBebida.options[num].text
    }
    // obter o texto informado no detalhes
    const detalhes = frm.inDetalhes.value
    //adicionar ao vetor
    itens.push(produto + `(${detalhes})`)
    //exibir os itens do pedido
    resp.innerText = itens.join("\n")
    //limpar o fomulario
    frm.reset()
    //disparar click no rdPizza
    frm.rbPizza.dispatchEvent(new Event("click"))
})