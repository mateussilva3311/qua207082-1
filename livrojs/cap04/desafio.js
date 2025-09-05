const frm = document.querySelector("form")
const resp = document.querySelector("h2")
const secreto = Math.round(Math.random()*100)
let tentativas = 0
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    tentativas = tentativas +1

    const chute = Number(frm.inChute.value)

    if (secreto === chute) {
        resp.innerText = `Parabéns, você acertou com ${tentativas} tentativas`
    } else if (secreto > chute) {
        resp.innerText = 'O número secreto é maior'
    } else {
        resp.innerText = 'O número secreto é menor'
    }
})