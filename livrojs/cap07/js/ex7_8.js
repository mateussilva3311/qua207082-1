const frm = document.querySelector("form")
// const muta por atraso
const TAXA_MUTA = 2 / 100
//const juros por dia atrasado
const TAXA_JUROS = 0.33 / 100

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    //obten a data de vecimento
    const dtVencimento = frm.inDataVenc.value
    //obter o valor da conta
    const valor = Number(frm.inValor.value)
    //criar a variavel da data atual
    const hoje = new Date()
    //criar abjeto da data de vencimento tipo date()
    const vencimento = new Date()
    //preencher o objeto data de vencimento com os valores da data
    //data vem no formato aaaa-mm-dd
    const parte = dtVencimento.split("-")
    vencimento.setDate(Number(parte[2]))
    vencimento.setMonth(Number(parte[1]) - 1)
    vencimento.setFullYear(Number(parte[0]))
    //calcular a diferença entre datas (em milissegundos)
    const atraso = hoje - vencimento
    //inicializar multa e juros com 0
    let multa = 0
    let juros = 0
    // se conta estiver em atraso fazer os calculos nessesarios
    if (atraso > 0) {
        // converte ms do atraso em dias (1 dia = 24h x 60min x 60seg x 1000ms: 86.400.000)
        const dias = atraso / 86400000

        // calcular muta
        multa = valor * TAXA_MUTA
        //calcular juros
        juros = valor * TAXA_JUROS * dias
    }

    //CALCULE TOTAL
    const total = valor + multa + juros

    //exibir vetores
    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2)
})