// função para adicionar um numero no visor
function adicionar(valor) {
    document.querySelector("#visor").value += valor;
}

//função para linpar o visor
function limpar() {
    document.querySelector("#visor").value = "";
}

//função para apagar o ultimo numero
function apagar() {
    const visor = document.querySelector("#visor");
    visor.value = visor.value.slice(0, -1);
}

//função para calcular o resultado
function calcular() {
    const visor = document.querySelector("#visor")
    try {
        //usar a função eval para calcular o resultado
        visor.value = eval(visor.value);
    } catch (error) {
        visor.value = "Erro"
    }
}

function porcentagem() {
    calcular();
    const visor = document.querySelector("#visor");
    visor.value = visor.value / 100;
}

const botoes = document.querySelectorAll("button");
for(const botao of botoes){
    botao.addEventListener("click", ()=>{
        switch (botao.innerText) {
            case "c":
                limpar();
                break;
            case "←":
                apagar();
                break;
            case "=":
                calcular();
                break;
            case "%":
                porcentagem();
                break;
        
            default:
                adicionar(botao.innerText);
                break;
        }
    })
}