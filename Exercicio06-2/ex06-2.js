let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

let pontos = 0
let placar = 0

let progresso = document.querySelector('#progresso') //questao tal de tal

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : 'A capital do Brasil é...',
    alternativaA : 'Rio de Janeiro',
    alternativaB : 'Brasilia',
    alternativaC : 'São Paulo',
    correta      : 'Brasilia',
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "O Brasil se localiza em qual continente?",
    alternativaA : "África",
    alternativaB : "Europa",
    alternativaC : "América",
    correta      : "América",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Nascente é o mesmo que...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Oeste",
    correta      : "Leste",
}

const questoes = [q0, q1, q2, q3]

let totalDeQuestoes = (questoes.length)-1

numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

function proximaQuestao(nQuestao){
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function verificarSeAcertou(nQuestao, resposta){
    let numeroDaQuestao = nQuestao.value
    let respostaEscolhida = resposta.textContent
    let respostaCerta = questoes[numeroDaQuestao].correta

    if(respostaEscolhida == respostaCerta){
        console.log('acertou')
        pontos += 10
    } else {
        console.log('errou')
    }

    placar = pontos

    setTimeout(() => {
        proxima = numeroDaQuestao + 1
        if(proxima > totalDeQuestoes){
            console.log('Fim de jogo')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 1000);
}

function fimDoJogo(){
    numQuestao.textContent = 'Fim de Jogo'

    let pont = ''

    if(pontos < 10) {
        pont = ''
    } else if(pontos > 10) {
        pont = 's'
    } else {
        console.log('Tudo certo')
    }

    pergunta.textContent = 'Voce conseguiu ' + pontos + ' ponto' + pont + '.'

    a.textContent = ''
    b.textContent = ''
    c.textContent = ''

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    alternativas.style.display = 'none'
    progresso.style.display = 'none'

    setTimeout(() => {
        pontos = 0 // Zerar placar
        location.reload(); // Recarrega a pagina
    }, 5000); // Exibe isso por 5 segundos
}