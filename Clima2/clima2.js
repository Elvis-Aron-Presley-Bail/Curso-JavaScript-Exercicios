let textTxt = document.querySelector('#texto')
let nuvemImg = document.querySelector('#nuvemImg')
let graus = document.querySelector('#graus')
let cidadeAtual = document.querySelector('#cidade')

function pesquisar() {

    const key = '722f52c0674cfd4ec24c02cb43dfe613'
    const cidade = textTxt.value
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric`

    async function chamarApi() {
        const resp = await fetch(URL)
        const dados = await resp.json()

        const nuvemAtual = dados['weather'][0]['icon']

        console.log(dados)

        nuvemImg.setAttribute(`src`, `https://openweathermap.org/img/wn/${nuvemAtual}@2x.png`)
        graus.textContent = dados['main']['temp']
        cidadeAtual.textContent = dados['name']

    }

    chamarApi()

}