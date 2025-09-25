const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    // obtém senha informada pelo usuário
    const senha = frm.inSenha.value
    // vetor com erros
    const erros = []
    // verifica se o tamanho da senha é inválido
    if (senha.length < 8 || senha.length > 15){
        erros.push("a senha deve ter entre 8 e 15 caracteres")
    }
    // verifica se não possui números
    if (senha.match(/[0-9]/g)==null){
        erros.push("a senha deve possuir números")
    }
    
    // verifica se não possui letras minúsculas
    if (senha.match(/[a-z]/g)==null){
        erros.push("a senha deve possuir letras minúsculas")
    } 

    // verifica se não possui letras maiúsculas ou se possui apenas 1
    if (senha.match(/[A-Z]/g)==null || senha.match(/[A-Z]/g).length < 2){
        erros.push("a senha deve possuir pelo menos 2 letras maiúsculas")
    } 
    // verifica se não possui símbolos ou "_"
    if (senha.match(/[\W_]/g)==null){
        erros.push("a senha deve possuir símbolos ou '_'")
    }
    // se vetor está vazio (significa que não foram encontrados erros)
    if (erros.length == 0){
        resp.innerText = "Senha válida!"
    } else {
        //senão imprime lista de erros
        resp.innerText = "Erros...\n"
        resp.innerText += erros.join("\n")
    }

})
