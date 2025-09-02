const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2) / 2

    resp1.textContent = `media das notas: ${media.toFixed(2)}`
    if (media >= 7) {
        // mensagem de arpovado em azul
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a).`
        resp2.style.color = "blue"
    } else if (media >= 4) {
        // mensagem de atenção em verde
        resp2.innerText = `Atenção ${nome}. Você está em exame`
        resp2.style.color = "green"
    } else {
        // mensagem de reprovado em vermelho
        resp2.innerText = `ops ${nome}! Você foi reprovado(a).`
        resp2.style.color = "red"
    }
})