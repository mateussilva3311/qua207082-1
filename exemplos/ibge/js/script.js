const frm = document.querySelector('form')

async function getData(url) {
    const resposta = await fetch(url)
    const data = await resposta.json()
    return data
}

