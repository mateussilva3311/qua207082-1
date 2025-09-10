const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let primo = true// declara e inicializa o contador
    //PERCORRE OS POSIVEIS DIVISORES IMPARES INICIANDO DO 3 ATE METADE DO NUMERO
    for (let i = 3; i <= numero/2 ; i = i + 2 ) {
        if (numero % i == 0) {//VERIFICA SE (3,5,7...) É DIVISOR DO NuMERO
            primo = false // mudar flag
            break//sair do loop
        }
    }
    if((numero<=3 || numero%2!=0)&& primo){
        resp1.innerText = `${numero} é primo`
    }else{
        resp1.innerText = `${numero} NÃO é primo`
    }
})