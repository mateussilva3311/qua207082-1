const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    if(condutor <= velocide){
    console.log(`sem multa`)
}else if(condutor <= velocide + 20){
    console.log('multa leve')
}else(condutor > velocide + 20){
    console.log("multa grave") 
}
})


    

