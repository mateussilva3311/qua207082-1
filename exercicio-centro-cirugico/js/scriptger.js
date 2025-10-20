const frm = document.querySelector("form")
const tbody = document.querySelector("tbody")
let lsItem = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const item = frm.inPaciente.value
    const status = frm.inStatus.value   

    const local = frm.inLocal.value   
    const inprevisto = frm.inInicioPrevisto.value   
    const incirurgia = frm.inInicioCirurgia.value   
    const fimcirurgia = frm.inFimCirurgia.value   
    const saidaprev = frm.inSaidaPrevisto.value   

    const index = frm.inIndex.value   

    index == "" ? lsItem.push({item,status,local,inprevisto,incirurgia,fimcirurgia,saidaprev}) : lsItem[index] = {item,status,local,inprevisto,incirurgia,fimcirurgia,saidaprev}
   
    atualizarTabela()    
})

function prepararEdicao(index){
    frm.inPaciente.value = lsItem[index].item
    frm.inStatus.value = lsItem[index].status

    frm.inLocal.value = lsItem[index].local
    frm.inInicioPrevisto.value = lsItem[index].inprevisto   
    frm.inInicioCirurgia.value = lsItem[index].incirurgia   
    frm.inFimCirurgia.value = lsItem[index].fimcirurgia   
    frm.inSaidaPrevisto.value = lsItem[index].saidaprev   

    frm.inIndex.value = index
    frm.btApagar.disabled = false
}

frm.btApagar.addEventListener("click", () =>{
    const index = frm.inIndex.value

    if(index == ""){
        alert("Necessário selecionar 1 item.")
        return
    }

    if(confirm("Deseja realmente apagar esse item?") == false){
        return
    }

    lsItem.splice(index,1)
    atualizarTabela()        
})

const coresStatus = {
  "Pré-Operatório": "#fbd972",
  "Em recuperação": "#89e89f",
  "Transferido": "#b8daff"
};

function atualizarTabela() {
    limpar()
    localStorage.setItem("lsItem", JSON.stringify(lsItem))
    
        tbody.innerHTML = ""

        let cont = 0

    for (i of lsItem) {

        const cor = coresStatus[i.status];

        tbody.innerHTML += `<tr onclick="prepararEdicao(${cont})">
        <td>${i.item}</td>
          <td style="background-color:${cor}">
            ${i.status} (${i.local})
          </td>
          <td>${i.inprevisto}</td>
          <td>${i.incirurgia}</td>
          <td>${i.fimcirurgia}</td>
          <td>${i.saidaprev}</td>       
        </tr>`

        cont++
    }
}

function limpar(){
    frm.inPaciente.value = ""  
    frm.inStatus.value = ""
    frm.inLocal.value = ""
    frm.inInicioPrevisto.value = "" 
    frm.inInicioCirurgia.value = ""
    frm.inFimCirurgia.value = ""  
    frm.inSaidaPrevisto.value = ""
    frm.inIndex.value = ""
    frm.inPaciente.focus()
    frm.btApagar.disabled = true
}

if(localStorage.getItem("lsItem") != null){
    lsItem = JSON.parse(localStorage.getItem("lsItem"))
    atualizarTabela()
}