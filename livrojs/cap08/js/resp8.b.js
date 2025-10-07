const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    if (nome.includes(" ") == false) {
        alert("informe o nome completo...")
        return
    }

    const obterSobrenome = (nome) => {
        const partes = nome.split(" ");
        return partes[partes.length - 1].toLowerCase();
    }

    const contarVogais = (nome) => {
        const vogais = nome.match(/[aeiou]/gi);
        const numVogais = vogais ? vogais.length : 0;
        return numVogais.toString().padStart(2, "0");
    }
    resp.innerText = `senha inicial: ${obterSobrenome(nome)}${contarVogais(nome)}`



})


