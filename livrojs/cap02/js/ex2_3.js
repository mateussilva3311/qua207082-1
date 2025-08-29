//criar referencia ao form e aos elemantos de resposata (pelo seu id)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outresp1");
const resp2 = document.querySelector("#outresp2");
const resp3 = document.querySelector("#outresp3");

frm.addEventListener("submit", (e) => {
    const veivulo = frm.inVeiculo.value;
    const preco = Number(frm.inPreco.value);
    
    const entrada = preco * 0.50;
    const parcela = entrada / 12;

    resp1.innerText = `promoção: ${veivulo}`;
    resp2.innerText = `entrada de R$ ${entrada.toFixed(2)}`;
    resp3.innerText = `+ 12x de R$ ${parcela.toFixed(2)}`;

    e.preventDefault();
})