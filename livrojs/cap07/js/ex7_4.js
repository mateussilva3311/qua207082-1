const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    //obter o nome infomado e retirar espaços em branco do inicio e final da string
const nome = frm.inNome.value.trim()
    //se o nome não (!) possuie espaços alert para inserir nome completo
if(nome.includes(" ") == false){
    alert("informe o nome completo...")
    return
}
    //gravar a posição do primeiro espaço
const priespaço = nome.indexOf(" ")
    //gravar a posição do ultimo espaço
const ultespaço = nome.lastIndexOf(" ")
    //copiar nome e sobrenome esando os parametros string
const cracha = nome.substr(0,priespaço)+nome.substr(ultespaço)
    //exibir resposta
    resp.innerText = cracha
    })