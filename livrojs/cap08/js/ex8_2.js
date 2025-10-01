const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    //obter o conteudo do formulario
    const modelo = frm.inModelo.value
    const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    //chamar a function classificarveiculo e salvar na variavel classificacao
    const classificacao = classificacaoveicular(ano)
    //chamar a function calcularentrada e salvar na variavel entrada
    const entrada = calcularEntrada(preco, classificacao)
    const parcela = (preco - entrada) / 10
    //exibir resposta
    resp1.innerText = modelo + ' - ' + classificacao
    resp2.innerText = `entrada R$: ${entrada.toFixed(2)}`
    resp3.innerText = `parcela R$: ${parcela.toFixed(2)} X 10`
})

//desevolver a fucion classificarveiculo
function classificacaoveicular(ano) {
    const anoatual = new Date().getFullYear()
    if (ano == anoatual) {
        return "novo"
    } else if (ano >= anoatual - 2) {
        return "seminovo"
    } else {
        return "usado"
    }
}
//desevolver a fucion calssificarentrada
const calcularEntrada = (preco, clacificacao) => {
    if (clacificacao == 'novo') {
        return preco * 0.5
    } else {
        return preco * 0.3
    }
}  