const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let estrelas     = ""// variavel que ira concatenar as estreslas/traços

    for(let i = 1; i<= numero; i++){
        if (i%2==1) {
            estrelas+='*'
            
        }else{
            estrelas +='-'
        }
    }
    resp.innerText=estrelas
})