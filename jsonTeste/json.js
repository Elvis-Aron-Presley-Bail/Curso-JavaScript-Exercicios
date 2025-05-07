let sectionCards = document.querySelector('.cards')

fetch('jogadores.json')
.then( response => response.json() )
.then( data => {
    //console.log(data)
    data.map( jogador => {
        //console.log(jogador)
        let card = document.createElement('div')
        card.classList.add('card', jogador.grupo.toLowerCase())
        //console.log(card)
        card.innerHTML = `
            <img src="./images/300x300/${jogador.imagem}.png" alt="" />
            <span class="fundo${jogador.grupo}">${jogador.nome}</span>
        `
        sectionCards.appendChild(card)
    })
})
