const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const frase = frm.inFrase.value
    const fraseEspaco = frase.replace(/ /g, "").toUpperCase() 
    const tam = frase.length
    let inverso =""
   
    for (let i = tam - 1; i >= 0; i--) {
        
        inverso += fraseEspaco.charAt(i)
    }

    //resp.innerText = `${frase} ${fraseEspaco}`

    if (fraseEspaco == inverso){
        resp.innerText = `${frase} é um palíndromo`
    } else {
        resp.innerText = `${frase} NÃO é palíndromo`
    }
})