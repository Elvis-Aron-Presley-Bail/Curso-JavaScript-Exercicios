const texto = document.querySelector('#texto')
const botao = document.querySelector('#botao')
const nome  = document.querySelector('#nome')


const procurar = async (valor) => {

    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`)
    const dados = await resposta.json()
    return dados

}

const renderizar = async (valor) => {

    const dados = await procurar(valor)
    nome.innerHTML = dados.name

}

botao.addEventListener('click', () => {

    let textoTxt = texto.value
    renderizar(textoTxt)

})