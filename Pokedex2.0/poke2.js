const nome = document.querySelector('#nome')
const imagem = document.querySelector('#imagem')
const texto = document.querySelector('#texto')
const botao = document.querySelector('#botao')

let procurar = 1

const fetchPokemon = async (pokemon) => {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await resposta.json()
    return data
}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon)

    nome.innerHTML = data.name
    procurar = data.id
    imagem.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

}

botao.addEventListener('click', () => {
    let textoTxt = texto.value
    renderPokemon(textoTxt)
})

function proximo() {
    procurar++
    renderPokemon(procurar)
}

function anterior() {
    if (procurar > 1) {
        procurar--
        renderPokemon(procurar)
    }
}