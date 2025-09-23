const frm = document.querySelector("form")
const respNumero = document.querySelector("pre")
const respSequencia = document.querySelector("span")
const numeros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let sequencia = ""
    if (numeros.indexOf(numero) >= 0) {
        alert("Número inválido, por favor não repita os números")
        frm.inNumero.value = ""
        frm.inNumero.focus()
        return
    }

    numeros.push(numero)
    for (let i = 0; i < numeros.length; i++) {
        sequencia += `${numeros[i]}, `
    }

    respNumero.innerText = `Números: ${sequencia}`
    frm.inNumero.value = ""
    frm.inNumero.focus()
})

frm.btVerificar.addEventListener("click", () => {
    if (numeros.length == 0) {
        alert('Nenhum número foi inserido.')
        return
    }
    let crescente = true;
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numeros[i - 1]) {
            crescente = false
            break
        }
    }
    if (crescente) {
        respNumero.innerText = `Numeros: ${numeros}`
        respSequencia.innerText = `Atenção...Os números estão em ordem crescente.`
    } else {    
        respNumero.innerText = `Numeros: ${numeros}`
        respSequencia.innerText = `Atenção...Os números NÃO estão em ordem crescente.`
    }
})
