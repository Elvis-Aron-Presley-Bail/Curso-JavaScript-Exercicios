let meio   = document.querySelector('#meio')

const URL = 'lutadores2.json'

fetch(URL)
.then( resposta => resposta.json())
.then( dados => {
    dados.lutadores.map( lutador => {
        console.log(lutador)
        let novoElemento = document.createElement('div')
        novoElemento.innerHTML = `
            <img src="./img/${lutador.foto}" alt="">
            <h1 id="nome">${lutador.nome}</h1>
        `
        meio.appendChild(novoElemento)
    })
})