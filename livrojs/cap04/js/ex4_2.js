const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso;
    if (masculino) {
        peso = 22 * Math.pow(altura,2)
    } else {
        peso = 21 * Math.pow(altura,2)
    }

    resp.innerText = `${nome}: seu peso ideal é ${peso.toFixed(2)} kg`


})

frm.addEventListener("reset", () => {
resp.innerText = "" // limpa o conteúdo do elemento h3 que exibe a resposta
})