let cards = document.querySelector('.cards')

fetch('lutadores.json')
.then( resposta => resposta.json() )
.then( dados => {
    dados.lutadores.map( lutador => {
        //console.log(lutador)
        let card = document.createElement('div')
        card.classList.add('card')
        //console.log(card)
        card.innerHTML = `
            <img src="./img/${lutador.foto}" alt="">
            <span class="nome">${lutador.nome}</span>
            <span class="nacionalidade">${lutador.nacionalidade}</span>
            <span class="idade">${lutador.idade} anos</span>
            <span class="peso">${lutador.peso} KG</span>
            <span class="altura">${lutador.altura}</span>
        `
        cards.appendChild(card)
    })
})