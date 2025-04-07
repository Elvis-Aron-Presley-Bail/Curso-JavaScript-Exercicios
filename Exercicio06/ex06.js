let pontos = 0
let placar = 0

let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')

let numero = document.querySelector('#numero')

let articleQuestoes = document.querySelector('.questoes')
let alternativas = document.querySelector('#alternativas')

const q1 = {
    numQuestao   : 1,
    pergunta     : 'Qual é a capital do Brasil?',
    alternativaA : 'Rio de Janeiro',
    alternativaB : 'Brasilia',
    correta      : 'Brasilia',
}

const q2 = {
    numQuestao   : 2,
    pergunta     : 'O Brasil foi descoberto em...',
    alternativaA : '1500',
    alternativaB : '1800',
    correta      : '1500',
}

const questoes = [q1,q2]

let totalDeQuestoes = (questoes.length)-1

numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
}

function verificarSeAcertou(nQuestao, resposta) {
    
    let numeroDaQuestao   = nQuestao.value
    let respostaEscolhida = resposta.textContent
    let certa = questoes[numeroDaQuestao].correta

    if(respostaEscolhida == certa) {
        pontos += 10
    } else {
        console.log('errou')
    }

    placar = pontos
    
    setTimeout(() => {
        
        proxima = numeroDaQuestao + 1

        if(proxima > totalDeQuestoes) {
            console.log('fim')
        } else {
            proximaQuestao(proxima)
        }

    }, 300);

}