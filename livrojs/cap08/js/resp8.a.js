const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    let categoria = ""
    const tracos = linhaTracos(nome);

    if (idade <= 12) {
        categoria = "infantil"
    } else if (idade <= 18) {
        categoria = "juvenil"
    } else {
        categoria = "adulto"
    }
    resp.innerText = ` ${nome}\n ${tracos}\n Categoria: ${categoria}`;
})
function linhaTracos(nome) {
    let tracos = "";
    for (let i = 0; i < nome.length; i++) {
        tracos += nome[i] == " " ? " " : "-";
    }
    return tracos;
}
