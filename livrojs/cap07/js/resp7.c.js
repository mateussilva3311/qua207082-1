const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const dataInfra = new Date(frm.inData.value);
    const multa = Number(frm.inValor.value);

    const dataLimite = new Date(dataInfra);
    dataLimite.setDate(dataLimite.getDate() + 90);

    const valorDesconto = multa * 0.8;

    const dia = String(dataLimite.getDate()).padStart(2, "0");
    const mes = String(dataLimite.getMonth() + 1).padStart(2, "0");
    const ano = dataLimite.getFullYear();

    resp.innerText = `Data limite para pagamento com desconto: ${dia}/${mes}/${ano}\n Valor com desconto: R$ ${valorDesconto.toFixed(2)}`;
});