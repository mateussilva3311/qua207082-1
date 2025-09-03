const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const horabrasilia = frm.inHoraBrasil.value
    let horafranca = Number(horabrasilia) + 5

    if(horafranca >= 23.59){
        horafranca = horafranca - 24
    }

    resp.innerText = `Hora na França: ${horafranca} horas`
})