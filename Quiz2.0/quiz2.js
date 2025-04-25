let numPergTxt = document.querySelector('#numPergTxt')
let pergTxt = document.querySelector('#pergTxt')
let placarTxt = document.querySelector('#placar')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

let questaoAtual = document.querySelector('#questaoAtual')
let totalQuestoes = document.querySelector('#totalQuestoes')

let placar = 0
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

let questoes = [q0, q1, q2, q3]

totalQuestoes.textContent = (questoes.length)-1

numPergTxt.textContent = q1.numeroQuestao
pergTxt.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

function proximaQuestao(nQuestao) {
    let numQuestao = nQuestao
    numPergTxt.textContent = questoes[numQuestao].numeroQuestao
    pergTxt.textContent = questoes[numQuestao].pergunta
    a.textContent = questoes[numQuestao].alternativaA
    b.textContent = questoes[numQuestao].alternativaB
    c.textContent = questoes[numQuestao].alternativaC
    a.setAttribute('value', numQuestao+'A')
    b.setAttribute('value', numQuestao+'B')
    c.setAttribute('value', numQuestao+'C')
}

function verificarSeAcertou(nQuestao, resposta) {
    let questaoAtual = nQuestao.value
    let respostaEscolhida = resposta.textContent
    let certa = questoes[questaoAtual].resposta

    questaoAtual.textContent = questoes[questaoAtual].numeroQuestao

    proxima = questaoAtual+1

    if(proxima > questoes.length-1){
        fimDeJogo()
    }

    if(respostaEscolhida == certa) {
        console.log('Voce acertou')
        pontos += 10
        placarTxt.textContent = pontos
    } else {
        console.log('Voce errou')
    }

    proximaQuestao(proxima)
}

function fimDeJogo() {
    let perENum = document.querySelector('#perENum')
    let progresso = document.querySelector('#progresso')

    perENum.style.display = 'none'
    progresso.style.display = 'none'
    a.style.display = 'none'
    b.style.display = 'none'
    c.style.display = 'none'

    setTimeout(() => {
        location.reload()
    }, 5000);
}