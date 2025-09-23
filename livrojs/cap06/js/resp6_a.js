const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const clubes = []

clubes.push("Grêmio")
clubes.push("Pelotas")
clubes.push("Juventude")
clubes.push("Internacional")
clubes.push("Brasil")
clubes.push("Ypiranga")
clubes.push("Caxias")
clubes.push("Guarany")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const clube = frm.inClube.value

    clubes.push(clube)

    let lista = ""

    for (let i; i < clubes.length; i++) {
        lista += `${clubes[i]}\n`
    }

    resp.innerText = lista
    frm.inClube.value = ""
    frm.inClube.focus()
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
  // verifica se vetor clubes está vazio 
  if (clubes.length == 0) {
    alert("Não há clubes na lista...")    
    return
  }

  const lista = clubes.reduce((acumulador, clube) =>
    acumulador + `${clube}\n`, "")

  resp.innerText = `${lista}`  
})

frm.btTabela.addEventListener("click", () => {  
  
  if (clubes.length % 2 == 1) {
    alert("Quantidade de clubes inválida")    
    return
  }

  resp.innerText = ""  
 
  for (let i = 0; i < clubes.length / 2; i++) {
    resp.innerText += `${clubes[i]} x ${clubes[clubes.length-i-1]}\n`
  }  
})