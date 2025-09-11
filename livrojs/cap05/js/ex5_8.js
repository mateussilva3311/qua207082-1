const promt = require("prompt-sync")()
console.log("programa anos de copa do mundo. digite 0 para sair")
console.log('--------------------------------------------------')

do {
    const ano = Number(promt("ano:"))
    if(ano == 0 ){
        break// sai do programa
    }else if(ano == 1942 || ano == 1946){
        console.log(`não houve copa do mundo em ${ano} (segunda guerra mundial)`)
    }else if(ano >= 1930 && ano % 4 == 2){
        console.log(`sim! ${ano} é ano de copa do mundo`)
    }else{
        console.log(`não ${ano} não é ano de copa do mundo`)
    }
} while (true);