const frm = document.querySelector("form")
const respErro = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = [] //vetor de escopo global com número já apostados
const sorteado = Math.floor(Math.random() * 100) + 1 // num aleatorio  entre 1 e 100
const CHANCE = 6 // constante com o numero de chances

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if (numero == sorteado) {
        respDica.innerText = `Parabens!! número sorteado: ${sorteado}`
        frm.btSubmit.disabled = true // troca status dos botões
        frm.btNovo.classname = "exibe"
    } else {
        if (erros.includes(numero)) {//se número existe no vetor erros
            alert(`você ja apostou o numero ${numero}. tente novamente`)

        } else {
            erros.push(numero)// adiciona o numero ao vetor
            const numErros = erros.length // obetem o tamanho do vetor
            const numChances = CHANCE - numErros // calcula nº chances
            //exibe nº erros,conteudo do vetor e nº chances
            respErro.innerText = `${numErros} (${erros.join(",")})`
            respChances.innerText = numChances
            if (numChances == 0) {
                alert("suas chances acabaram...")
                frm.btSubmit.disable = true
                frm.btNovo.classname = "exibe"
                respDica.innerText = `Game Over!! Numero sorteado: ${sorteado}`
            } else {
                //usa operador terminatio para mensagen de dica
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: tente um numero ${dica} que ${numero}`
            }
        }
    }

    frm.inNumero.value = ""
    frm.inNumero.focus()

});
frm.btNovo.addEventListener("click",()=>{
    location.reload()
})