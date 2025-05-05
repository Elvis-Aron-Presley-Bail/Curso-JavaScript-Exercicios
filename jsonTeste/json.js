let conteudo = document.querySelector('#conteudo')



    fetch('dados.json').then((Response) => {
        Response.json().then((dados) => {
            dados.jogadores.map((jogador) => {
                atribuir(jogador)
            })
        })
    })

function atribuir(jogador) {
    let jogadoress = jogador.nome
    conteudo.textContent += jogadoress

    console.log(jogadoress)
}
