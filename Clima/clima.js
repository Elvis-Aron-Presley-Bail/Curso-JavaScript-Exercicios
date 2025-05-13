let textoTxt = document.querySelector('#texto')
let imagem = document.querySelector('#imagem')
let temp = document.querySelector('#temp')
let condi = document.querySelector('#cond')

function pesquisar() {

    const apiKey = '722f52c0674cfd4ec24c02cb43dfe613'
    const cidade = 'Curitiba'
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`

    async function chamarApi() {

        const resp = await fetch(URL)
        const obj  = await resp.json()
        const icone = obj['weather'][0]['icon']

        console.log(obj)

        temp.textContent = obj['main']['temp']
        imagem.setAttribute(`src`, `https://openweathermap.org/img/wn/${icone}@2x.png`)
    }

    chamarApi()

}