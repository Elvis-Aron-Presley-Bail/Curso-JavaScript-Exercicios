let numPerg = document.querySelector('#numPerg')
let perguntaTxt = document.querySelector('#perguntaTxt')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

let placar = document.querySelector('#pontos')

let questaoAgora = 1

let pontos = 0

const q0 = {
    numeroQuestao : 0,
    pergunta : 'pergunta',
    alternativaA : "alternativaA",
    alternativaB : "alternativaB",
    alternativaC : 'alternativaC',
    resposta : 'resposta'
}

const q1 = {
    numeroQuestao : 1,
    pergunta : 'Quanto é 1 + 1?',
    alternativaA : "1",
    alternativaB : "2",
    alternativaC : '45290',
    resposta : '2'
}

const q2 = {
    numeroQuestao : 2,
    pergunta : 'Qual é a capital do Brasil?',
    alternativaA : "Marte",
    alternativaB : "Lua",
    alternativaC : 'Brasília',
    resposta : 'Brasília'
}

const q3 = {
    numeroQuestao : 3,
    pergunta : 'Qual número é maior?',
    alternativaA : "4",
    alternativaB : "7",
    alternativaC : '9 trilhões',
    resposta : '9 trilhões'
}

const questoes = [q0, q1, q2, q3]

numPerg.textContent = questoes[questaoAgora].numeroQuestao
perguntaTxt.textContent = questoes[questaoAgora].pergunta
a.textContent = questoes[questaoAgora].alternativaA
b.textContent = questoes[questaoAgora].alternativaB
c.textContent = questoes[questaoAgora].alternativaC
a.setAttribute('value', questaoAgora+'A')
b.setAttribute('value', questaoAgora+'B')
c.setAttribute('value', questaoAgora+'C')

function proximaQuestao() {

    numPerg.textContent = questoes[questaoAgora].numeroQuestao
    perguntaTxt.textContent = questoes[questaoAgora].pergunta
    a.textContent = questoes[questaoAgora].alternativaA
    b.textContent = questoes[questaoAgora].alternativaB
    c.textContent = questoes[questaoAgora].alternativaC
    a.setAttribute('value', questaoAgora+'A')
    b.setAttribute('value', questaoAgora+'B')
    c.setAttribute('value', questaoAgora+'C')

}

function verificarSeAcertou(nQuestao, resposta) {
    let respostaCerta = questoes[questaoAgora].resposta
    let respostaEscolhida = resposta.textContent

    questaoAgora += 1

    if (questaoAgora > questoes.length-1) {
        fimDeJogo()
    }

    if (respostaEscolhida == respostaCerta) {
        console.log('voce acertou')
        pontos += 10
    } else {
        console.log('voce errou')
    }

    placar.textContent = pontos

    proximaQuestao(questaoAgora)

}

function fimDeJogo() {
    const alternativas = document.querySelector('#alternativas')
    alternativas.style.display = 'none'
}
