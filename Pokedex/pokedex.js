let nome = document.querySelector('#nome')
let imagem = document.querySelector('#imagem')
let procurar = document.querySelector('#procurar')

function clicar() {

    let procurarTxt = procurar.value
    const URL = `https://pokeapi.co/api/v2/pokemon/${procurarTxt}`

    async function chamarApi() {
        const resp = await fetch(URL)
        const obj  = await resp.json()
    
        nome.textContent = obj.name
        imagem.src = obj['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    }
    
    chamarApi()

}